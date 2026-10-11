import type { ComponentMeta } from '../../types'

export default {
  slug: "data-table-availability-grid",
  name: "Data table — People-by-day availability grid",
  category: "data-table",
  tags: [
    "table",
    "grid",
    "compact"
  ],
  description: "Names form rows and days form columns in a simple availability matrix. Use to scan a small team schedule without a full calendar.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Team availability                                             │
│Member                  Mon 12      Tue 13      Wed 14        │
│Alex Rivera              Free        Busy        Free         │
│Jordan Lee               Busy        Free        Free         │
│Sam Taylor               Free        Free        Busy         │
│Free: open day | Busy: unavailable       [Full schedule]      │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. The fixed table starts after 32px. Names use one third of the width; three days share the remaining space. Member cells have 12px side padding while day cells use 4px; all rows use 16px vertical padding.",
    hierarchy: "The h1 leads to named rows and date-labelled columns. Free and Busy are written words so status remains clear without color. Names allow 24 characters, title 5 words and lede 14.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "All three days remain visible at 320px. Day labels and member names wrap inside their cells; a narrow side padding protects the grid width. Footer legend and link wrap independently.",
    usage: "Use for a small people/day availability snapshot. Choose a schedule dashboard for detailed times and appointments. Variations: compare three resources, replace days with time windows, or display capacity counts instead of availability."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
