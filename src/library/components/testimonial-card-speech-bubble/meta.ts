import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-speech-bubble',
  name: 'Testimonial cards — Speech bubble with author below',
  category: 'testimonial-card',
  tags: ["stacked","layered"],
  description: "A tinted quotation bubble with a small tail sits above an indented avatar and author. Use it when the quote and attribution should read as separate regions.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│ ┌─────────────────────────────────────┐      │
│ │ *****                               │      │
│ │ Quote that describes the benefit    │      │
│ │ in the author own words.            │      │
│ └──────┬──────────────────────────────┘      │
│        v                                     │
│       (AR)  Alex Rivera                      │
│             Role, Company                    │
└──────────────────────────────────────────────┘`,
  brief: {
    layout: "A frameless 288px w-72 figure, 352px sm:w-[22rem] from 640px. The bubble has 24px p-6 padding, an 8px rounded-lg radius, a 1px neutral-200 border and neutral-50 fill. A five-star row has 16px icons with 4px gaps; the quote starts 16px below. A 16px square rotated 45 degrees sits 8px below the bubble edge and 32px from the left, drawing only right and bottom borders. The figcaption starts 20px below and is indented 32px, with a 12px avatar/byline gap.",
    hierarchy: "The 16px neutral-600 quote leads inside the bubble, below the optional rating row. Five filled stroke stars expose Rated 5 out of 5 through a labelled image role. A 40px decorative initials avatar anchors a 14px semibold name and a 12px neutral-500 role/company separated by 4px. Slots: quote up to 22 words, name up to 3, role/company up to 4.",
    states: "The bubble, rating and attribution are static with no controls and no hover, focus, open, selected or disabled states. The decorative tail and avatar are aria-hidden. The rating has an accessible text label and a blockquote/figcaption pair identifies the quotation and author.",
    responsive: "The root width changes from 288px to 352px at 640px. Padding, type, tail placement and author indentation stay fixed. The quote wraps to its available width while the attribution stays in one horizontal row.",
    usage: "Use for a quote that should appear as a message above its author. Pick testimonial-card-quote-author for a conventional bordered card or testimonial-card-social-post for a source-linked public post. Variations: omit the rating row, show a shorter quote, or move the tail and attribution to the right.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

