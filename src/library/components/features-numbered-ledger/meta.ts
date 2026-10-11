import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-numbered-ledger',
  name: 'Features — Numbered capability ledger',
  category: 'features',
  tags: ['list', 'row', 'numbers'],
  description:
    'Full-width numbered rows align a title, explanation and destination link in four columns.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│Eyebrow / Heading / Introduction                            │
│                                                            │
│01  Main capability       Supporting explanation   [Explore]│
│02  Supporting workflow   Supporting explanation   [Explore]│
│03  Useful detail         Supporting explanation   [Explore]│
│04  Outcome assurance     Supporting explanation   [Explore]│
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl section contains a bordered ordered list 40px below its introduction. Rows have 24px vertical padding and 12px gaps. At 768px, a 48px index, flexible title, double-width explanation and auto-width link form four columns.',
    hierarchy:
      'The index supports scanning while 18px titles name each capability. Keep titles under 4 words and explanations under 20. Each repeated Explore link includes its capability in its accessible label.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'Below 768px each row stacks index, title, explanation and action in source order. No fixed table width is required; borders still separate the four rows.',
    usage:
      'Use for a short capability index with dedicated destination pages. Pick cards for media or longer descriptions. Variations: replace numbers with categories, include three rows, or add a short status beside each title.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
