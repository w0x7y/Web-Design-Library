import type { ComponentMeta } from '../../types'

export default {
  slug: "testimonials-lead-quote-strip",
  name: "Testimonials — Lead quote over a supporting strip",
  category: "testimonials",
  tags: [
    "stacked",
    "row",
    "spacious"
  ],
  description: "One centered lead quote spans above three borderless supporting statements. Use it to give a shared benefit prominence while preserving several voices.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│            Heading for the common customer benefit           │
│             Large lead quote / AR Name / Role                │
│ ──────────────────────────────────────────────────────────   │
│ Supporting quote    Supporting quote    Supporting quote     │
│ Jordan Lee          Sam Kim             Morgan Taylor        │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A centered heading precedes a max-w-3xl 768px lead figure by 40px. The lead quote is 24px, 30px from 640px, with attribution 24px below. A supporting strip begins 48px later with a top border, 32px padding-top and three md:grid-cols-3 columns separated by 24px.",
    "hierarchy": "The lead statement reads first; the three 14px quotes add details at equal weight. Use a heading below 9 words, lead quote below 20, support quotes below 14 and names below 3.",
    "states": "All content is static; figures have no selected, disabled or loading state. ",
    "responsive": "Below 768px supporting figures stack. The lead stays centered and grows from 24px to 30px at 640px.",
    "usage": "Use for a shared theme with several supporting voices. Choose a mosaic when supporting statements need their own cards. Variations include two support quotes or brief roles beside each name."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
