import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-calendar-actions',
  name: 'Buttons — Calendar actions',
  category: 'buttons',
  tags: ['corporate', 'light'],
  description:
    'An appointment action group with a date tile, a confirm button, and compact reschedule and cancellation actions.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A fixed 288px white card with 20px padding, a 1px slate-200 border and 12px radius. A semantic 48px time tile labelled October 16, 2026 sits 12px from a 14px semibold heading and 12px time. A description follows after 16px, then a full-width 44px confirm button after 16px. The two-column secondary row has 36px buttons, 8px gaps and 12px top margin.',
    style:
      'Default sans and slate-900 text. Date tile: blue-50 fill, 8px radius, 10px semibold blue-700 month and 20px bold blue-900 day with line-height 1. Description is slate-600, 12px with 20px line-height. Confirm uses blue-700, white 14px semibold text and 8px radius. Secondary buttons use 12px medium text; reschedule has a slate-300 border and cancellation is red-700.',
    states:
      'Confirm hover uses blue-800, reschedule uses slate-50 and cancellation uses red-50. All three buttons draw a 2px slate-900 focus outline with 2px offset, with color transitions disabled for reduced motion.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
