import type { ComponentMeta } from '../../types'

export default {
  slug: "testimonials-audience-outcome-table",
  name: "Testimonials — Audience and outcome table",
  category: "testimonials",
  tags: [
    "table",
    "numbers",
    "compact"
  ],
  description: "A three-column table pairs each audience with a quote and its result. Use it when readers compare proof relevant to different needs.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Heading for outcomes across audiences                        │
│ Audience          Customer statement            Outcome      │
│ ──────────────────────────────────────────────────────────   │
│ Audience need     Quote / Alex Rivera           42% less time│
│ Audience need     Quote / Jordan Lee            2.4x output  │
│ Audience need     Quote / Sam Kim               18 hrs saved │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A table starts 40px below the heading. Desktop columns take one quarter, one half and one quarter of the width. Three rows use 24px py-6 spacing, 24px right padding and bottom hairlines. Quote attributions sit 8px below each statement.",
    "hierarchy": "Read each audience label, its quote, then the bold 18px outcome. Limit audience labels to 7 words, quotes to 16, outcomes to 4 and names to 3. Column headers name the relationship.",
    "states": "All content is static; figures have no selected, disabled or loading state. ",
    "responsive": "Below 768px each table row becomes a stacked group and the header row hides. Audience, quote and outcome stay in the same order; no horizontal scrolling is required.",
    "usage": "Use when audience fit matters as much as aggregate approval. Choose a review list for detailed dated feedback. Variations include a result unit column or grouping rows by audience size."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
