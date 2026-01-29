import { NextRequest, NextResponse } from 'next/server';
import { findSystemTemplate } from '../../../lib/systemTemplates';

export const runtime = 'edge';

interface GenerateRequest {
  systemName: string;
  yearInstalled: number;
  lifetime: number;
  observedYearsRemaining: number;
  assessmentYear: number;
  systemDescription: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: GenerateRequest = await request.json();
    let {
      systemName,
      yearInstalled,
      lifetime,
      observedYearsRemaining,
      assessmentYear,
      systemDescription
    } = body;

    // --- 1. CLEAN INPUT ---
    // Remove "Description:", "Condition Assessment:", and date prefixes like "2006 - "
    // This prevents duplication when users paste previous assessments.
    systemDescription = systemDescription
      .replace(/Description:/gi, '')
      .replace(/Condition Assessment:/gi, '')
      .replace(/\d{4}\s*-\s*/g, '') // Removes "2006 - "
      .trim();

    // --- 2. ENRICH DESCRIPTION (Always try to find a template) ---
    // If we have a standard definition for this system, append it to the context
    // This ensures the AI uses the "official" description style provided by the user
    const template = findSystemTemplate(systemName);
    if (template) {
      if (systemDescription.length < 50) {
        // If input is short, appending gives us content to work with
        systemDescription += `\n\nStandard Technical Specification: ${template.description}`;
      } else {
        // Even if input is long, provide the standard definition as reference/style guide
        systemDescription += `\n\nPhysical Reference standard: ${template.description}`;
      }
    }

    // Calculate context
    const actualAge = assessmentYear - yearInstalled;
    const expectedAge = lifetime;
    const expectedRemaining = lifetime - actualAge;
    const isOverPerforming = observedYearsRemaining > expectedRemaining;

    // Determine rating
    let rating = 'Not Assessed';
    if (observedYearsRemaining === 10) rating = 'Excellent';
    else if (observedYearsRemaining >= 7 && observedYearsRemaining <= 9) rating = 'Good';
    else if (observedYearsRemaining >= 5 && observedYearsRemaining <= 6) rating = 'Stable';
    else if (observedYearsRemaining >= 3 && observedYearsRemaining <= 4) rating = 'Fair';
    else if (observedYearsRemaining === 2) rating = 'Poor';
    else if (observedYearsRemaining === 1) rating = 'Critical-B';
    else if (observedYearsRemaining === 0) rating = 'Critical-A';

