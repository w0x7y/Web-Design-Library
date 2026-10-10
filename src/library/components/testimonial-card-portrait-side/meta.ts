import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-portrait-side',
  name: 'Testimonial cards — Portrait column beside quote',
  category: 'testimonial-card',
  tags: ["asymmetric","media"],
  description: "A narrow portrait stretches beside a quote and bottom-aligned author, with both columns retained on mobile. Use it when the author image should be part of the card's main structure.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│ ┌─────────────┐  Quote that describes        │
│ │             │  the experience and          │
│ │    Image    │  its main benefit.           │
│ │             │                              │
│ │             │  Alex Rivera                 │
│ └─────────────┘  Role, Company               │
└──────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px w-72 figure with a 240px min-h-60 minimum height, 1px border, 8px radius and clipped corners. A grid uses an 80px first column and a minmax(0,1fr) text column, plus 1fr/auto rows. At 640px the root grows to 448px sm:w-[28rem] and the portrait column to 160px. The portrait spans both rows and fills their combined height. The quote has 24px top and side padding; the direct-child figcaption has 24px side, top and bottom padding.",
    hierarchy: "The portrait occupies the left edge, with a neutral-100 fill and decorative 40px image glyph. The accessible placeholder label names an author portrait. The quote is 14px neutral-600, increasing to 16px from 640px. A 14px semibold name and 12px neutral-500 role/company sit at the bottom right with a 4px gap. Slots: quote at most 30 words, name up to 3, role/company up to 4.",
    states: "The image placeholder, quote and attribution are static. There are no controls and no hover, focus, open, selected or disabled states. The image glyph is aria-hidden; the figure ends with its author figcaption.",
    responsive: "The two columns persist at every width. Below 640px the card is 288px with an 80px portrait and 14px quote. At 640px the card becomes 448px with a 160px portrait and 16px quote. The portrait stretches with the text content; an auto-height bottom row keeps the attribution aligned low without nesting figcaption inside a text wrapper.",
    usage: "Use when an author portrait should share the card's full height. Pick testimonial-card-quote-author for a small avatar under the quote or testimonial-card-centered-quote for a text-led focal card. Variations: use a shorter quote, widen the portrait on desktop, or replace the role/company with a single role.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

