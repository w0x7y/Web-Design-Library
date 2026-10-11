import type { ComponentMeta } from '../../types'

export default {
  slug: "testimonial-card-two-voices",
  name: "Testimonial cards — Two connected voices",
  category: "testimonial-card",
  tags: [
    "stacked",
    "list",
    "compact"
  ],
  description: "Two short quotes and compact bylines share one divided card. Use it when two perspectives support the same outcome.",
  preview: {
    "kind": "element"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Two perspectives on one outcome                              │
│ ──────────────────────────────────────────────────────────   │
│ First short quote                                            │
│ AR  Alex Rivera                                              │
│ ──────────────────────────────────────────────────────────   │
│ Second short quote                                           │
│ JL  Jordan Lee                                               │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-5 article grows to 320px at 640px. Two figures each start after 16px with a top border and 16px top padding. Each 14px quote is followed after 12px by a 32px avatar and 12px author name.",
    "hierarchy": "The shared context label frames two equally weighted voices. Keep context below 7 words, each quote below 10 and names below 3.",
    "states": "All content is static; figures have no selected, disabled or loading state. ",
    "responsive": "The two figures remain stacked at every width. Compact quotes and bylines keep the card below the element height limit.",
    "usage": "Use for related feedback from two people. Choose separate cards when either quote needs a longer explanation. Variations include two collaborators or two roles in the same decision."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
