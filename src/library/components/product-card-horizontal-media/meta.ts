import type { ComponentMeta } from '../../types'

export default {
  slug: "product-card-horizontal-media",
  name: "Product cards — Horizontal with media column",
  category: "product-card",
  tags: ["asymmetric", "media", "compact"],
  description: "A compact product row with an image column beside product information and an add action. Use it in search results, recommendations or a list view.",
  preview: { kind: "element" },
  wireframe: `┌────────────────────────────────────────────────────────┐
│ ┌─────────────────┐  Product name                      │
│ │                 │  Variant summary                   │
│ │      Image      │  Rating 4.8 (128)                  │
│ │                 │                                    │
│ └─────────────────┘  $48                       [Add]   │
└────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A clipped 8px-radius bordered article, 288px wide (w-72), expanding to 448px (sm:w-[28rem]) at 640px. Its grid uses a 96px media column and a remaining flexible content column, changing the media to 160px at 640px. The media has at least 176px height and stretches the full row; its image glyph is 40px. The content is a min-w-0 flex column with 16px padding. A price-and-action row has a 12px top gap and mt-auto placement; the secondary Add action is 44px tall.",
    hierarchy: "Read the image and 16px semibold product name, then a 12px variant summary and rating. The 18px semibold price and 14px outlined Add action close the content column. Slots: name up to 3 words, variant up to 3 words, rating in numeric form, price up to 6 characters. Add has an item-specific accessible label.",
    states: "Add fills neutral-50 on hover and shows a 2px neutral-900 focus outline offset 2px. The image and rating text are static. No selected, open or disabled state is shown.",
    responsive: "Both columns persist at every width. Below 640px total width is 288px and media width 96px; from 640px total width is 448px and media width 160px. Text may wrap inside the flexible column; the price/action row stays horizontal.",
    usage: "Use for search results and short related-product lists. Pick product-card-media-footer for a tall card in a catalogue grid. Variations: use availability in the variant slot, replace rating with delivery timing, or show a price range.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
