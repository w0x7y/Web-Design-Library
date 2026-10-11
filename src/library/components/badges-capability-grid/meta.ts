import type { ComponentMeta } from '../../types'

export default {
  slug: "badges-capability-grid",
  name: "Badges — Capability badges in a small grid",
  category: "badges",
  tags: ["grid", "icons", "compact"],
  description: "A two-column grid places a small capability icon and state badge above each feature title. Use to compare availability without a large feature table.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ ┌──────────────────────┐  ┌──────────────────────┐   │
│ │ Icon [Available]     │  │ Icon [Included]      │   │
│ │ Feature title        │  │ Another feature      │   │
│ └──────────────────────┘  └──────────────────────┘   │
│ ┌──────────────────────┐  ┌──────────────────────┐   │
│ │ Icon [Optional]      │  │ Icon [Restricted]    │   │
│ │ Third feature        │  │ Final feature        │   │
│ └──────────────────────┘  └──────────────────────┘   │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px two-column list grows to 416px at sm with 12px gaps. Each rounded-lg card has a neutral-200 border and 12px padding. A 16px icon and small pill share the top row; a 12px semibold feature title starts 12px below.",
    hierarchy: "Scan cards from left to right, reading state then title. Icons reinforce capability identity while visible badges explain availability. Titles use at most 2 words and statuses one word under 11 characters.",
    states: "The cards are informational and contain no focusable controls. Available, Included, Optional and Restricted are visible words, so their meaning survives forced colors. There are no hover or selected states.",
    responsive: "The grid remains two columns at every width. Its root grows from 288px to 416px at 640px. State rows can wrap if a host uses longer status labels; retain the short-label guidance for a compact result.",
    usage: "Use for a small set of capability states where icons aid scanning. Choose an access matrix when each capability must be compared across groups. Variations: show two features, use readiness statuses, or omit icons for text-only cards.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
