import type { ComponentMeta } from '../../types'

export default {
  slug: "product-card-restock-alert",
  name: "Product cards — Sold-out item with restock alert",
  category: 'product-card',
  tags: ["stacked", "form", "media"],
  description: "A product card marked sold out replaces its cart action with an email field and a Notify me button. Use it when an item or size is out of stock and shoppers can ask to hear when it returns.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────┐
│ ┌──────────────────────────────────┐ │
│ │              Image               │ │
│ └──────────────────────────────────┘ │
│ Product name                     $48 │
│ (Sold out) Size M, light gray        │
│ ──────────────────────────────────── │
│ Email me when it is back             │
│ One email when this size returns     │
│ [Email address         ] [Notify me] │
└──────────────────────────────────────┘`,
  brief: {
    layout: "A 288px bordered card (w-72), 320px from 640px, with 16px padding and an 8px radius. A 96px-tall media placeholder leads, and the name and 18px price share a row 12px below. A Sold out badge and the variant follow 4px below with an 8px gap. The form starts 16px below after a top border and 16px padding: a 14px label, a 14px hint 4px below, then 12px below a row of a flexible 44px email field and a 44px primary button, 8px apart.",
    hierarchy: "Read the image, the name and price, the Sold out badge and variant, then the alert label, hint and email row. Slots: name up to 3 words, variant up to 4 words, label up to 6 words, hint up to 8 words. The hint is linked to the email field with aria-describedby.",
    states: "The email field and Notify me button show a 2px neutral-900 focus outline offset 2px, and the button lightens to neutral-700 on hover. The field is required and uses the email type, so the browser validates it. After a successful submission, replace the form with a short confirmation that repeats the email address.",
    responsive: "The card is 288px wide below 640px and 320px from 640px. The email row stays horizontal: the field shrinks and the button keeps its width.",
    usage: "Use on a product card or detail page when the chosen item or size is out of stock. Pick product-card-overlay-actions for an in-stock item with quick cart actions. Variations: add size radios so shoppers choose which size to watch, give an expected restock date in the hint, or link to similar items under the form.",
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
