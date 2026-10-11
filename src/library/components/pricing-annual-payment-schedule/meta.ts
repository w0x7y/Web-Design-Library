import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-annual-payment-schedule',
  name: 'Pricing — Annual price with a payment schedule',
  category: 'pricing',
  tags: ['split', 'numbers', 'list'],
  description:
    'A large annual amount sits beside a three-step timeline of payment, reminder and renewal.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow / Heading / Introduction                          │
│                                                          │
│Annual access                  Payment schedule           │
│$228                           (1) Today: $228            │
│Equivalent to $19 /month           Access starts          │
│[Choose annual access]         (2) Month 12: reminder     │
│Access note                        Renewal notice         │
│                               (3) Year 2: $228           │
│                                   Access renews          │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl section contains a bordered two-column region from 768px with a 40px gap and 32px top padding. The annual amount uses 48px semibold type. Schedule rows use 32px numbered circles and 16px horizontal gaps.',
    hierarchy:
      'Read the annual price and monthly equivalent before the action and renewal sequence. Keep schedule titles under 5 words and explanations under 10. State both initial and renewal amounts explicitly.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The payment schedule follows the annual price below 768px. Timeline rows remain horizontal internally with flexible text; the primary action wraps its label if needed.',
    usage:
      'Use when an annual commitment needs a clear renewal explanation. Pick a simple plan card for monthly billing. Variations: show a split-payment schedule, include a grace period, or replace the reminder step with a cancellation deadline.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
