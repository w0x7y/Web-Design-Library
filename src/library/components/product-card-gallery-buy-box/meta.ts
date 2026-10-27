import type { ComponentMeta } from '../../types'

export default {
  slug: "product-card-gallery-buy-box",
  name: "Product cards — Gallery beside buy box",
  category: 'product-card',
  tags: ["split", "media", "form"],
  description: "A product image with four view thumbnails sits beside the name, rating, price, size and quantity fields, cart action and delivery notes. Use it as the first screen of a product detail page.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────┐  Category label              │
│ │                             │  Product name that says what │
│ │                             │  it is                       │
│ │                             │  **** 4.2 | 128 reviews      │
│ │            Image            │  $48  Taxes included         │
│ │                             │  Short product description   │
│ │                             │                              │
│ └─────────────────────────────┘  Size          Quantity      │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐  [Medium  v]   [1     ]      │
│ │Image│ │Image│ │Image│ │Image│                              │
│ └─────┘ └─────┘ └─────┘ └─────┘  [Add to cart      ] [Save]  │
│                                  ────────────────────────────│
│                                  Delivery note               │
│                                  Returns note                │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A max-w-6xl container with 24px side padding and 64px vertical padding (96px from 640px) splits into two equal top-aligned columns from 1024px with a 64px gap. The gallery is a 4:3 media placeholder with a row of four square thumbnail buttons 16px below and 16px apart. The buy box stacks a 14px eyebrow, the headline 12px below, a rating row 16px below, the price 24px below and a description 16px below. The form follows 32px below: a flexible size select beside a 96px quantity field with a 16px gap, then 24px below a full-width primary action beside a 44px square save button, 12px apart. Two delivery notes with 20px icons and 12px spacing close the column 32px below, after a top border and 24px padding.",
    hierarchy: "Read the main image, then the eyebrow, the 30px to 36px semibold product name, the stars with their numeric rating and review link, and the 24px semibold price with its tax note. The description, Size and Quantity fields lead to Add to cart. Slots: eyebrow up to 3 words, name up to 8 words, description up to 2 sentences, each delivery note up to 12 words. The first thumbnail is the current view, and the save button names the product in its label.",
    states: "The current thumbnail has a 2px neutral-900 border and aria-current; the others darken their border from neutral-200 to neutral-400 on hover. Add to cart lightens from neutral-900 to neutral-700 on hover, the save button fills neutral-50 and the review link turns neutral-600. Every thumbnail, field, link and button shows a 2px neutral-900 focus outline offset 2px. Swapping the main image when a thumbnail is chosen needs script.",
    responsive: "Below 1024px the buy box follows the gallery in one column with a 40px gap, and the thumbnails stay in four columns. The headline grows from 30px to 36px at 640px. Size and Quantity stay side by side at every width, and the rating row wraps when it runs out of room.",
    usage: "Use for the top of a product detail page. Pick product-card-variant-picker to choose options on a card in a grid, and product-card-three-view-gallery for a compact card with several views. Variations: swap the size select for swatch radios, move the thumbnails into a vertical rail beside the image, or add a details disclosure under the delivery notes.",
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
