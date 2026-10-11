import type { ComponentMeta } from '../../types'

export default {
  slug: "product-card-media-footer",
  name: "Product cards — Image with price footer",
  category: "product-card",
  tags: ["stacked", "media"],
  description: "A full-width product image above a short description and a separate price-and-link footer. Use it for product cards where the next step is viewing details.",
  preview: { kind: "element" },
  wireframe: `┌────────────────────────────────────────────────────────┐
│ ┌────────────────────────────────────────────────────┐ │
│ │                       Image                        │ │
│ └────────────────────────────────────────────────────┘ │
│ Category label                                         │
│ Product name                                           │
│ Short description of the main benefit                  │
│ ────────────────────────────────────────────────────── │
│ $48                                   [View details >] │
└────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px card (w-72), 320px from 640px (sm:w-80), with a 1px neutral-200 border, 8px radius and clipped edges. The full-width media is 160px tall (h-40). The body uses 16px padding (p-4), an eyebrow, a title 4px below it and a description 8px below the title. A separate footer uses a 1px top divider, 16px horizontal and 12px vertical padding; price and link share one row with a 12px gap.",
    hierarchy: "Read the image, category, 16px semibold product name, then the 14px two-line description. The footer gives the 18px semibold price and a 14px underlined View details link with a 16px arrow. Slots: category up to 3 words, name up to 4 words, description up to 12 words, price up to 6 characters.",
    states: "The details link changes from neutral-900 to neutral-600 on hover and shows a 2px neutral-900 keyboard-focus outline offset 2px. The arrow and image are decorative and static. There are no open, selected or disabled controls.",
    responsive: "Below 640px the width is 288px; at 640px it becomes 320px. Image height, padding and type stay unchanged. The description wraps naturally; the footer stays one row.",
    usage: "Use for a small catalogue card with enough copy to explain a product. Pick product-card-overlay-actions for immediate cart and wishlist actions. Variations: replace the category with a collection label, display a price range, or use availability text in the description.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
