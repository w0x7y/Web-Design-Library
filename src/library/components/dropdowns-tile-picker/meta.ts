import type { ComponentMeta } from '../../types'

export default {
  slug: "dropdowns-tile-picker",
  name: "Dropdowns — Picker with option tiles",
  category: "dropdowns",
  tags: ["layered", "grid", "form", "compact"],
  description: "An input-shaped time disclosure opens a three-column grid of radio tiles. Use it to choose one time from a short list of slots.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Time                                                 │
│ [Clock 09:00                               ^]        │
│ ┌──────────────────────────────────────────────┐     │
│ │ Today, Mar 14                                │     │
│ │ [09:00]       [09:30]       [10:00]          │     │
│ │ [10:30]       [11:00]       [11:30]          │     │
│ │ Short note about availability.               │     │
│ └──────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A relative 288px (w-72) by 256px (h-64) root grows to 320px (sm:w-80) wide at 640px. The Time label sits 8px above a 40px summary containing a 16px clock, selected value and chevron. The full-width panel begins 4px below, with a rounded-md border, 12px padding and shadow-lg. A 12px date heading precedes a three-column grid by 12px. Six 40px tiles have 8px gaps; a 12px note follows by 12px.",
    hierarchy: "Read Time and its current value, the date heading, six short time choices and the timezone note. Values are five-character times with tabular figures. The summary is named by the visible label and selected-value span. A fieldset legend identifies Choose a time, and the note describes the trigger and every radio with aria-describedby.",
    states: "The disclosure is open and 09:00 starts checked. Only the checked value span displays in the trigger, including while closed. Enabled tiles hover neutral-50. Checked tiles use neutral-900 fill and border, white medium text and a Highlight border/background with HighlightText in forced colors. Native radio focus draws a 2px inset label outline. 11:30 is disabled, struck through and 50% opaque. The summary uses the standard focus outline and open chevron rotation. Arrow keys switch enabled times.",
    responsive: "The root and full-width panel grow from 288px to 320px at 640px. The grid remains three equal columns and two rows, with unchanged tile heights and 8px gaps. Date and note fit on one line at both widths.",
    usage: "Use for one choice from a small set of short values. Choose dropdowns-select-descriptions when options need explanations or dropdowns-filter-checkboxes for several selections. Variations: use duration values, choose a different initial time, or disable another unavailable tile.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
