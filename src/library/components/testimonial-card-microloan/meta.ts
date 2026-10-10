import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-microloan',
  name: 'Microloan borrower feedback',
  category: 'testimonial-card',
  tags: ['minimal', 'light', 'has-image'],
  description:
    'A portrait-first borrower endorsement for Sprout microfinance, with a compact loan reference. Use it on small-business lending pages.',
  preview: { kind: 'element' },
  fonts: ['Manrope:wght@400..700'],
  brief: {
    layout:
      'A 288px figure, 352px from 640px, with 24px padding, a 1px border and 8px corners. A 48px square portrait with 4px corners sits 12px from the borrower name and role. The quote follows after 24px, then a loan-and-lender flex row after another 24px with 12px top padding.',
    style:
      'Manrope, white background, teal-950 text, teal-800 supporting text and teal-100 border. The 20px medium quote has 28px line height; name and footer use 12px/16px type. A 2px teal-700 rule divides the footer. No shadow.',
    states:
      'Static informational figure with no controls, hover states or animation. Empty portrait alt avoids repeating the adjacent borrower name.',
    responsive:
      'Width is 288px below 640px and 352px from 640px. Padding, type and portrait dimensions remain unchanged.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
