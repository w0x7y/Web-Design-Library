import type { ComponentMeta } from '../../types'

export default {
  slug: "data-table-totals-footer",
  name: "Data table — Line items with totals footer",
  category: "data-table",
  tags: [
    "stacked",
    "table",
    "numbers"
  ],
  description: "A concise line-item table ends in a subtotal, adjustment and emphasized total. Use for reconciling a small set of quantities and amounts.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Line item summary                           Reference 00124   │
│Description                              Qty         Amount   │
│Line item label                            2           $240   │
│Add-on label                               1            $60   │
│Service label                              3            $90   │
│                                   Subtotal            $390   │
│                                 Adjustment            -$20   │
│                                      Total            $370   │
│[Download summary] [View source records]                      │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A wrapping heading/reference row sits above a fixed table with half-width descriptions. Cells have 12px horizontal and 16px vertical padding; compact total rows use 12px vertical padding. The last row is neutral-50 and semibold.",
    hierarchy: "The h1 and reference identify the summary; quantities and amounts align right with tabular numerals. Subtotal and adjustment lead to the emphasized final total. Description slots allow 4 words, heading 5 and lede 14.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "All three columns remain visible at 320px with wrapping description labels. The reference and footer actions wrap. The heading size and section padding increase at sm.",
    usage: "Use for line-item summaries and small reconciliations. Choose pricing-comparison-table for comparing plan features. Variations: add a tax row, display a discount code, or replace money with time totals."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
