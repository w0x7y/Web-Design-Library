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
      'A fixed 288px card with 20px padding, 1px stone-200 border and 16px radius. The bag header is a flex row with a bottom divider and 16px bottom padding. A baseline-aligned prompt and $84.00 total follow after 16px. Stack a 48px checkout button after 20px and a 40px save button after 8px; end with a centered shipping hint after 16px.',
    style:
      'Default sans on stone-50 with stone-950 text. The header is 12px medium uppercase with 0.1em tracking; its item count has white fill and a pill radius. The prompt is 14px stone-600, the total 20px semibold with tabular figures. Buttons have 12px radii and 14px labels: emerald-800 with white semibold text and a 20px arrow for checkout, white with a stone-300 border, medium text and a 16px bookmark for save. Shipping text is 12px stone-600.',
    states:
      'Primary hover becomes emerald-950 and secondary hover becomes stone-100. Both buttons draw a 2px emerald-800 focus outline with 2px offset. Color transitions stop for reduced motion.',
    responsive:
      'Keep the 288px width and stacked actions at every viewport width. The card fits inside the mobile element frame without any breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
