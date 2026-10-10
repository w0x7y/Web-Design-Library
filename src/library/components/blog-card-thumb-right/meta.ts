import type { ComponentMeta } from '../../types'

export default {
  slug: "blog-card-thumb-right",
  name: "Blog cards — Text with thumbnail at right",
  category: "blog-card",
  tags: ["asymmetric", "media", "compact"],
  description: "A compact article card with headline text beside a right thumbnail and an excerpt below. Use it when a small image supports a text-led list.",
  preview: { kind: "element" },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Category label                    ┌──────────────────┐       │
│ [Article headline that            │      Image       │       │
│  names the topic]                 └──────────────────┘       │
│ Two-line excerpt explaining why to read                      │
│ Alex Rivera / Oct 10 / 6 min read                            │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A relative 288px-wide bordered article (w-72), 352px from 640px, with p-4 (16px) and an 8px radius. A top flex row has a min-w-0 text column, 16px gap and an 80px square media placeholder, growing to 96px at 640px. The text contains category and a headline after 4px. A full-width excerpt follows after 12px, then a wrapping metadata row after 12px with 4px by 8px gaps.",
    hierarchy: "The 12px category and 16px semibold headline lead; the image supports them. The excerpt is 14px neutral-600 and the author/date/time row is 12px neutral-500. Slots: category up to 2 words, headline up to 6 words across at most three lines, excerpt up to 12 words, author up to 3 words and a short date and reading time.",
    states: "The headline link stretches across its relative card through ::after. Group hover underlines the title; keyboard focus draws a 2px neutral-900 outline offset 2px. All other parts are static and there are no selected, open or disabled controls.",
    responsive: "Root width steps from 288px to 352px and thumbnail size from 80px to 96px at 640px. The text and thumbnail stay side by side. The excerpt stays full width and metadata wraps naturally if needed.",
    usage: "Use for compact article lists where a thumbnail supplies context. Pick blog-card-media-left when the image deserves a full column. Variations: place a format label in the category slot, omit reading time, or replace the excerpt with a concise summary.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

