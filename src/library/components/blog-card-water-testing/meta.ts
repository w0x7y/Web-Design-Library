import type { ComponentMeta } from '../../types'

export default {
  "slug": "blog-card-water-testing",
  "name": "Water laboratory article card",
  "category": "blog-card",
  "tags": [
    "corporate",
    "light"
  ],
  "description": "A water-testing article with a company masthead, teal accent rail and inset contents note. Use it for laboratory publications and facilities-management resources.",
  "preview": {
    "kind": "element"
  },
  "fonts": [
    "IBM Plex Sans:wght@400..600"
  ],
  "brief": {
    "layout": "288px bordered article with 20px by 16px masthead padding. Body has a 4px left rail and 20px padding. Eyebrow, headline after 12px, summary after 8px, inset contents after 16px, byline after 16px. Contents uses 12px padding and a block label 4px above its copy.",
    "style": "IBM Plex Sans, white body and slate-50 masthead, cyan-950 headline, slate-600 supporting copy, slate-200 1px boundary and cyan-800 accent. 8px corners, 4px contents radius, no shadow. Headline 24px semibold at 28px leading and -0.02em tracking. Summary 12px at 20px leading; note 11px at 16px leading. Uppercase labels are 9px or 10px with 0.06em tracking.",
    "states": "Headline becomes cyan-800 on hover; focus shows a 2px cyan-800 outline offset 2px. The contents aside is labelled in text. No motion.",
    "responsive": "Width is 288px below 640px, 352px from 640px. Body remains one column with the same padding and typography."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
