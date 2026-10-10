import type { ComponentMeta } from '../../types'

export default {
  slug: "product-card-overlay-actions",
  name: "Product cards — Image with overlaid badge and actions",
  category: "product-card",
  tags: ["layered", "media"],
  description: "A frameless product card with a sale badge, wishlist checkbox and cart action over its image. Use it when shoppers need quick actions directly in a grid.",
  preview: { kind: "element" },
  wireframe: `┌────────────────────────────────────────────────────────┐
│ ┌────────────────────────────────────────────────────┐ │
│ │ [Sale]                                  [Wishlist] │ │
│ │                       Image                        │ │
│ │                  [Add to cart]                     │ │
│ └────────────────────────────────────────────────────┘ │
│ Product name                         $48  (was $64)    │
│ Rating: four of five stars                     (128)   │
└────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px-wide frameless article (w-72), 320px from 640px, with a relative 4:3 media region, 8px radius and a 40px image glyph. The badge and 36px round wishlist control sit 12px from the top corners. A 44px primary action spans the media width minus two 12px insets at the bottom. A name-and-price row follows after 12px, then a rating row after 8px with five 16px stars.",
    hierarchy: "The image and Sale badge lead, followed by the 16px semibold product name and 14px prices. The $48 sale price has primary ink; the $64 comparison is muted and struck through. A stroke rating glyph group is labelled Rated 4 out of 5 and followed by (128). Slots: name up to 3 words, price up to 6 characters, review count up to 5 digits. The checkbox is named Save Product name to wishlist.",
    states: "The native wishlist checkbox toggles a currentColor heart fill and a 2px neutral-900 border on the round label, including in forced colors. Its visible label shows a peer-focus-visible 2px outline offset 2px; the hidden input keeps a forced-colors-compatible focus outline. On fine pointers the cart button starts transparent, becomes visible on group hover or focus within, and stays visible on coarse pointers. Cart hover changes neutral-900 to neutral-700, and keyboard focus shows the standard outline. Opacity and colour transitions take 150ms.",
    responsive: "The card is 288px wide below 640px and 320px from 640px; the 4:3 image grows with it. Overlay insets and controls keep their size. No regions change order. The compact name and price row persists at both widths.",
    usage: "Use for merchandise grids with immediate save and cart actions. Pick product-card-media-footer when descriptions and a details step matter more. Variations: omit the compare-at price for a regular item, replace the sale badge with availability, or show a different review count.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
