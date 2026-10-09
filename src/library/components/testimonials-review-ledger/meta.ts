import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-review-ledger',
  name: 'Customer review ledger',
  category: 'testimonials',
  tags: ['minimal', 'light'],
  description:
    'A compact review ledger with rating summary and three detailed customer rows. Use it for booking services and trusted local businesses.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1024px container pairs a heading with a 4.9 rating summary, then shows three bordered review rows. Each row has reviewer identity, a readable five-star rating label, quote and service/date metadata.',
    style:
      'White background, stone-950 type, stone-300 borders and amber-700 stars. Heading is 36px, quote is 18px. Reviewer initials sit in 40px stone-100 circles. No card shadows.',
    states:
      'This review ledger has no controls or interactive states. Each star rating has a numeric accessible label; initials are visual identity cues with names in adjacent text.',
    responsive:
      'Review rows use identity and quote columns at 768px, otherwise stack. Header stacks below 640px. Rating stars never replace the numeric accessible rating label.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
