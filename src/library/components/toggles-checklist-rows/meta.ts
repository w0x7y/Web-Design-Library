import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-checklist-rows",
  name: "Toggles — Checklist rows with descriptions",
  category: "toggles",
  tags: ["list", "form", "compact"],
  description: "A compact checklist pairs native checkboxes with item descriptions and small requirement badges. Use when independent choices need a little context.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Select items                                         │
│ [x] First item title                    [Required]   │
│     Short reason to select it.                       │
├──────────────────────────────────────────────────────┤
│ [ ] Second item title                   [Optional]   │
│     Explain the optional choice.                     │
├──────────────────────────────────────────────────────┤
│ [x] Third item title                    [Optional]   │
│     Describe this separate item.                     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px fieldset grows to 448px at sm with 16px padding. Three divided rows use 12px vertical padding. Each label aligns a 16px checkbox with flexible copy and a small fixed badge using 12px gaps. Descriptions start 4px under 14px medium titles.",
    hierarchy: "Read Select items and then each title, description and requirement label. Titles use at most 3 words; descriptions at most 6 words; badges one word. Each description connects to its checkbox with aria-describedby.",
    states: "The first and third items start checked. Native checkboxes toggle independently, retain visible checkmarks in forced colors and show standard 2px offset focus outlines. Requirement badges describe content rather than disabling interaction.",
    responsive: "Below 640px the root is 288px, and from 640px it is 448px. Copy wraps within min-w-0 while checkbox and requirement badge keep their size. The three items stay stacked.",
    usage: "Use for a short checklist where each option needs explanatory text. Choose a checkbox tile grid for very short repeated labels. Variations: omit requirement badges, add an unchecked default, or use completion labels instead of requirement labels.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
