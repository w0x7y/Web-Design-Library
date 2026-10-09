import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-billing-summary',
  name: 'Billing and plan summary',
  category: 'settings',
  tags: ['minimal', 'light'],
  description:
    'A billing settings panel with current usage, payment method and invoice access. Use it for a subscription account page.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 768px billing page with plan title, renewal badge, a wide current-plan/seat meter card, payment-method card and invoice footer.',
    style:
      'White with zinc-200 hairlines, zinc-100 payment panel and 12px card radii. 30px title, 24px plan name, tabular pricing and a native labeled usage meter.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Cards stack below 768px and become 1.3fr/1fr above it. Header and footer wrap without overflow; 24px outer padding rises to 48px at 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
