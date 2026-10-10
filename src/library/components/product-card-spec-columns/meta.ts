import type { ComponentMeta } from '../../types'

export default {
  slug: "product-card-spec-columns",
  name: "Product cards — Specs row with price footer",
  category: "product-card",
  tags: ["stacked", "numbers", "compact"],
  description: "A compact product card with a media band, three specification columns and a price/action footer. Use it for products whose format and quantities inform the purchase.",
  preview: { kind: "element" },
  wireframe: `┌────────────────────────────────────────────────────────┐
│ Category label                              [Digital]  │
│ ┌────────────────────────────────────────────────────┐ │
│ │                       Image                        │ │
│ └────────────────────────────────────────────────────┘ │
│ Product name                                           │
│ Short description of what is included                  │
│ ─────────────────┬────────────────┬─────────────────── │
│ 24-bit           │ 1.2 GB         │ 120                │
│ Format           │ Size           │ Files              │
│ ─────────────────┴────────────────┴─────────────────── │
│ $48                                              [Buy] │
└────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px-wide bordered card with p-4 (16px padding), an 8px radius and sm:w-80 (320px from 640px). The header pairs an eyebrow and badge. A 64px-high media band follows after 12px, then a title after 12px and description after 4px. A three-column definition list uses equal columns, 12px vertical padding, 1px top/bottom dividers and vertical cell dividers. A price/action footer follows after 12px; Buy is a 44px primary action.",
    hierarchy: "Read the category and Digital badge, image, 16px semibold name and 14px description, then the specs and 20px semibold price. Each spec gives its 14px semibold value above a 12px muted label: 24-bit Format, 1.2 GB Size and 120 Files. Slots: category up to 2 words, name up to 3, description up to 12, spec values up to 7 characters and labels up to 6. Buy has an item-specific accessible label.",
    states: "Buy changes from neutral-900 to neutral-700 on hover and shows the standard 2px keyboard-focus outline offset 2px. Badge, media and definition list are static; no open, selected or disabled controls are shown.",
    responsive: "The root is 288px below 640px and 320px from 640px. Media stays 64px tall. Specifications remain three columns; the footer stays one row and text wraps naturally.",
    usage: "Use for downloads or products that can be compared through three short specs. Pick product-card-horizontal-media for list views where space is limited. Variations: swap file count for duration, show a different format, or use availability in the badge.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

