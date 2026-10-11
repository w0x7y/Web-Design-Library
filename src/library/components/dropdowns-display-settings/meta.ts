import type { ComponentMeta } from '../../types'

export default {
  slug: "dropdowns-display-settings",
  name: "Dropdowns — Disclosure with paired native settings",
  category: "dropdowns",
  tags: ["layered", "stacked", "form", "compact"],
  description: "An outlined display-settings trigger opens two labelled native selects with a shared explanation. Use to adjust compact collection preferences in one place.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ [Icon Display options ^]                             │
│ ┌──────────────────────────────────────────────┐     │
│ │ Density                                      │     │
│ │ [Comfortable v]                              │     │
│ │ Group by                                     │     │
│ │ [None v]                                     │     │
│ │ Choose how the collection is arranged.       │     │
│ └──────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px disclosure grows to 384px at sm. A 44px outlined trigger has a 16px settings icon, flexible label and chevron. Its full-width panel starts 8px below with 12px padding. Two labelled 40px native selects use 12px group gaps and 6px label gaps; a shared hint follows by 12px.",
    hierarchy: "Read Display options, Density, Group by and the shared explanation. Select labels use at most 2 words; options use at most 2 words. Both selects reference the hint through aria-describedby and retain native option semantics.",
    states: "The disclosure starts open; summary activation toggles the panel. Density starts Comfortable and Group by starts None. Native selects change independently and open their platform option interface. Trigger and selects show standard focus outlines; the trigger hovers neutral-50.",
    responsive: "The root grows from 288px to 384px at 640px. Both selects remain stacked and full width in the panel; all labels and hints wrap within their available width.",
    usage: "Use for a pair of related presentation settings. Choose a filter checkbox menu for selecting several data values. Variations: replace grouping with a sort select, change default density, or add a third short native select.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
