import type { ComponentMeta } from '../../types'

export default {
  slug: 'product-card-expandable-specifications',
  name: 'Product cards — Thumbnail and expandable specifications',
  category: 'product-card',
  tags: ['stacked', 'media', 'compact'],
  description:
    'A thumbnail-led identity block reveals three specification rows through a native disclosure.',
  preview: {
    kind: 'element',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│┌────────────┐   ┌────────────────────────────────────┐   │
││Image       │   │Product name                        │   │
│└────────────┘   │$48                                 │   │
│                 └────────────────────────────────────┘   │
│                                                          │
│Specifications ^                                          │
│Format                                           24-bit   │
│Size                                             1.2 GB   │
│Files                                               120   │
│[                    View product                    ]    │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 288px card widens to 320px at 640px with 16px padding. A 64px thumbnail leads a horizontal identity row. The specification disclosure sits 16px below with top and bottom borders and 12px vertical padding; its definition-list rows use 8px gaps.',
    hierarchy:
      'Read the name and $48 price before the specification summary. Expanded content reveals format, size and file count, followed by a product link. Keep names under 4 words and specification values under 3.',
    states:
      'The native Specifications disclosure starts open and toggles independently. Its summary and the product link show a 2px keyboard outline. The filled link lightens on hover; specifications remain informational.',
    responsive:
      'The identity row remains horizontal at both fixed widths. Specification labels and values wrap inside the card; the action fills its width.',
    usage:
      'Use for technical products whose details can be secondary. Pick a visible spec-column card when comparison is the main task. Variations: start details closed, replace file facts with dimensions, or add a short compatibility row.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
