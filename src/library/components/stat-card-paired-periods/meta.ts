import type { ComponentMeta } from '../../types'

export default {
  slug: "stat-card-paired-periods",
  name: "Stat cards — Paired reporting periods",
  category: "stat-card",
  tags: [
    "split",
    "numbers",
    "compact"
  ],
  description: "Current and previous values occupy two equal columns above an absolute-change footer. Use it when both totals are needed for a fair comparison.",
  preview: {
    "kind": "element"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Metric comparison                                            │
│ Current period        | Previous period                      │
│ 1,284                 | 1,120                                │
│ ──────────────────────────────────────────────────────────   │
│ +164 this period                                             │
│ Compared with the preceding 30 days                          │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The root grows to 384px sm:w-96 at 640px and uses 24px p-6. A two-column dl begins 20px below the metric label. The second value has a left divider and 20px padding. A change footer starts 24px later with 16px top padding.",
    "hierarchy": "Read the metric, current value, previous value and difference. Values are 30px semibold tabular figures. Keep labels below 3 words, change text below 4 and caption below 9.",
    "states": "All content is static; figures have no selected, disabled or loading state. ",
    "responsive": "Both metric columns remain visible on mobile; their short four-digit values fit within the 288px root. The desktop width expands at 640px.",
    "usage": "Use for comparable periods with equal units. Choose a figure-and-delta card when the prior total is unnecessary. Variations include actual versus forecast or one segment versus another."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
