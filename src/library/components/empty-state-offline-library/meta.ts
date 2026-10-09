import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-offline-library',
  name: 'Offline saved library',
  category: 'empty-state',
  tags: ['dark', 'minimal'],
  description:
    'A connection empty state that points to locally saved content. Use it when a reading or media app cannot refresh its library.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px offline panel with connection icon/status row, 20px title, explanation and stacked saved-items/retry actions.',
    style:
      'Slate-950 panel, slate-100 title, slate-400 copy, cyan-300 signal and cyan-200 primary action. 12px panel radius and thin slate-600 retry border.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Fixed 288px root at every viewport, with 24px padding and wrapping copy. The complete component stays under 384px tall in the mobile and desktop capture frames.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
