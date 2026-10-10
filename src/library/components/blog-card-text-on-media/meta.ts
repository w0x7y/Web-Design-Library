import type { ComponentMeta } from '../../types'

export default {
  slug: "blog-card-text-on-media",
  name: "Blog cards — Text over full-bleed media",
  category: "blog-card",
  tags: ["layered", "media"],
  description: "A full-bleed article image with a category badge and a dark bottom headline panel. Use it for one featured or pinned post.",
  preview: { kind: "element" },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌────────────────────────────────────────────────────┐       │
│ │ [Category]                                         │       │
│ │                       Image                        │       │
│ │                                                    │       │
│ │ ┌────────────────────────────────────────────────┐ │       │
│ │ │ [Article headline that names the main topic]   │ │       │
│ │ │ Alex Rivera / 6 min read                       │ │       │
│ │ └────────────────────────────────────────────────┘ │       │
│ └────────────────────────────────────────────────────┘       │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A relative article 288px wide, 352px from 640px, and 320px tall (h-80), with a single minmax(0,1fr) grid column, an 8px radius and clipped edges. A neutral-100 media placeholder fills the full card with its 40px glyph centred horizontally at 64px from the top. A white category badge sits 16px from the top-left. A min-w-0 panel overlaps the media in the same grid cell, aligns to the bottom with self-end and spans the width with neutral-950 at 80% opacity and p-5 (20px), containing the title and a metadata line 12px below it.",
    hierarchy: "Read the image and category badge, then the 18px semibold white headline and 12px neutral-300 author/reading-time line. Slots: category up to 2 words, headline up to 9 words across at most three lines, author up to 3 words and reading time in the form 6 min read. The image aria-label names the article cover slot.",
    states: "The white headline link has a ::after covering the whole relative article. Group hover underlines it. Keyboard focus shows a 2px white outline offset 2px on the dark panel; forced colors preserves a visible system outline. Badge and media are static, and there are no open, selected or disabled controls.",
    responsive: "The root is 288px wide below 640px and 352px from 640px. Height stays 320px, overlay panel stays anchored to the bottom, and headline wraps naturally. No region changes order.",
    usage: "Use for a pinned post whose image and title deserve one visual block. Pick blog-card-cover-stacked when an excerpt and byline need separate space. Variations: use a series badge, show a short date in metadata, or pair two cards in a wider composition.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

