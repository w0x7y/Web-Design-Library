import type { ComponentMeta } from '../../types'

export default {
  slug: "blog-card-media-left",
  name: "Blog cards — Media column beside text",
  category: "blog-card",
  tags: ["asymmetric", "media"],
  description: "An article card that stacks on mobile and places a full-height image beside its text on desktop. Use it for a prominent story in a feed or search result.",
  preview: { kind: "element" },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌─────────────────────┐ Category label                       │
│ │                     │                                      │
│ │                     │ [Article headline that names         │
│ │        Image        │  the central topic]                  │
│ │                     │ Excerpt explaining the value         │
│ │                     │                                      │
│ └─────────────────────┘ (AR) Alex Rivera / Oct 10 / 6 min    │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A relative 288px-wide bordered article with an 8px clipped radius. Below 768px, a full-width 2:1 image sits above a p-5 (20px) flex text block. From 768px (md:) the root is 640px wide and uses a 240px media column plus a flexible text column; the media stretches to the content height and the text uses p-6 (24px). The text holds category, headline after 8px, excerpt after 12px and a byline after at least 20px pushed down with mt-auto. The byline has a 32px avatar, a name and date/time stacked beside it.",
    hierarchy: "Read the image, 12px category, 18px semibold headline, 14px excerpt and author. At 768px the headline grows to 24px. Slots: category up to 2 words, headline up to 8 words, excerpt up to 12 words, author up to 3 words and short date plus reading time. The date uses time markup and avatar initials are hidden from assistive technology.",
    states: "A headline-link ::after covers only its relative article. Group hover underlines the headline, and the link shows the standard 2px neutral-900 focus outline offset 2px. Other regions are static; no selected, open or disabled state is present.",
    responsive: "Below 768px the root is 288px wide with a 2:1 cover above the text. From 768px it is 640px wide with a 240px full-height media column, 24px text padding and a 24px headline. Date and reading time keep a compact second byline line. The mobile card stays below 384px tall.",
    usage: "Use for a featured article inside a feed or results list. Pick blog-card-thumb-right for a more compact row. Variations: use a video placeholder, change the byline to an editor credit, or replace the category with a series name.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

