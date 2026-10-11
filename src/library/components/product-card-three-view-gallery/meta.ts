import type { ComponentMeta } from '../../types'

export default {
  slug: 'product-card-three-view-gallery',
  name: 'Product cards — Three-view gallery card',
  category: 'product-card',
  tags: ['asymmetric', 'media', 'compact'],
  description:
    'A large product image and two stacked thumbnails sit above an aligned name, price and action.',
  preview: {
    kind: 'element',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│┌────────────────────────────────────┐  ┌──────────────┐  │
││                                    │  │Image         │  │
││Image                               │  └──────────────┘  │
││                                    │                    │
││                                    │  ┌──────────────┐  │
│└────────────────────────────────────┘  │Image         │  │
│                                        └──────────────┘  │
│Product name                                        $48   │
│Short product description                                 │
│[                    View product                    ]    │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 288px card widens to 320px at 640px with 16px padding. A 3:1 gallery uses 8px gaps; the main media is 4:3 and the two supporting regions are square. A name-price row follows after 16px, then a 14px description and full-width 44px link.',
    hierarchy:
      'Read the primary image, product name and $48 price, then supporting views and description. Limit the name to 4 words and description to 12. Supporting image labels name their distinct angles.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The gallery keeps its 3:1 structure at both fixed widths. The product name wraps while the price stays aligned at the end; the action fills the card.',
    usage:
      'Use when multiple product angles help selection without a full carousel. Pick a single-image card for simple products. Variations: show packaging in a thumbnail, use a close-up detail, or replace one thumbnail with a video preview.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
