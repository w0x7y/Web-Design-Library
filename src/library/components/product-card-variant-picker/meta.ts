import type { ComponentMeta } from '../../types'

export default {
  slug: "product-card-variant-picker",
  name: "Product cards — Variant picker",
  category: "product-card",
  tags: ["stacked", "form", "media"],
  description: "A product card with colour swatches and size radios above a cart action. Use it when shoppers can choose variants without opening a detail page.",
  preview: { kind: "element" },
  wireframe: `┌────────────────────────────────────────────────────────┐
│ ┌────────────────────────────────────────────────────┐ │
│ │                       Image                        │ │
│ └────────────────────────────────────────────────────┘ │
│ Product name                                      $48  │
│ Colour       [White] [Light] [Mid] [Dark]              │
│ Size         [S]     [M]     [L]   [XL unavailable]    │
│ [                    Add to cart                    ]  │
└────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px-wide bordered card (w-72), 320px at 640px, with 16px padding (p-4) and an 8px radius. A 96px-tall media band precedes a name/price row by 12px. Two fieldsets have 12px top spacing, 12px legends and 8px legend-to-options gaps. Colour contains four 24px round swatches with 12px gaps; size contains four 36px-high rounded-full pills in equal columns with 8px gaps. A full-width 44px primary action follows after 16px.",
    hierarchy: "Read the image, 16px semibold name and 18px semibold price, then the Colour and Size legends, native radio choices and cart action. Visually hidden colour names are White, Light grey, Mid grey and Dark grey. Sizes are S, M, L and XL; M and Light grey start selected, and XL is disabled. Slots: name up to 3 words and price up to 6 characters. A short hint inside the Size legend identifies XL as unavailable and is linked with aria-describedby.",
    states: "Selected swatches have a 2px neutral-900 outline and 2px offset; a check glyph becomes visible so forced colors preserve selection. Selected size pills fill neutral-900, use white text and a 2px border for forced colors. Peer focus draws a 2px outline offset 2px on each visible option. Hidden inputs use focus-visible:outline-hidden to preserve native forced-colors focus. Unselected enabled size hover fills neutral-50; disabled XL uses neutral-100, neutral-600, a not-allowed cursor and strike-through. Cart hover changes to neutral-700 and has the standard focus outline.",
    responsive: "The width changes from 288px to 320px at 640px. Both fieldsets remain horizontal, media stays 96px tall and the action stays 44px tall.",
    usage: "Use for a compact product with a small fixed set of variants. Pick product-card-media-footer for products whose configuration needs a detail page. Variations: label the second fieldset with a different size scale, reduce colour options, or replace the media with a variant close-up.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

