import type { ComponentMeta } from '../../types'

export default {
  slug: "testimonials-quote-timeline",
  name: "Testimonials — Quote timeline",
  category: "testimonials",
  tags: [
    "sidebar",
    "list",
    "spacious"
  ],
  description: "A date rail accompanies three vertically ordered customer quotes. Use it for evidence collected across a sequence of milestones.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Heading for customer milestones                              │
│ Mar 2026  | Quote about the first useful outcome             │
│           | AR Name / Role                                   │
│ Jun 2026  | Quote about continued progress                   │
│           | JL Name / Role                                   │
│ Oct 2026  | Quote about lasting value                        │
│           | SK Name / Role                                   │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. An ordered list starts 48px below the heading with 32px gap-8 rows. At 768px each row has a 144px date rail and flexible figure separated by 16px. Figures have a left hairline, 24px padding-left and a 40px avatar below the quote.",
    "hierarchy": "Dates establish the sequence before readers scan each 18px quote. Keep the heading below 8 words, each quote below 18 and role below 4. Use month and year dates consistently.",
    "states": "All content is static; figures have no selected, disabled or loading state. ",
    "responsive": "Below 768px each date sits above its figure. The figure retains its vertical rule and 24px indentation. No fixed-width text column remains on mobile.",
    "usage": "Use for longitudinal feedback or a sequence of adoption milestones. Choose a card grid when chronology is unimportant. Variations include two milestones or linking each quote to a dated interview."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
