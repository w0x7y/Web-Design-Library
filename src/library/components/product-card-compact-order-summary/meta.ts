import type { ComponentMeta } from '../../types'

export default {
  slug: 'product-card-compact-order-summary',
  name: 'Product cards — Compact product order summary',
  category: 'product-card',
  tags: ['stacked', 'media', 'numbers'],
  description:
    'A small product thumbnail and quantity lead a three-row order cost summary.',
  preview: {
    kind: 'element',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│┌────────────┐   ┌────────────────────────────────────┐   │
││Image       │   │Product name                        │   │
│└────────────┘   │Variant                             │   │
│                 │Quantity: 2                         │   │
│                 └────────────────────────────────────┘   │
│                                                          │
│2 items at $24                                      $48   │
│Shipping                                             $5   │
│Order total                                         $53   │
│[                    Review order                    ]    │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 288px card widens to 320px at 640px with 16px padding. A 64px thumbnail sits beside identity and quantity with a 12px gap. A definition list follows after 16px with a top border and 16px inset; cost rows have 12px spacing.',
    hierarchy:
      'The product identity and quantity lead before unit cost, shipping and total. Keep variant text under 5 words and cost labels under 5. Make quantity and unit price explicit.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The thumbnail remains 64px at both fixed widths. Product text and cost labels wrap in flexible areas; amounts align at the right and the action fills the card.',
    usage:
      'Use for a cart item or small order review. Pick a product browsing card before quantity is known. Variations: show a tax line, replace shipping with delivery timing, or use a single-item total.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
