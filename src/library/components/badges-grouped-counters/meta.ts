import type { ComponentMeta } from '../../types'

export default {
  slug: "badges-grouped-counters",
  name: "Badges — Grouped totals with state labels",
  category: "badges",
  tags: ["row", "numbers", "compact"],
  description: "Three divided counter columns pair totals with descriptive labels and state pills. Use to show a compact breakdown of one collection.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ 48                 32                 16             │
│ All items          Ready items        Pending items  │
│ [Total]            [Ready]            [Pending]      │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px bordered list grows to 416px at sm with three equal columns. Each column uses 12px padding and a right divider except the last. A 20px semibold total sits over a 12px label by 4px; a small pill follows by 8px.",
    hierarchy: "Read total, ready and pending counts in row order. Numbers use tabular figures and at most 4 digits. Labels use at most 2 words; pills use one word. The outer list is named Collection totals.",
    states: "All values are static informational content. Visible state labels identify each group without relying on fill. There are no focusable controls, hover, selected or disabled states.",
    responsive: "The root grows from 288px to 416px at 640px. The three equal columns remain side by side, with labels allowed to wrap to two lines on mobile.",
    usage: "Use for a simple numeric breakdown with named statuses. Choose a full stat card when a trend or explanation needs more space. Variations: replace counts with percentages, omit the total group, or use completed and remaining labels.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
