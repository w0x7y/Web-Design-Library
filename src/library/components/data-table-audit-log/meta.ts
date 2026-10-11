import type { ComponentMeta } from '../../types'

export default {
  slug: "data-table-audit-log",
  name: "Data table — Audit log with date bands",
  category: "data-table",
  tags: [
    "table",
    "list",
    "compact"
  ],
  description: "A compact chronological event table places time and actor beside an action description. Use for reviewing changes during a reporting day.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Account audit log                            [Download log]   │
│11 Oct 2026                                                   │
│Time       Actor                 Event                        │
│09:41      Alex Rivera           Record updated               │
│                                 Changed a record field       │
│09:36      Jordan Lee            Member invited               │
│09:24      Alex Rivera           Report exported              │
│09:12      Sam Taylor            Settings changed             │
│4 events in this reporting day                                │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A wrapping header ends in an export link. A date band with vertical 12px padding precedes a fixed table; Time is 80px and Actor one third at sm. Event cells contain a title and 4px-separated detail.",
    hierarchy: "The h1 and reporting date anchor the chronology. Short times and actor names support 14px semibold event titles with 12px notes. H1 up to 5 words, lede 14, event titles 3 and notes 8.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "Below 640px the Actor column is hidden, keeping Time and Event readable without scrolling. Desktop has all three columns. Header and export link wrap, and heading grows at sm.",
    usage: "Use for a short daily account activity record. Choose data-table-toolbar-pagination for long searchable history. Variations: group by several dates, add an event-type badge, or include linked affected records."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
