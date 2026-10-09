import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-commerce-checkout',
  name: 'Buttons — Commerce checkout',
  category: 'buttons',
  tags: ['minimal', 'light'],
  description:
    'A checkout action set with an order total, a secure primary action and a save-for-later button. Use it beneath a compact shopping bag.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide card with 20px padding, a bag header, a total row, a full-width 48px checkout button and a 40px secondary button separated by 8px.',
    style:
      'Stone-50 background, stone-200 border and 16px radius. Use default sans, a 20px semibold total, emerald-800 primary button, and a white outlined secondary action.',
    states:
      'Primary hover becomes emerald-950 and secondary hover becomes stone-100. Both buttons draw a 2px emerald-800 focus outline with 2px offset. Color transitions stop for reduced motion.',
    responsive:
      'Keep the 288px width and stacked actions at every viewport width. The card fits inside the mobile element frame without any breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
