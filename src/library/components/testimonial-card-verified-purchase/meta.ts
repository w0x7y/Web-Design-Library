import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-verified-purchase',
  name: 'Verified product review',
  category: 'testimonial-card',
  tags: ['minimal', 'light'],
  description:
    'A product review card with an accessible star rating, verified buyer label and usage context. Use it in shop reviews and customer feedback pages.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px figure, 320px from 640px, with 20px padding. A wrapping space-between row with an 8px gap pairs five stars with a verified-purchase pill. The review starts 16px below with a 16px title and a quote 8px below. The footer starts 20px below with a top rule and 16px top padding. A space-between buyer/date row has a 12px gap; product variant and usage context follow after 8px.',
    style:
      'White surface, 1px neutral-200 border and 12px corners, without shadow. Default sans: neutral-950 16px semibold title with 24px line height, neutral-700 14px quote with 24px line height, 12px semibold name with 16px line height, and neutral-600 11px date and context. Amber-700 stars are 18px with 28px line height and 0.05em tracking. The fully rounded emerald-50 verification badge has 8px horizontal and 4px vertical padding and 10px medium emerald-800 text.',
    states:
      'The review has no interactive controls or animation. The stars are hidden inside a role="img" group labelled "Rated 5 out of 5", so assistive technology receives one complete rating. Verification uses visible text and the date is a semantic time element.',
    responsive:
      'The card grows from 288px to 320px at 640px. Rating and verification wrap when needed; buyer name and date share a compact row and the product context wraps below.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