    // Call OpenRouter API with Gemini 2.0 Flash (FREE)
    const apiKey = process.env.OPENROUTER_API_KEY;
    const apiUrl = 'https://openrouter.ai/api/v1/chat/completions';

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured. Please add OPENROUTER_API_KEY to your environment variables.' },
        { status: 500 }
      );
    }

    // Retry configuration for API quota handling
    const maxRetries = 3;

    // --- 3. GENERATED DESCRIPTION ---
    // Pre-clean: Remove ONLY explicit condition/quality statements, keep descriptive language
    let cleanedInput = systemDescription
      .replace(/\b(aged and deteriorated|beyond useful life|corroded|damaged|missing|deterioration|defects|wear and tear|worn out|good condition|poor condition|requires replacement|requires repair)\b/gi, '')
      .replace(/\b(no significant deficiencies|routine maintenance anticipated)\b/gi, '')
      .trim();

    // Prepare clean context
    const referenceSpec = template ? template.description : "";

    const descriptionPrompt = `You are a forensic facility assessor. Write a professional physical description.

PRIMARY SOURCE (Template): ${referenceSpec}
SITE DETAILS (User Input): ${cleanedInput}

INSTRUCTIONS:
1. Combine the PRIMARY SOURCE with SITE DETAILS into 2-3 complete, fluent sentences.
2. Use the template as your foundation, then add specific locations/details from the user input.
3. EXCLUDE all condition/quality assessments (e.g., "aged", "corroded", "damaged", "good", "poor").
4. INCLUDE physical details: materials, assembly, locations, dimensions.
5. Tone: Technical, professional, and naturally flowing.

Example Output: "A chain link fence assembly is installed around the perimeter of the property. The fence consists of galvanized steel mesh panels with tubular steel posts set in concrete footings."

Write the physical description:`;

    let descriptionResponse;
    let descriptionRetries = 0;
    // START with the requested Pro model, fallback to Flash if needed
    let currentModel = 'google/gemini-2.0-pro-exp-02-05:free';

    while (descriptionRetries < maxRetries) {
      try {
        descriptionResponse = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            'HTTP-Referer': 'https://facility-generator.com',
            'X-Title': 'Facility Description Generator',
          },
          body: JSON.stringify({
            model: currentModel,
            messages: [{
              role: 'user',
              content: descriptionPrompt
            }],
            temperature: 0.1,
            max_tokens: 200,
          })
        });

        if (descriptionResponse.ok) break;

        // If Pro model fails (likely 404 or 429), switch to reliable Flash model for next retry
        if (!descriptionResponse.ok && currentModel !== 'google/gemini-2.0-flash-001') {
          console.warn(`Model ${currentModel} failed. Switching to fallback: google/gemini-2.0-flash-001`);
          currentModel = 'google/gemini-2.0-flash-001';
          descriptionRetries++; // Count as a retry
          continue;
        }

        if (descriptionResponse.status === 429 && descriptionRetries < maxRetries - 1) {
          const waitTime = Math.pow(2, descriptionRetries) * 2000;
          await new Promise(resolve => setTimeout(resolve, waitTime));
          descriptionRetries++;
          continue;
        }

        const errorData = await descriptionResponse.text();
        console.error("OpenRouter API Error (Description):", descriptionResponse.status, errorData);

        return NextResponse.json(
          { error: `Failed to generate system description: ${descriptionResponse.status}` },
          { status: descriptionResponse.status }
        );
      } catch (fetchError) {
        console.error("Fetch Error (Description):", fetchError);
        return NextResponse.json({ error: "Network error connecting to AI provider" }, { status: 500 });
      }
    }

    if (!descriptionResponse) {
      return NextResponse.json(
        { error: 'Failed to generate system description after retries' },
        { status: 500 }
      );
    }

    const descriptionData = await descriptionResponse.json();
    let generatedDescription = descriptionData.choices?.[0]?.message?.content?.trim() || "Description generation failed.";

    // Cleanup: Remove common chatty prefixes if AI misbehaves
    generatedDescription = generatedDescription
      .replace(/^Here is the.*?description:?/i, '')
      .replace(/^Description:?/i, '')
      .replace(/^The standard technical specification:?/i, '')
      .trim();

    // --- 4. GENERATE CONDITION ASSESSMENT ---
    const conditionPrompt = `You are a forensic engineering expert. Write a technical condition assessment.

System: ${systemName}
Rating: ${rating} (Scale: 0=Critical to 10=Excellent)
Observed Data: ${systemDescription}
Age Context: ${actualAge} years old (Life expectancy: ${lifetime} years)

INSTRUCTIONS:
1. MAX 2 SENTENCES.
2. Sentence 1: State observable defects based on "Observed Data". If none provided, use typical defects for rating "${rating}".
3. Sentence 2: State functional status relative to lifecycle (e.g. "approaching end of service life").
4. NOT ALLOWED: Specific numbers, ages, years.
5. NOT ALLOWED: conversational fillers or repetitive phrasing.

Examples:
Rating 3 (Fair): "Generalized alligator cracking and uneven surfaces observed throughout. The system exhibits generalized degradation consistent with advanced service life."
Rating 9 (Good): "Nominal surface wear consistent with recent installation. Primary structural elements remain intact."

Write ONLY the assessment text:`;

    let response;
    let retries = 0;
    // Fallback logic for Condition Assessment too
    let currentConditionModel = 'google/gemini-2.0-pro-exp-02-05:free';

    while (retries < maxRetries) {
      try {
        response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            'HTTP-Referer': 'https://facility-generator.com',
            'X-Title': 'Facility Description Generator',
          },
          body: JSON.stringify({
            model: currentConditionModel,
            messages: [{
              role: 'user',
              content: conditionPrompt
            }],
            temperature: 0.1,
            max_tokens: 150,
          })
        });

        if (response.ok) break;

        // Fallback switch
        if (!response.ok && currentConditionModel !== 'google/gemini-2.0-flash-001') {
          console.warn(`Condition Model ${currentConditionModel} failed. Switching to fallback: google/gemini-2.0-flash-001`);
          currentConditionModel = 'google/gemini-2.0-flash-001';
          retries++;
          continue;
        }

        if (response.status === 429 && retries < maxRetries - 1) {
          const waitTime = Math.pow(2, retries) * 2000;
          await new Promise(resolve => setTimeout(resolve, waitTime));
          retries++;
          continue;
        }

        const errorData = await response.text();
        console.error("OpenRouter API Error (Condition):", response.status, errorData);

        return NextResponse.json(
          { error: `Failed to generate condition description: ${response.status}` },
          { status: response.status }
        );
      } catch (fetchError) {
        console.error("Fetch Error (Condition):", fetchError);
        return NextResponse.json({ error: "Network error connecting to AI provider" }, { status: 500 });
      }
    }

    if (!response) {
      return NextResponse.json(
        { error: 'Failed to generate condition assessment after retries' },
        { status: 500 }
      );
    }

    const data = await response.json();
    let conditionText = data.choices?.[0]?.message?.content?.trim() || "Condition assessment failed.";

    // Cleanup: Remove common chatty prefixes
    conditionText = conditionText
      .replace(/^Here is the.*?assessment:?/i, '')
      .replace(/^Condition Assessment:?/i, '')
      .trim();

    // --- 5. FORMAT OUTPUT ---
    // Clean, structured output with NO duplicate headers
    const formattedOutput = `Description:\n${assessmentYear} - ${generatedDescription}\n\nCondition Assessment:\n${assessmentYear} - ${conditionText}`;

    // Fix: We manually construct the string to ensure the user gets exactly what they asked for
    // If the AI somehow sneaked a "2025 -" in, we strip it to ensure our prefix is the only one
    const cleanDesc = generatedDescription.replace(/^\d{4}\s*-\s*/, '');
    const cleanCond = conditionText.replace(/^\d{4}\s*-\s*/, '');

    const finalOutput = `Description:\n${assessmentYear} - ${cleanDesc}\n\nCondition Assessment:\n${assessmentYear} - ${cleanCond}`;

    return NextResponse.json({
      description: finalOutput,
      conditionOnly: cleanCond,
      generatedDescription: cleanDesc
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
