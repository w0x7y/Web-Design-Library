import type { ComponentMeta } from '../../types'

export default {
  slug: "cta-price-inclusions-strip",
  name: "Call to action — Price and inclusions strip",
  category: "cta",
  tags: [
    "row",
    "numbers",
    "list"
  ],
  description: "A title, price and action share a top row above three inclusions and a terms strip. Use it for one clearly scoped paid next step.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────┐  │
│ │ Offer / Heading          $29 / month     [Choose option]│  │
│ ├─────────────────────────────────────────────────────────┤  │
│ │ + First inclusion  + Second inclusion  + Third inclusion│  │
│ ├─────────────────────────────────────────────────────────┤  │
│ │ Terms summary                                           │  │
│ └─────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. An inset rounded-lg panel has three horizontal bands. The 24px top band becomes a 1fr/auto/auto md:grid grid with 24px gaps. A divided p-6 inclusion band has three sm:grid-cols-3 cells. A neutral-50 terms strip has 24px horizontal and 16px vertical padding.",
    "hierarchy": "Read the offer title, 36px price, action, inclusions and terms. Keep title below 8 words, each inclusion below 9, terms below 18 and the price unit below 3.",
    "states": "The 44px filled action changes from neutral-900 to neutral-700 on hover; outlined actions fill neutral-50. All controls show a 2px neutral-900 keyboard outline offset by 2px. ",
    "responsive": "Below 768px top-band items stack; below 640px inclusions stack. Price and action remain visible above the scope details.",
    "usage": "Use for one offer with a clear price. Choose a pricing section for competing tiers. Variations include annual billing or a one-time fee."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
