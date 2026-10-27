import type { ComponentMeta } from '../../types'

export default {
  slug: "product-card-purchase-options",
  name: "Product cards — One-time or subscription purchase",
  category: 'product-card',
  tags: ["stacked", "form", "compact"],
  description: "A small product summary sits above two radio cards: one-time purchase, and subscribe and save with a delivery frequency select. A full-width cart action closes the card. Use it when a product can be bought once or on a schedule.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────┐
│ ┌─────┐ Product name                 │
│ │Image│ Pack size or variant         │
│ └─────┘                              │
│ Purchase option                      │
│ ┌──────────────────────────────────┐ │
│ │ ( ) One-time purchase     $24.00 │ │
│ └──────────────────────────────────┘ │
│ ┌──────────────────────────────────┐ │
│ │ (*) Subscribe and save    $21.60 │ │
│ │     Save 10%, cancel any time    │ │
│ │ Deliver every      [4 weeks  v]  │ │
│ └──────────────────────────────────┘ │
│ [           Add to cart            ] │
└──────────────────────────────────────┘`,
  brief: {
    layout: "A 288px bordered card (w-72), 320px from 640px, with 16px padding and an 8px radius. A 48px thumbnail sits beside the name and variant with a 12px gap. The form follows 16px below: a 14px legend, then 8px below two 6px-radius option cards, 8px apart, each with 12px padding and a 1px neutral-200 border. Each option row holds a 16px native radio, a flexible label and the price at the end, 12px apart. Inside the subscription card, a row 12px below puts the Deliver every label at the start and a 112px-wide, 40px-tall select at the end. A full-width 44px primary action ends the card 16px below.",
    hierarchy: "Read the product name and variant, the Purchase option legend, both options with their prices, then the action. The subscription option carries a 12px hint with the saving and terms, linked with aria-describedby. Slots: name up to 3 words, variant up to 4 words, option labels up to 3 words, hint up to 5 words, prices up to 7 characters. Subscribe and save starts selected with a 4 weeks frequency.",
    states: "The option card that holds the checked radio switches its border to neutral-900. The frequency row shows only while the subscription is selected and hides when One-time purchase is chosen. Radios use a neutral-900 accent. Radios, the select and the action show a 2px neutral-900 focus outline offset 2px, and the action lightens to neutral-700 on hover.",
    responsive: "The card is 288px wide below 640px and 320px from 640px. Every row stays horizontal; option labels and the hint wrap inside their flexible column.",
    usage: "Use for consumables, refills and other products people buy again. Pick product-card-variant-picker when the choice is a size or color rather than a purchase plan. Variations: add a third prepaid option, show the struck one-time price beside the subscription price, or offer the frequencies as radio pills instead of a select.",
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
