import type { ComponentMeta } from '../../types'

export default {
  slug: "blog-card-text-only",
  name: "Blog cards — Text only with author header",
  category: "blog-card",
  tags: ["stacked", "compact"],
  description: "An author row leads a text-only article card, with the date and category below the excerpt. Use it for updates and essays where the writer helps readers choose what to read.",
  preview: { kind: "element" },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ (AR) Alex Rivera                                             │
│      Author role                                             │
│                                                              │
│ [Article headline that names the main topic]                 │
│ Three-line excerpt describing                                │
│ the reason to read and the main                              │
│ question the article answers                                 │
│                                                              │
│ Oct 10                                   [Category]      >   │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A relative bordered article, 288px wide and 352px from 640px, with p-5 (20px) and an 8px radius. The author header pairs a 32px avatar with a stacked name and role, separated by an 8px gap. The headline follows after 20px and the excerpt after 8px. A metadata footer follows after 20px with 12px gaps and no divider: the date has mr-auto, followed by a category badge and a 20px trailing arrow.",
    hierarchy: "Read the author identity, 18px semibold headline and 14px three-line excerpt, then the 12px date and category badge. The author name is 14px medium and role is 12px neutral-500. Slots: category up to 2 words, headline up to 8 words, excerpt up to 20 words, author up to 3 words and role up to 2 words. Avatar and arrow are decorative.",
    states: "A headline-link ::after covers the card. Group hover underlines the headline and translates the arrow 2px right over 150ms; motion-reduce disables the movement and transition. Keyboard focus has the standard 2px outline offset 2px. No open, selected or disabled state is shown.",
    responsive: "At 640px width increases from 288px to 352px. All regions keep their order and spacing. The author header and metadata footer remain single rows while the title and excerpt wrap.",
    usage: "Use for updates, essays and announcements where the author and text carry the story. Pick blog-card-cover-stacked when the cover image helps readers choose. Variations: replace the role with reading time, use a series badge, or change the date to an updated date.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

