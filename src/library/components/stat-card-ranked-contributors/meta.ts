import type { ComponentMeta } from '../../types'

export default {
  slug: "stat-card-ranked-contributors",
  name: "Stat cards — Ranked contributor list",
  category: "stat-card",
  tags: [
    "list",
    "numbers",
    "compact"
  ],
  description: "A total leads three ranked names with counts and an all-contributors link. Use it when readers need to identify the main contributors to a metric.",
  preview: {
    "kind": "element"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Leading contributors                                         │
│ 1,284 total                                                  │
│ ──────────────────────────────────────────────────────────   │
│ 01   Alex Rivera                               482           │
│ 02   Jordan Lee                                351           │
│ 03   Sam Kim                                   208           │
│ ──────────────────────────────────────────────────────────   │
│ [View all contributors]                                      │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-6 root becomes 320px sm:w-80 at 640px. A 30px total precedes an ordered list by 20px. Rows have 12px vertical padding, 12px gaps, monospaced rank markers and right-aligned tabular counts. The text link sits 16px below.",
    "hierarchy": "The total supplies context before readers scan ranks and names. Keep heading below 3 words, names below 3 and count figures below 6 characters.",
    "states": "Links underline on hover and show a 2px neutral-900 keyboard outline offset by 2px. The rows are static and have no selectable state.",
    "responsive": "Rows remain in one column on mobile and the flexible name region wraps if needed. The root widens at 640px.",
    "usage": "Use for ownership or contribution breakdowns. Choose share bars when group proportions matter more than names. Variations include team labels or the top two contributors."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
