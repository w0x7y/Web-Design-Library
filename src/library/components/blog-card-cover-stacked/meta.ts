import type { ComponentMeta } from '../../types'

export default {
  slug: "blog-card-cover-stacked",
  name: "Blog cards — Cover image above text",
  category: "blog-card",
  tags: ["stacked", "media"],
  description: "A cover image above article metadata, headline and excerpt, with a separate author footer. Use it for article grids where covers establish the browsing rhythm.",
  preview: { kind: "element" },
  wireframe: `┌────────────────────────────────────────────────────────┐
│ ┌────────────────────────────────────────────────────┐ │
│ │                       Image                        │ │
│ └────────────────────────────────────────────────────┘ │
│ Category label                                 Oct 10  │
│ [Article headline that names the topic]                │
│ Two-line excerpt that explains the article value       │
│ ────────────────────────────────────────────────────── │
│ (AR) Alex Rivera                           6 min read  │
└────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A relative bordered article, 288px (w-72), 352px from 640px (sm:w-[22rem]), clipped to an 8px radius. A full-width media placeholder is 144px tall (h-36). The body has 20px padding (p-5), a category/date row, a headline after 8px and excerpt after 8px. A footer with a 1px top divider uses 20px horizontal and 12px vertical padding and pairs a 24px avatar/name with reading time.",
    hierarchy: "The image precedes the 12px category/date row, 16px semibold headline and 14px excerpt. The footer uses a 12px name and time. Slots: category up to 2 words, headline up to 7 words across two lines, excerpt up to 12 words across two lines, author up to 3 words and reading time in the form 6 min read. The date is a time element and avatar initials are decorative.",
    states: "The headline link has an absolute ::after covering the relative card. Hover underlines the headline, and keyboard focus shows a 2px neutral-900 outline offset 2px on the link. The media, metadata and footer are static with no selected, open or disabled state.",
    responsive: "The card is 288px wide below 640px and 352px from 640px. Media height and spacing stay unchanged. Headline and excerpt wrap naturally; footer remains one row.",
    usage: "Use for an article grid with consistent cover imagery and author attribution. Pick blog-card-text-only when imagery adds no meaning. Variations: replace category with a series label, display a different publication date, or change reading time to a short content format.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

