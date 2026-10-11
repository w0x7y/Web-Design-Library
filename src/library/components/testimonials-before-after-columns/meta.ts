import type { ComponentMeta } from '../../types'

export default {
  slug: "testimonials-before-after-columns",
  name: "Testimonials — Before and after columns",
  category: "testimonials",
  tags: [
    "split",
    "spacious"
  ],
  description: "Two equally weighted quote panels separate the earlier difficulty from the later result. Use it to show a change through two customer statements.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Heading for the change customers describe                    │
│ ┌─────────────────────────┐  ┌─────────────────────────┐     │
│ │ Before                  │  │ After                   │     │
│ │ Quote about difficulty  │  │ Quote about the result  │     │
│ │ Context                 │  │ Context                 │     │
│ │ AR Name / Role          │  │ JL Name / Role          │     │
│ └─────────────────────────┘  └─────────────────────────┘     │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. The introduction precedes two equal md:grid-cols-2 panels by 48px. Panels use 24px p-6 padding, 32px sm:p-8, and a 24px gap. Each contains a stage label, 20px quote, a divided context line and attribution.",
    "hierarchy": "Read the heading first, then Before and After from left to right. Use a heading up to 9 words, introduction up to 20, each quote up to 20, author name up to 3 and stage context up to 10.",
    "states": "All content is static; figures have no selected, disabled or loading state. ",
    "responsive": "Below 768px the panels stack in chronological order. From 640px padding grows to 32px; text continues wrapping naturally.",
    "usage": "Use for a transformation backed by two statements. Choose a single large quote for one uninterrupted story. Variations include one author across both stages or two separate interview dates."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
