import type { ComponentMeta } from '../../types'

export default {
  slug: "testimonials-video-transcript-grid",
  name: "Testimonials — Video stories with transcripts",
  category: "testimonials",
  tags: [
    "grid",
    "media",
    "spacious"
  ],
  description: "Three equal video panels pair short quotes with native transcript disclosures. Use it when readers can either watch a story or read its context.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│             Heading for customer video stories               │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐  │
│ │      Video      │ │      Video      │ │      Video      │  │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘  │
│ Short quote         Short quote         Short quote          │
│ AR Name / Role      JL Name / Role      SK Name / Role       │
│ [Read transcript v] [Read transcript v] [Read transcript v]  │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A centered introduction leads a three-column lg:grid-cols-3 grid by 48px. Cards have 24px p-6 padding and 24px gaps. Each 16:9 media region is followed by a quote after 20px, byline after 16px and a divided disclosure after 20px.",
    "hierarchy": "The three video regions carry equal weight. Keep each quote below 12 words, transcript excerpt below 45, names below 3 words and roles below 4.",
    "states": "Each native details opens its own transcript and rotates the chevron. Summary controls show a 2px outline with 2px offset. Video placeholders are static.",
    "responsive": "Below 1024px the cards form one column. Media remains 16:9 and transcript content expands the card in normal flow.",
    "usage": "Use for several recorded interviews with readable alternatives. Choose a media-and-quote split for one visual story. Variations include two interviews or a duration label below each video."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
