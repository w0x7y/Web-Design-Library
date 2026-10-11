import type { ComponentMeta } from '../../types'

export default {
  slug: "data-table-grouped-sections",
  name: "Data table — Grouped table sections",
  category: "data-table",
  tags: [
    "stacked",
    "table",
    "numbers"
  ],
  description: "A single table separates records into named row groups with aligned numeric columns. Use when grouping gives context without separate filters or nested cards.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Grouped record overview                                       │
│Record                           Status             Total     │
│Current period                                                │
│Item label                       Active             1,240     │
│Entry label                      Active               820     │
│Previous period                                               │
│Record label                     Archived             680     │
│Collection label                 Archived             430     │
│4 records across 2 groups              [Export records]       │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A full-width fixed-layout table begins 32px below the heading. Its first column uses half the width. Each tbody begins with a spanning group heading; record cells use 12px horizontal and 16px vertical padding. A wrapping footer follows after 24px.",
    hierarchy: "The h1 leads into column headings, period group labels and records. Row headers identify each record, and tabular totals align right. Heading up to 6 words, lede 16, row labels 3 words and group labels 3.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "The same three-column table remains at all widths, with record names wrapping in the half-width first column. The footer wraps at 320px. Heading and section padding increase at sm.",
    usage: "Use when a dataset has two or more natural row groups. Choose data-table-toolbar-pagination for large searchable datasets. Variations: group by status, add group subtotals, or replace Total with an owner column."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
