import type { ComponentMeta } from '../../types'

export default {
  slug: "testimonials-rating-distribution",
  name: "Testimonials — Rating distribution beside quotes",
  category: "testimonials",
  tags: [
    "sidebar",
    "numbers",
    "list"
  ],
  description: "A rating histogram sits beside two detailed quote panels. Use it to connect the distribution of feedback with specific customer experiences.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Heading for the review evidence                              │
│ ┌────────────────┐  ┌────────────────────────────────────┐   │
│ │ 4.8 / 5        │  │ Customer quote                     │   │
│ │ 1,284 reviews  │  │ AR Name / Role                     │   │
│ │ 5 =========78% │  └────────────────────────────────────┘   │
│ │ 4 ==       16% │  ┌────────────────────────────────────┐   │
│ │ 3           4% │  │ Customer quote                     │   │
│ │ 2           1% │  │ JL Name / Role                     │   │
│ │ 1           1% │  └────────────────────────────────────┘   │
│ └────────────────┘                                           │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. The content sits 48px below the heading in a 1fr/2fr lg:grid-cols-[1fr_2fr] layout with a 40px gap. The p-6 sidebar has a 36px score, review count and five 8px histogram bars. The main column stacks two p-6 figures 24px apart.",
    "hierarchy": "The score summarizes the feedback, the bar labels explain its spread and the two 20px quotes supply detail. Keep quote text below 20 words, count captions below 6 and author roles below 4.",
    "states": "All content is static; figures have no selected, disabled or loading state. ",
    "responsive": "Below 1024px the histogram comes before the quote stack. Its flexible bar column and fixed 16px/40px label columns fit narrow screens.",
    "usage": "Use when review distribution supports a trust claim. Choose a large quote when the score adds no information. Variations include fewer score bands or a link to the underlying review collection."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
