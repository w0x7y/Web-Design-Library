import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-rating-review',
  name: 'Testimonial cards — Star rating review',
  category: 'testimonial-card',
  tags: ["stacked","icons","compact"],
  description: "A star rating and verified badge lead a review title and body, with reviewer, date and usage details below a divider. Use it for a review where rating and provenance matter.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│ ****o                [Verified purchase]     │
│ Review title                                 │
│ Review body that describes the               │
│ experience and a useful detail.              │
│ ────────────────────────────────────────     │
│ Alex Rivera                       Mar 14     │
│ Variant label          Usage duration        │
└──────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px w-72 figure, 320px sm:w-80 from 640px, with 24px p-6 padding, a 1px border and an 8px radius. The top row wraps a five-star cluster and verified badge with a 12px gap; stars are 16px with 4px gaps. The review title starts 20px below and the quote follows after 8px. The footer has a 20px margin, hairline and 16px top padding. Reviewer/date share a space-between row; usage details sit 8px below.",
    hierarchy: "Four filled currentColor stars and one outlined star expose Rated 4 out of 5 through a labelled image role; each SVG is decorative. The verified pill is 12px medium. The 16px semibold title precedes a 14px neutral-600 quote. The reviewer is 14px semibold; date and usage are 12px muted. Slots: title up to 4 words, review up to 25 words, name up to 3, date up to 6 characters, variant and usage up to 3 words each.",
    states: "The card is static with no controls and no hover, focus, open, selected or disabled states. The rating uses an accessible text label and the verified state is written in the badge. The time element carries a machine-readable date.",
    responsive: "The root grows from 288px to 320px at 640px with fixed padding and type sizes. The star cluster and verified badge wrap into two rows when they do not fit. The quote and footer remain stacked, with reviewer and date side by side.",
    usage: "Use for a review where rating, verification and usage context help readers assess it. Pick testimonial-card-quote-author for an unrated recommendation or testimonial-card-social-post for a linked public post. Variations: show a service review, change the verification wording, or replace variant details with review duration.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

