import type { ComponentMeta } from '../../types'

export default {
  slug: "badges-access-matrix",
  name: "Badges — Access badges in a comparison table",
  category: "badges",
  tags: ["table", "compact"],
  description: "A small comparison table uses status pills across two access columns for three named groups. Use when readers need to compare permissions at a glance.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Access summary                                       │
│ ┌────────────────┬───────────────┬───────────────┐   │
│ │ Group          │ View          │ Edit          │   │
│ ├────────────────┼───────────────┼───────────────┤   │
│ │ Group name     │ [Enabled]     │ [Read only]   │   │
│ ├────────────────┼───────────────┼───────────────┤   │
│ │ Another group  │ [Enabled]     │ [Enabled]     │   │
│ ├────────────────┼───────────────┼───────────────┤   │
│ │ Final group    │ [Unavailable] │ [Enabled]     │   │
│ └────────────────┴───────────────┴───────────────┘   │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px bordered card grows to 448px at sm with 16px padding. Its full-width native table has a left-aligned caption and 12px column headings. Three rows use top dividers and 12px vertical padding; access cells center small outlined pills.",
    hierarchy: "Read the table caption, column labels, then each group with its View and Edit statuses. Row and column headers retain native table relationships. Group names use at most 2 words; badge statuses use at most 2 words.",
    states: "The table contains static status badges, without focusable controls or hover states. Every state has a visible word, including Unavailable and Read only, so status does not depend on color.",
    responsive: "The root grows from 288px to 448px at 640px. The three columns stay together; short group names and status labels may wrap naturally without widening the table.",
    usage: "Use to compare a few groups across a small number of capabilities. Choose a status list for one status per item. Variations: replace permissions with readiness labels, show two groups, or add short counts to the group names.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
