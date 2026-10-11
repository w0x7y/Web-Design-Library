import type { ComponentMeta } from '../../types'

export default {
  slug: "testimonial-card-before-after",
  name: "Testimonial cards — Before and after statements",
  category: "testimonial-card",
  tags: [
    "stacked",
    "compact"
  ],
  description: "Two short quote regions distinguish the previous difficulty from the later result above one shared author. Use it for a concise transformation statement.",
  preview: {
    "kind": "element"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Before                                                       │
│ Quote about the earlier difficulty                           │
│ ──────────────────────────────────────────────────────────   │
│ After                                                        │
│ Quote about the change and benefit                           │
│ AR  Alex Rivera / Role                                       │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The figure has 20px p-5 padding and grows to 320px from 640px. Before uses a 12px label and 14px quote. After sits 20px below with a rule and 20px top padding, followed by a 16px quote. One byline starts 20px later.",
    "hierarchy": "The stage labels establish chronology, while the After quote gets slightly larger type. Keep each quote below 10 words, name below 3 and role below 3.",
    "states": "All content is static; figures have no selected, disabled or loading state. ",
    "responsive": "Both statements remain stacked at all widths. The desktop root widens at 640px without changing their order.",
    "usage": "Use for a change described by the same person. Choose a metric-led card for a quantified result. Variations include earlier/later labels or two interview dates."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
