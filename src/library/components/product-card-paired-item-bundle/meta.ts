import type { ComponentMeta } from '../../types'

export default {
  slug: 'product-card-paired-item-bundle',
  name: 'Product cards — Paired product bundle',
  category: 'product-card',
  tags: ['split', 'media', 'numbers'],
  description:
    'Two equal item images lead one shared bundle description and a price comparison.',
  preview: {
    kind: 'element',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Two-item bundle                                           │
│┌──────────────────────────┐   ┌────────────────────────┐ │
││Image                     │   │Image                   │ │
│└──────────────────────────┘   └────────────────────────┘ │
│Bundle name                                               │
│Short explanation of the pairing                          │
│$64                                 Separate total $80    │
│[                    View bundle                     ]    │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 288px card widens to 320px at 640px with 16px padding. Two equal 4:3 media slots use an 8px gap beneath the eyebrow. A shared title and 14px description follow; the price row has a top border and 12px inset before a 44px action.',
    hierarchy:
      'Read the bundle label, two items and shared name before the $64 bundle amount and $80 separate total. Keep the name under 4 words and description under 16.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The paired media stays two columns at both fixed widths. The price comparison wraps within its row if needed; the action remains full width.',
    usage:
      'Use when two complementary products form one offer. Pick a standard product card for a single item. Variations: show a starter pair, replace the separate total with a savings value, or use one image for an included accessory.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
