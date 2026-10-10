import type { ComponentMeta } from '../../types'

export default {
  slug: "blog-card-date-column",
  name: "Blog cards — Date column beside text",
  category: "blog-card",
  tags: ["asymmetric", "numbers", "compact"],
  description: "A narrow publication-date column separated from headline and excerpt by a vertical divider. Use it for news, announcements and event write-ups.",
  preview: { kind: "element" },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ 10    │ Category label                                       │
│ Oct   │ [Article headline that names the update]             │
│       │ Two-line excerpt explaining the announcement         │
│       │ 6 min read                                           │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A relative bordered article, 288px wide and 352px from 640px, with p-5 (20px) and an 8px radius. A two-column grid has a 56px date column and a minmax(0,1fr) text column with a 16px gap. The date column is one time element with a 1px right divider and 16px right padding; it shows a 30px semibold day over a 12px month. The content has category, headline after 4px, excerpt after 8px and reading time after 12px.",
    hierarchy: "The day number and 16px semibold headline draw attention first, followed by the 12px category, 14px excerpt and 12px reading time. Slots: headline up to 7 words, category up to 2 words, excerpt up to 10 words, two-digit day and three-letter month. The time element has an accessible full-date label.",
    states: "The title link stretches over its relative article through ::after, underlines on group hover and shows a 2px neutral-900 keyboard-focus outline offset 2px. The date and other content are static; no selected, open or disabled state is present.",
    responsive: "Width changes from 288px to 352px at 640px. The 56px date column and 16px gap persist at every width; the text wraps in the remaining column and the divider stretches to the content height.",
    usage: "Use for chronologically scanned announcements and news. Pick blog-card-text-only when the author matters more than the date. Variations: display a different month, replace reading time with a format label, or use an updated date.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

