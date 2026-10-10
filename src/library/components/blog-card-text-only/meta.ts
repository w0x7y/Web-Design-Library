import type { ComponentMeta } from '../../types'

export default {
  slug: "blog-card-text-only",
  name: "Blog cards — Text only with author footer",
  category: "blog-card",
  tags: ["stacked", "compact"],
  description: "A text-first article card with date, category badge and a distinct author footer. Use it for updates and essays without useful cover imagery.",
  preview: { kind: "element" },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Oct 10                                    [Category]         │
│ [Article headline that names the main topic]                 │
│ Three-line excerpt describing the reason to read             │
│ and the main question the article answers                    │
│ ──────────────────────────────────────────────────────       │
│ (AR) Alex Rivera                                   >         │
│      Author role                                             │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A relative bordered article, 288px wide and 352px from 640px, with p-5 (20px) and an 8px radius. The top metadata row pairs a time element and a badge. A headline follows after 12px and an excerpt after 8px. After 20px, a footer has a 1px top divider and 16px top padding. It pairs a 32px avatar, a stacked author name/role with an 8px gap and a 20px trailing arrow pushed to the right.",
    hierarchy: "Read the 12px date/category, 18px semibold headline and 14px three-line excerpt, then the author footer. Author name is 14px medium and role is 12px neutral-500. Slots: category up to 2 words, headline up to 8 words, excerpt up to 20 words, author up to 3 words and role up to 2 words. Avatar and arrow are decorative.",
    states: "A headline-link ::after covers the card. Group hover underlines the headline and translates the arrow 2px right over 150ms; motion-reduce disables the movement and transition. Keyboard focus has the standard 2px outline offset 2px. No open, selected or disabled state is shown.",
    responsive: "At 640px width increases from 288px to 352px. All regions keep their order and spacing. The top metadata and author footer remain single rows while title and excerpt wrap.",
    usage: "Use for updates, essays and announcements where text carries the story. Pick blog-card-cover-stacked when the cover image helps readers choose. Variations: replace the role with reading time, use a series badge, or change the date to an updated date.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

