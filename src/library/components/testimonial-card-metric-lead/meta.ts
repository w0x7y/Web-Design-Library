import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-metric-lead',
  name: 'Testimonial cards — Outcome figure above quote',
  category: 'testimonial-card',
  tags: ["stacked","numbers"],
  description: "An outcome figure and label lead a short quote, byline and case-study link. Use it when a measurable result is the most useful proof point.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│ Company label                                │
│ 3.2x                                         │
│ Outcome label                                │
│ ────────────────────────────────────────     │
│ Short quote that explains the result.        │
│ Alex Rivera, Role                            │
│ [Read the case study]                  >     │
└──────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px w-72 figure, 320px sm:w-80 from 640px, with 24px p-6 padding, a 1px border and an 8px radius. The company eyebrow precedes the outcome figure by 12px and its label by a further 8px. The quote follows after a 20px margin and a hairline, with 20px top padding. The byline starts 16px below the quote; the case-study link follows 16px later.",
    hierarchy: "The 48px text-5xl semibold tabular outcome dominates, with a 14px label beneath. The company eyebrow is 14px medium neutral-500. A 14px neutral-600 quote explains the result; the 14px name is semibold beside a muted role. The link is 14px medium with a 16px arrow. Slots: company up to 3 words, figure up to 5 characters, outcome label up to 4 words, quote at most 25 words, name up to 3, role up to 2.",
    states: "The case-study link changes to neutral-600 on hover and shows a 2px neutral-900 focus-visible outline offset 2px. The figure, quote and byline are static. There are no open, selected or disabled states.",
    responsive: "Only the width steps from 288px to 320px at 640px. All type, padding and vertical gaps remain fixed. The byline is a flex-wrap baseline row with an 8px horizontal gap and can wrap a longer role onto another line.",
    usage: "Use when a measurable outcome is stronger evidence than the quotation alone. Pick testimonial-card-quote-author for experience-led feedback or testimonial-card-rating-review for a review with a rating and date. Variations: use a percentage reduction, show an amount saved, or replace the multiplier with a shorter completion time.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

