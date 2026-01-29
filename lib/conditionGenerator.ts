export interface ConditionParams {
  yearInstalled: number;
  lifetime: number;
  observedYearsRemaining: number;
  assessmentYear: number;
}

export interface ConditionAnalysis {
  actualAge: number;
  expectedAge: number;
  performanceRatio: number;
  isOverPerforming: boolean;
  rating: string;
}

export function analyzeCondition(params: ConditionParams): ConditionAnalysis {
  const { yearInstalled, lifetime, observedYearsRemaining, assessmentYear } = params;
  
  const actualAge = assessmentYear - yearInstalled;
  const expectedAge = lifetime;
  const ageConsumed = actualAge;
  const expectedRemaining = lifetime - actualAge;
  
  // Performance ratio: how well is it doing vs expected?
  // >1 means overperforming, <1 means underperforming
  const performanceRatio = expectedRemaining > 0 ? observedYearsRemaining / expectedRemaining : 0;
  
  const isOverPerforming = observedYearsRemaining > expectedRemaining;
  
  // Determine rating based on observed years remaining
  let rating = 'Not Assessed';
  if (observedYearsRemaining === 10) rating = 'Excellent';
  else if (observedYearsRemaining >= 7 && observedYearsRemaining <= 9) rating = 'Good';
  else if (observedYearsRemaining >= 5 && observedYearsRemaining <= 6) rating = 'Stable';
  else if (observedYearsRemaining >= 3 && observedYearsRemaining <= 4) rating = 'Fair';
  else if (observedYearsRemaining === 2) rating = 'Poor';
  else if (observedYearsRemaining === 1) rating = 'Critical-B';
  else if (observedYearsRemaining === 0) rating = 'Critical-A';
  
  return {
    actualAge,
    expectedAge,
    performanceRatio,
    isOverPerforming,
    rating
  };
}

export function generateConditionPrompt(
  systemName: string,
  analysis: ConditionAnalysis,
  systemDescription: string
): string {
  const { actualAge, expectedAge, performanceRatio, isOverPerforming, rating } = analysis;
  
  let contextualInfo = '';
  
  // Add contextual understanding for AI
  if (actualAge < expectedAge * 0.2) {
    contextualInfo = 'This is a relatively new system, recently installed.';
  } else if (actualAge < expectedAge * 0.5) {
    contextualInfo = 'This system is in its early-to-mid operational life.';
  } else if (actualAge < expectedAge * 0.8) {
    contextualInfo = 'This system is approaching its typical replacement timeframe.';
  } else if (actualAge >= expectedAge) {
    contextualInfo = isOverPerforming 
      ? 'This system has exceeded its expected service life but continues to perform.'
      : 'This system has reached or exceeded its expected service life.';
  }
  
  if (isOverPerforming && actualAge > expectedAge * 0.8) {
    contextualInfo += ' Notably, it is performing better than typically expected for its age.';
  }
  
  const prompt = `You are a facility condition assessment expert writing a natural, conversational condition assessment for: ${systemName}

SYSTEM CONTEXT:
${systemDescription}

ASSESSMENT CONTEXT:
${contextualInfo}
Rating Category: ${rating}

RATING DEFINITIONS (DO NOT use these exact words, rephrase naturally):
- Excellent (10): Functioning as intended; as new condition; little to no deterioration
- Good (7-9): Functioning as intended; normal wear patterns; no repairs expected in near term
- Stable (5-6): Functioning as intended; normal wear evident; approaching end of useful life, monitoring needed
- Fair (3-4): Still functioning; normal wear + minor issues appearing; minor repairs needed soon
- Poor (2): NOT functioning properly; significant deterioration visible; major repairs needed
- Critical-B (1): NOT functioning properly; severe deterioration + major distress; major repair/replacement needed now
- Critical-A (0): NOT functioning; severe deterioration + major distress; failed or about to fail; immediate action required

CRITICAL RULES:
1. DO NOT use any numbers, years, ages, or specific time references
2. DO NOT use rating labels (Excellent, Good, Fair, Poor, Critical)
3. Write in natural, conversational, humanized language as a human inspector would
4. Use descriptive words about visible wear, deterioration, functionality
5. Consider the contextual performance (new vs old, over-performing vs under-performing)
6. Be specific to the system type mentioned

Write ONLY the condition assessment in this format (2-3 sentences):
"The [system] was observed to be [condition description with specific observable details]."`;

  return prompt;
}

// Condition phrases by rating - for backup/fallback if API fails
export const CONDITION_PHRASES = {
  'Excellent': [
    'in excellent condition with no visible signs of wear or deterioration',
    'functioning as intended with minimal deterioration observed',
    'in like-new condition showing no appreciable wear',
    'performing optimally with no deficiencies noted'
  ],
  'Good': [
    'in good overall condition with normal wear patterns consistent with its age',
    'functioning as intended with typical age-related wear observed',
    'performing well with only minor surface wear noted',
    'in serviceable condition with expected deterioration for its service period'
  ],
  'Stable': [
    'showing normal wear and approaching the latter portion of its service life',
    'functioning adequately though monitoring is recommended as it nears typical replacement timeframe',
    'displaying age-appropriate deterioration with continued monitoring advised',
    'operationally sound but exhibiting signs that warrant ongoing observation'
  ],
  'Fair': [
    'showing moderate wear with minor deficiencies that will require attention',
    'functioning adequately though minor repairs will be needed to maintain serviceability',
    'displaying age-related deterioration with localized areas requiring remedial work',
    'operational but exhibiting minor distress that should be addressed'
  ],
  'Poor': [
    'not performing as intended with significant deterioration and distress evident',
    'exhibiting substantial wear requiring significant repairs to restore proper function',
    'compromised with notable deficiencies affecting performance',
    'showing advanced deterioration that impacts functionality'
  ],
  'Critical-B': [
    'not functioning as intended with severe deterioration requiring major intervention',
    'exhibiting critical distress with major repair or replacement necessary',
    'severely compromised with substantial deficiencies affecting operation',
    'in advanced state of deterioration necessitating immediate remedial action'
  ],
  'Critical-A': [
    'not functioning with critical deterioration and failure evident or imminent',
    'exhibiting severe distress with failure having occurred or about to occur',
    'critically compromised requiring immediate replacement to restore functionality',
    'in failed or near-failed condition demanding urgent intervention'
  ]
};
