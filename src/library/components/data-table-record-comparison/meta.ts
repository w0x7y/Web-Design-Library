import type { ComponentMeta } from '../../types'

export default {
  slug: "data-table-record-comparison",
  name: "Data table — Side-by-side record comparison",
  category: "data-table",
  tags: [
    "table",
    "split",
    "compact"
  ],
  description: "Attribute rows align two records side by side with actions in their column headers. Use to compare a small selected set without scanning a long table.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Compare selected records                                      │
│Attribute             Record label         Entry label        │
│                      [Open record]        [Open entry]       │
│Owner                 Alex Rivera          Jordan Lee         │
│Status                Active               Review             │
│Created               Mar 14               Mar 12             │
│Items                 24                   18                 │
│Completion            84%                  68%                │
│Comparison scope note                                         │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A three-column fixed-layout comparison begins after 32px. Attribute and record columns share the width equally, with 12px horizontal and 16px vertical cell padding. Record header actions sit 8px below titles.",
    hierarchy: "The h1 leads to selected record titles, then attribute rows. Each row header is the comparison criterion. Title allows 6 words, lede 16, record labels 4, attributes 2 and scope note 12.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "All three columns remain at narrow widths; values and header actions wrap naturally rather than truncating. No column has a fixed minimum width. Title grows at sm.",
    usage: "Use for comparing two selected entities by stable attributes. Choose a standard record list for scanning many entities. Variations: compare versions, replace one record with a baseline, or add a difference-only summary."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
