# User Guide - Facility Description Generator

## 📖 Table of Contents
1. [Quick Start](#quick-start)
2. [Understanding the Interface](#understanding-the-interface)
3. [How to Use](#how-to-use)
4. [Understanding Ratings](#understanding-ratings)
5. [Examples](#examples)
6. [Tips & Best Practices](#tips--best-practices)
7. [FAQ](#faq)

---

## Quick Start

1. **Open the tool** in your web browser
2. **Select a system** from the dropdown (e.g., "Exterior Windows")
3. **Enter the year installed** (e.g., 1995)
4. **Confirm the lifetime** (auto-fills from templates)
5. **Enter your observed years remaining** (0-10 based on your inspection)
6. **Click "Generate Description"**
7. **Copy and paste** into your assessment software

---

## Understanding the Interface

### Input Section (Left Side)

**System Name**
- Type to search or select from dropdown
- Auto-completes from 30+ pre-loaded templates
- Automatically fills in the expected lifetime

**Assessment Year**
- Current year of your assessment
- Default: 2025
- Change this once per project

**Year Installed**
- When the system was originally put in place
- Example: 1995, 2010, 2020

**Expected Lifetime**
- How long this type of system typically lasts
- Auto-fills when you select a known system
- Example: Windows = 32 years, Paint = 5 years

**Observed Years Remaining**
- YOUR expert judgment (0-10 scale)
- Based on your visual inspection
- Takes into account actual condition you see

### Output Section (Right Side)

Shows the AI-generated description in the required format:

```
Description:
2025 - [System description]

Condition:
2025 - [Intelligent condition assessment]
```

---

## How to Use

### Step 1: System Selection
```
Option A: Select from dropdown
Option B: Type the system name (it will search templates)
```

**Example:**
- Type: "windows"
- Select: "Exterior Windows"
- Lifetime auto-fills: 32 years

### Step 2: Enter Installation Information

**Year Installed:** When was it built/installed?
- Check building records
- Ask facility staff
- Estimate based on building age

**Lifetime:** How long should it last?
- Auto-filled from templates for known systems
- Manually enter for custom systems
- Reference industry standards

### Step 3: Your Expert Assessment

**Observed Years Remaining (0-10)**

Ask yourself:
- "How much useful life is left?"
- "When will this need replacement?"
- "What condition is it really in?"

This is YOUR professional judgment!

### Step 4: Generate & Use

1. Click "✨ Generate Description"
2. Wait 2-3 seconds for AI processing
3. Review the generated text
4. Click "📋 Copy to Clipboard"
5. Paste into your assessment software

---

## Understanding Ratings

### The 0-10 Scale Explained

| Rating | Years Remaining | Condition Level | What It Means |
|--------|-----------------|-----------------|---------------|
| **10** | 10 years | Excellent | Brand new, perfect condition |
| **9** | 9 years | Good | Nearly new, minimal wear |
| **8** | 8 years | Good | Light wear, performing well |
| **7** | 7 years | Good | Normal wear, no issues |
| **6** | 6 years | Stable | Aging but functional |
| **5** | 5 years | Stable | Getting old, monitor closely |
| **4** | 4 years | Fair | Minor issues appearing |
| **3** | 3 years | Fair | Several minor problems |
| **2** | 2 years | Poor | Not working properly |
| **1** | 1 year | Critical-B | Severe problems |
| **0** | 0 years | Critical-A | Failed or failing now |

### How to Decide Your Rating

**Consider these factors:**

1. **Visual Condition**
   - Cracks, rust, deterioration?
   - Paint peeling, tiles broken?
   - Structural issues?

2. **Functionality**
   - Does it work properly?
   - Any operational problems?
   - Safety concerns?

3. **Age vs. Expected Life**
   - How old is it compared to typical lifetime?
   - Performing better or worse than expected?

4. **Maintenance History**
   - Well maintained = higher rating
   - Neglected = lower rating

---

## Examples

### Example 1: New System

**Scenario:** Windows installed 2 years ago in 2023

**Input:**
- System Name: Exterior Windows
- Assessment Year: 2025
- Year Installed: 2023
- Lifetime: 32 years
- Observed Years Remaining: 10

**Output:**
```
Description:
2025 - The original building windows were observed to be single glazed single sash as well as double sash double glazed installed in metal frames. The operable units were observed to be a vertical sliding style.

Condition:
2025 - The exterior windows were observed to be in excellent condition, functioning as intended with no visible deterioration or operational issues noted.
```

### Example 2: Aging System Performing Well

**Scenario:** Windows installed 20 years ago, still in good shape

**Input:**
- System Name: Exterior Windows
- Assessment Year: 2025
- Year Installed: 2005
- Lifetime: 32 years
- Observed Years Remaining: 8

**Output:**
```
Description:
2025 - The original building windows were observed to be single glazed single sash as well as double sash double glazed installed in metal frames. The operable units were observed to be a vertical sliding style.

Condition:
2025 - The exterior windows were observed to be in good overall condition, displaying typical age-related wear patterns while maintaining proper functionality. Minor surface weathering consistent with years of service was noted.
```

### Example 3: System Past Expected Life

**Scenario:** Windows from 1990 (35 years old), lifetime was 32 years

**Input:**
- System Name: Exterior Windows
- Assessment Year: 2025
- Year Installed: 1990
- Lifetime: 32 years
- Observed Years Remaining: 3

**Output:**
```
Description:
2025 - The original building windows were observed to be single glazed single sash as well as double sash double glazed installed in metal frames. The operable units were observed to be a vertical sliding style.

Condition:
2025 - The exterior windows were observed to be functioning adequately though displaying considerable age-related deterioration. Minor repairs will be required to maintain serviceability, with several units showing worn seals and weathered frames.
```

---

## Tips & Best Practices

### ✅ DO:

1. **Be Honest with Your Assessment**
   - The AI relies on your accurate judgment
   - Don't inflate or deflate ratings

2. **Consider Context**
   - Climate and usage patterns
   - Maintenance history
   - Building importance

3. **Use the Full Scale**
   - Don't hesitate to use 0 or 10
   - Most systems will be 3-7

4. **Review Before Copying**
   - Make sure the description makes sense
   - Verify it matches what you observed

5. **Keep Notes**
   - Document why you chose that rating
   - Take photos for reference

### ❌ DON'T:

1. **Don't Rush**
   - Take time to properly inspect
   - Consider all factors

2. **Don't Guess Wildly**
   - If unsure, be conservative
   - Document uncertainty

3. **Don't Ignore Safety Issues**
   - Safety problems = lower rating
   - Document separately if critical

4. **Don't Auto-Generate Without Review**
   - Always read the output
   - Ensure it reflects reality

---

## FAQ

### Q: What if I don't know the exact year installed?

**A:** Estimate based on:
- Building construction date
- Renovation records
- Similar systems in the area
- Wear patterns observed

Document your estimate in notes.

### Q: Can I use decimals for years remaining?

**A:** No, only whole numbers 0-10. If you're between two numbers, consider:
- Round down if closer to needing replacement
- Round up if system is performing well

### Q: What if the system is partially replaced?

**A:** Two options:
1. Use the year of the most recent major work
2. Create separate entries for old and new portions

### Q: The generated description doesn't match exactly what I see. What do I do?

**A:** The AI generates based on typical conditions. You can:
1. Adjust your years remaining rating
2. Manually edit the output after copying
3. Add specific notes in your software

### Q: How do I know if I'm rating correctly?

**A:** Compare with previous assessments:
- Similar systems in other buildings
- Historical data
- Consultant reports
- Industry standards

### Q: Can I use this for all building systems?

**A:** Yes! The tool has templates for:
- Building envelope (walls, windows, doors)
- Structural systems
- Interior finishes
- Site work
- And more...

For systems not in the template, just type the name and provide details.

### Q: Is my data saved?

**A:** Currently, no data is saved. Each generation is independent. Future versions may include:
- Session history
- Saved assessments
- Export features

### Q: How accurate is the AI?

**A:** The AI generates professional, contextually-appropriate descriptions based on:
- Your input parameters
- Industry-standard terminology
- Assessment best practices

However, YOU are the expert - always review and adjust as needed.

### Q: Can multiple people use this at once?

**A:** Yes! The tool is web-based and can handle multiple simultaneous users.

### Q: What if it's not working?

**A:** Check:
1. Internet connection
2. All fields are filled in
3. Years remaining is 0-10
4. Try refreshing the page

If problems persist, contact your system administrator.

---

## Need Help?

- Re-read this guide
- Check the examples section
- Refer to the rating scale
- Document specific questions for your supervisor

---

**Happy Assessing! 🏗️**
