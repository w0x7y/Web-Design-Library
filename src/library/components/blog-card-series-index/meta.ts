import type { ComponentMeta } from '../../types'

export default {
  slug: "blog-card-series-index",
  name: "Blog cards — Ordered article series",
  category: "blog-card",
  tags: [
    "list",
    "numbers",
    "compact"
  ],
  description: "Three numbered article links form a compact series card beneath a shared heading. Use it when reading order is part of the content.",
  preview: {
    "kind": "element"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Series title / 3 articles                                    │
│ Heading for the article series                               │
│ ──────────────────────────────────────────────────────────   │
│ 01  [First article topic] / 4 min read                       │
│ 02  [Second article topic] / 6 min read                      │
│ 03  [Third article topic] / 8 min read                       │
│ ──────────────────────────────────────────────────────────   │
│ By Alex Rivera                                               │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-5 card becomes 320px from 640px. A series label and 18px heading lead a divided ordered list after 20px. Each row has a 24px number rail, 12px gap, 8px vertical padding and a linked topic above a reading time.",
    "hierarchy": "The series heading frames the ordered topics. Keep heading below 7 words, topic links below 4 and author below 3.",
    "states": "Links underline on hover and show a 2px neutral-900 keyboard outline offset by 2px. ",
    "responsive": "The numbered rows remain stacked at every width, with the topic column filling available space.",
    "usage": "Use for sequential reading or a multipart guide. Choose an ordinary article card for one independent post. Variations include two parts or a current-part label."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
