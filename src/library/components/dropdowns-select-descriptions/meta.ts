import type { ComponentMeta } from '../../types'

export default {
  slug: "dropdowns-select-descriptions",
  name: "Dropdowns — Select menu with descriptions",
  category: "dropdowns",
  tags: ["layered", "form", "compact"],
  description: "An input-shaped disclosure opens three radio options, each with a short description. Use it to choose one option when each choice needs an explanation.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Plan                                                 │
│ [Selected plan                             ^]        │
│ ┌──────────────────────────────────────────────┐     │
│ │ [Individual]                         Check   │     │
│ │ Description of the plan                      │     │
│ │ [Team]                                       │     │
│ │ Description of shared access                 │     │
│ │ [Enterprise - disabled]                      │     │
│ │ Description of advanced support              │     │
│ └──────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) by 256px (h-64) root grows to 320px (sm:w-80) wide at 640px. A 14px medium Plan label sits 8px above a 40px rounded-md outlined summary with 12px horizontal padding and a 16px chevron. A full-width bordered shadow-lg panel starts 4px below the trigger and has 4px padding. Radio labels use 12px horizontal and 8px vertical padding, a 14px title over a 12px description and a 16px check glyph on the right.",
    hierarchy: "Read Plan, the currently chosen title, then the three title/description pairs. Option titles use one word and descriptions up to 4 words. The summary is named by the visible Plan label plus the current-value span. A fieldset legend names the radio group, and each description connects to its radio with aria-describedby.",
    states: "The disclosure is open and Individual is checked initially. CSS swaps trigger spans to follow checked radios even after the disclosure closes. Checked titles are semibold and display a check glyph through opacity; other enabled rows hover neutral-100. Radio focus gives the label a 2px inset outline. The summary hovers neutral-50 and shows a standard offset outline. Enterprise is natively disabled at 50% opacity. Arrow keys switch enabled radios; the chevron rotates while open.",
    responsive: "The root and full-width panel grow from 288px to 320px at 640px. The options remain a single column, with fixed check glyphs and flexible text. The 256px reserve fits the open panel at both widths.",
    usage: "Use to choose one short option when each needs a supporting explanation. Choose dropdowns-tile-picker for a dense grid of values or dropdowns-filter-checkboxes for multiple choices. Variations: replace plans with access levels, change the default option, or enable the final option.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
