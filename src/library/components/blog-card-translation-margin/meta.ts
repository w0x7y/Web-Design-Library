import type { ComponentMeta } from '../../types'

export default {
  "slug": "blog-card-translation-margin",
  "name": "Translation essay with margin note",
  "category": "blog-card",
  "tags": [
    "editorial",
    "light"
  ],
  "description": "A literary translation essay card with a large opening quotation, red margin note and ruled footnotes. Use it in a translation agency journal or language publication.",
  "preview": {
    "kind": "element"
  },
  "fonts": [
    "Newsreader:opsz,wght@6..72,400..600"
  ],
  "brief": {
    "layout": "288px card with 20px padding. A baseline masthead has a bottom hairline and 12px bottom padding. Opening quotation follows after 20px; its annotation follows after 12px. The title starts 20px later with a 2px left rule and 12px inset. Summary follows after 12px; a ruled footer follows after 20px with 12px top padding.",
    "style": "Newsreader throughout, neutral-50 paper and neutral-950 ink. Neutral-300 rules and red-800 annotations. Quotation is 24px with 1.1 leading and -0.02em tracking. Brand and heading are 18px semibold with 24px leading. Summary is 14px neutral-600 at 20px leading; category is 10px and footer 11px. Square corners, no shadow.",
    "states": "Linked title underlines on hover with 4px offset. Keyboard focus shows a 2px red-800 outline offset 2px. The annotation arrow is decorative. No motion.",
    "responsive": "288px below 640px, 352px from 640px. Copy wraps naturally in one column and typography remains the same."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
