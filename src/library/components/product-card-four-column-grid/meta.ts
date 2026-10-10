import type { ComponentMeta } from '../../types'

export default {
  slug: "product-card-four-column-grid",
  name: "Product cards — Four-column product grid",
  category: "product-card",
  tags: ["grid", "media"],
  description: "Eight product tiles in a responsive two-to-four-column grid under a heading and catalogue link. Use it for a product collection with image, variant count and price.",
  preview: { kind: "section" },
  wireframe: `┌────────────────────────────────────────────────────────┐
│ Collection heading                           [Shop all]│
│ ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐│
│ │   Image   │ │   Image   │ │   Image   │ │   Image   ││
│ └───────────┘ └───────────┘ └───────────┘ └───────────┘│
│ Product name  Item title    Variant name  Short name   │
│ Meta / $48    Meta / $64    Meta / $32    Meta / $56   │
│                                                        │
│ ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐│
│ │   Image   │ │   Image   │ │   Image   │ │   Image   ││
│ └───────────┘ └───────────┘ └───────────┘ └───────────┘│
│ Option title  Item name     Product label Item heading │
│ Meta / $72    Meta / $40    Meta / $88    Meta / $24   │
└────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section with max-w-6xl (1152px), mx-auto, px-6 (24px sides) and py-16 (64px vertical), changing to 96px at 640px. The heading/link header has 16px gaps. After 32px, a role=list grid has eight relative tiles in two equal columns, 16px column gaps and 32px row gaps. At 1024px it uses four equal columns and 32px gaps. Each tile has a square 8px-radius media placeholder, a title after 12px, a meta line after 4px and a price after 8px.",
    hierarchy: "Read the 30px section heading, catalogue link and image-led tiles. Titles are 16px semibold, counts 14px neutral-500 and prices 14px medium neutral-900. Slots: section heading up to 6 words, product names up to 4, variant counts up to 3 words and prices up to 6 characters. Different names describe different title slots without adding brands.",
    states: "Each title link has an absolutely positioned ::after covering only its relative tile. Group hover underlines the title and changes the media fill from neutral-100 to neutral-200 over 150ms. Title links and Shop all show 2px neutral-900 keyboard-focus outlines offset 2px. There are no selected, open or disabled controls.",
    responsive: "Below 640px Shop all sits below the headline. From 640px the header shares one row, section padding grows to 96px and the heading grows from 30px to 36px. The grid stays two columns until 1024px, then changes to four with 32px column gaps. Square media scales with column width; text wraps without horizontal scrolling at 320px.",
    usage: "Use for a browsable collection of similarly sized products. Pick product-card-media-footer when every item needs a description and separate action. Variations: show four products instead of eight, use availability as meta, or replace price with a starting-price label.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

