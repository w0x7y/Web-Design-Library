import type { ComponentMeta } from '../../types'

export default {
  "slug": "blog-card-flower-border",
  "name": "Flower-farm journal card",
  "category": "blog-card",
  "tags": [
    "minimal",
    "light",
    "has-image"
  ],
  "description": "A flower-farm article with an inset poppy photograph, vertical caption and compact grower byline. Use it for floristry journals and cultivation stories.",
  "preview": {
    "kind": "element"
  },
  "fonts": [
    "Manrope:wght@400..700"
  ],
  "brief": {
    "layout": "288px article with a 20px horizontal masthead inset, 16px masthead vertical padding and a two-column figure: flexible photo plus a 32px vertical caption rail. Photo is 112px tall. A 20px-padded body holds a linked headline, summary 8px below and a two-part byline 16px later.",
    "style": "Manrope on stone-50 with emerald-950 ink, square corners and no border or shadow. Masthead is 12px bold with a 9px stone-600 edition. Headline is 22px semibold, 28px leading and -0.03em tracking. Summary is 12px stone-600 with 20px leading; caption is 9px and byline 10px. Photo shows California poppies and has descriptive alt text.",
    "states": "Headline underlines on hover-capable devices, offset 4px. Keyboard focus adds a 2px emerald-950 outline offset 4px. No motion.",
    "responsive": "Fixed width is 288px below 640px and 320px from 640px. The photo fills its flexible column while the caption stays 32px wide. Other sizes remain unchanged."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
