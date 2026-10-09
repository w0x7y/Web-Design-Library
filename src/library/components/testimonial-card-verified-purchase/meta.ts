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
      'A 288px review figure, 320px from 640px, with 20px padding and 12px corners. Five stars and a verified-purchase pill lead into a 16px review title and 14px quote. A ruled attribution contains buyer name, date and product variant.',
    style:
      'White surface, neutral-200 border, neutral-950 title and neutral-700 body. Amber-700 rating stars and emerald-50 verification badge with emerald-800 text. The accessible rating is written as 5 out of 5.',
    states:
      'The review is static with no controls or animation. Verification and rating have text equivalents, and the date is a semantic time element.',
    responsive:
      'The card grows from 288px to 320px at 640px. Rating and verification wrap when needed; buyer name and date share a compact row and the product context wraps below.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
