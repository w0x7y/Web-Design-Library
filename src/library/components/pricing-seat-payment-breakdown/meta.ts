import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-seat-payment-breakdown',
  name: 'Pricing — Seat cost and first payment breakdown',
  category: 'pricing',
  tags: ['asymmetric', 'numbers', 'list'],
  description:
    'A highlighted first-payment total sits beside an invoice-style seat and setup breakdown.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow / Heading / Introduction                          │
│                                                          │
│┌──────────────────────────┐   ┌────────────────────────┐ │
││Example for five seats    │   │Payment breakdown       │ │
││$144 first payment        │   │5 seats at $19       $95│ │
││Then $95 /month           │   │One-time setup       $49│ │
││[Choose this setup]       │   │First payment       $144│ │
│└──────────────────────────┘   └────────────────────────┘ │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A bordered max-w-6xl section panel uses a 1:2 split from 768px. The total region has a neutral-50 fill and 24px padding; the breakdown has matching padding and 16px row spacing with 1px separators.',
    hierarchy:
      'The $144 first payment leads, then the $95 recurring amount and itemized charges. Keep labels under 8 words and the recurring-charge note under 20. Show quantity, unit price and one-time fees explicitly.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The total panel precedes the breakdown below 768px. Definition-list rows keep amounts aligned at the right while descriptions wrap. The action fits within its panel.',
    usage:
      'Use when an initial fee makes the first payment differ from renewals. Pick a simple plan card for one recurring price. Variations: replace setup with a deposit, show annual seats, or add a tax line with a stated basis.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
