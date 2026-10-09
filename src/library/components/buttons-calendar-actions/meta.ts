import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-calendar-actions',
  name: 'Buttons — Calendar actions',
  category: 'buttons',
  tags: ['corporate', 'light'],
  description:
    'An appointment action group with a date tile, a confirm button, and compact reschedule and cancellation actions.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide bordered card with 20px padding. Start with a 48px square date tile next to meeting details, then a full-width 44px primary button and a two-column 36px secondary row.',
    style:
      'White background, slate-200 border, 12px radius and blue-700 primary fill. The date tile uses blue-50; secondary actions use thin slate-300 rules and red-700 cancellation text.',
    states:
      'Confirm hover uses blue-800, reschedule uses slate-50 and cancellation uses red-50. All three buttons draw a 2px slate-900 focus outline with 2px offset, with color transitions disabled for reduced motion.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
