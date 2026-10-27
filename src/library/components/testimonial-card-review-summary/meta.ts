import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-review-summary',
  name: 'Testimonial cards — Review summary with avatar stack',
  category: 'testimonial-card',
  tags: ['stacked', 'numbers', 'layered'],
  description: 'An average rating with stars leads a stack of overlapping reviewer avatars and a review count, then one highlighted quote and a link to every review. Use it to sum up many reviews in one card before the reader opens the full list.',
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│ Customer reviews                             │
│ 4.9  *****                                   │
│      Average rating out of 5                 │
│ (AR)(JL)(MP)(SK)  2,140 reviews              │
│ ┌──────────────────────────────────────────┐ │
│ │ Highlighted quote from one review that   │ │
│ │ names the benefit most reviewers mention │ │
│ │ Alex Rivera, Role                        │ │
│ └──────────────────────────────────────────┘ │
│ [Read all reviews >]                         │
└──────────────────────────────────────────────┘`,
  brief: {
    layout: 'A 288px w-72 section, 320px sm:w-80 from 640px, with 24px p-6 padding, a 1px neutral-200 border and an 8px rounded-lg radius. A 14px eyebrow heading sits above a rating row 12px below it: a 36px number beside a 16px five-star row and its label, with a 12px gap. The avatar row starts 16px lower: four 32px circles overlapping by 8px (-space-x-2), each with a 1px white border, then the review count 12px to the right. The highlighted quote is an inset neutral-50 panel with 16px p-4 padding and an 8px radius, 20px below. The text link sits 20px under the panel.',
    hierarchy: 'The heading names the card, then the 36px semibold average carries the most weight. Stars and the review count back it up; the stars and avatars are aria-hidden because the label and count say the same in text. The quote is 14px neutral-900, set apart from the 12px neutral-500 byline with the name in semibold. Slots: heading up to 3 words, rating label up to 5 words, review count up to 3 words, quote up to 20 words, name up to 3 words, role up to 3 words, link up to 4 words.',
    states: 'The link underlines with a 4px offset, turns neutral-600 on hover and shows a 2px neutral-900 outline offset 2px on keyboard focus. The rating, avatars and quote are static with no open, selected or disabled states.',
    responsive: 'The card grows from 288px to 320px at 640px with fixed padding and type sizes. The rating row and avatar row stay on one line at both widths; the quote wraps inside the panel.',
    usage: 'Use beside a pricing table, product page or signup form to sum up review volume and quality in one place. Pick testimonial-card-rating-review for a single full review, or testimonials-rating-distribution for a section with the score breakdown. Variations: replace the avatar stack with review-site logos, add a second short quote, or swap the link for a secondary action that opens a review form.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
