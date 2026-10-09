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
      'A centered 1024px container with 24px side and 80px vertical padding. A heading group and a 4.9 rating summary are separated by 24px. Three review figures start 40px below the header. Rows have 28px vertical padding and 20px grid gaps; each pairs a reviewer caption with stars, quote and service/date metadata. Reviewer initials are 40px circles, separated from name/status by 12px.',
    style:
      'White canvas, stone-950 system sans type, 1px stone-200 row separators and amber-700 stars. Heading and aggregate rating are 36px semibold; heading has -0.025em tracking. Quotes are 18px with 1.625 line height. Eyebrow is 12px semibold uppercase with 0.1em tracking. Names are 14px semibold; status, dates and rating count use 12px stone-500. Initials use 12px medium text on stone-100 circles.',
    states:
      'No controls, hover states or animations. Star groups have role="img" and the accessible name "5 out of 5 stars", so the rating is read as a number rather than repeated star characters.',
    responsive:
      'Below 640px the header stacks. At 640px the heading and summary sit in a row aligned to the bottom. Below 768px reviewer identity stacks before the quote; at 768px each row uses a 192px identity column and a flexible quote column separated by 20px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
