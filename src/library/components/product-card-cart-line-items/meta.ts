import type { ComponentMeta } from '../../types'

export default {
  slug: "product-card-cart-line-items",
  name: "Product cards — Cart line items with quantity",
  category: 'product-card',
  tags: ["list", "media", "form"],
  description: "A cart heading above a divided list of line items, each with a thumbnail, name, variant, stock note, quantity select, remove action and line price, followed by the subtotal and checkout actions. Use it for a cart page or the review step before checkout.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Shopping cart                                        3 items │
│ ──────────────────────────────────────────────────────────── │
│ ┌───────┐ Product name            [1 v] Remove        $48.00 │
│ │ Image │ Size M, light gray                                 │
│ └───────┘ In stock                                           │
│ ──────────────────────────────────────────────────────────── │
│ ┌───────┐ Accessory name          [2 v] Remove        $48.00 │
│ │ Image │ One size                               $24.00 each │
│ └───────┘ In stock                                           │
│ ──────────────────────────────────────────────────────────── │
│ ┌───────┐ Refill pack name        [1 v] Remove        $16.00 │
│ │ Image │ Pack of 3                                          │
│ └───────┘ Ships in 5 to 7 days                               │
│ ──────────────────────────────────────────────────────────── │
│ Subtotal                                             $112.00 │
│ Shipping and taxes are calculated at checkout.               │
│                              [Check out] [Continue shopping] │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A max-w-3xl container with 24px side padding and 64px vertical padding (96px from 640px). The heading and item count share a baseline row. The list starts 40px below with top and bottom borders and 1px neutral-200 dividers; each item has 24px vertical padding and an 80px thumbnail with a 16px gap. The item body is a grid with a 16px gap: details and a right-aligned price in two columns, with the quantity select and Remove button vertically centered on a second row. The quantity select is 80px wide and 40px tall, 16px from Remove. The subtotal row follows 32px below the list, a 14px note 4px below it and the actions 24px below that.",
    hierarchy: "Read the heading and item count, then each item's name, variant, stock note and line price before its quantity and Remove controls. The 16px semibold subtotal and the shipping note lead to Check out. Slots: item names up to 4 words, variant up to 4 words, stock note up to 5 words, prices up to 8 characters. An item with a quantity above one shows its unit price under the line price. Every quantity select and Remove button names its item in its label.",
    states: "Item names underline on hover and Remove turns neutral-600. Check out lightens to neutral-700 and Continue shopping fills neutral-50 on hover. Every link, select and button shows a 2px neutral-900 focus outline offset 2px. Updating totals after a quantity change or removal needs script.",
    responsive: "Below 640px the controls sit on their own row under the details and price, and the actions stack full width with Check out first. From 640px the thumbnail grows to 96px with a 24px gap, the item body becomes three top-aligned columns (details, controls, a 96px price) with a 24px column gap, and the actions sit side by side at the end of the row with Check out first.",
    usage: "Use on a cart page or a checkout review step where people change quantities. Pick product-card-compact-order-summary for a read-only summary of one item and its costs. Variations: replace the select with a quantity stepper, add Save for later beside Remove, or move the subtotal into a side panel on wide screens.",
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
