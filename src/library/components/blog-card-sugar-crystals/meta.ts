import type { ComponentMeta } from '../../types'

export default {
  "slug": "blog-card-sugar-crystals",
  "name": "Confectionery crystal story card",
  "category": "blog-card",
  "tags": [
    "playful",
    "light"
  ],
  "description": "A confectionery science card with faceted candy illustrations, oversized type and a tilted experiment tab. Use it for specialist food journals and confectioner blogs.",
  "preview": {
    "kind": "element"
  },
  "fonts": [
    "Syne:wght@400..800"
  ],
  "brief": {
    "layout": "288px card with 20px padding and a two-part masthead. An 80px-high inline crystal illustration follows after 16px. Linked title follows after 16px, summary after 12px and a space-between footer after 16px. The experiment tab has 8px horizontal and 4px vertical padding.",
    "style": "Syne on pink-50 with fuchsia-950 ink and 2px border, 24px corners and no shadow. Artwork has outlined sky-200, pink-300 and yellow-200 crystals. Headline is 28px extra-bold with 1.05 leading and -0.04em tracking. Brand is 14px extra-bold at 1.05 leading; summary is 12px fuchsia-900 with 20px leading. Footer is 9px; sky-200 tab has 4px corners and -2deg rotation.",
    "states": "Headline underlines on hover with 4px underline offset. Keyboard focus shows a 2px fuchsia-950 outline offset 2px. Crystal artwork is decorative. Tab remains static without animation.",
    "responsive": "288px below 640px, 320px from 640px. Illustration fills the available width at a fixed 80px height; text wraps naturally and all other sizes stay fixed."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
