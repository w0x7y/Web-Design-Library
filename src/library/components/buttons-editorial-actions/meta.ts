import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-editorial-actions',
  name: 'Buttons — Editorial actions',
  category: 'buttons',
  tags: ['editorial', 'light'],
  description:
    'Quiet reading actions for a long-form journal, with numbered rows and a generous subscription link.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide cream card with 24px padding. A serif title sits above two full-width 44px ruled buttons and a 44px filled subscription action.',
    style:
      'Use stone-100, stone-900, thin stone-300 dividers and square corners. A 24px system serif title contrasts with 12px uppercase utility text and monospace row numbers.',
    states:
      'Reading action hover uses stone-200; the primary hover uses stone-700. Every control has a 2px slate-900 focus outline and 2px offset. Reduced motion removes color transitions.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
