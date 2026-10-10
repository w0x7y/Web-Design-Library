import type { ComponentMeta } from '../../types'

export default {
  "slug": "footer-refill-loop",
  "name": "Refill loop footer",
  "category": "footer",
  "tags": [
    "playful",
    "light"
  ],
  "description": "A refill-shop footer with a bottle illustration, return instructions and an offset deposit note. Use it for reuse-focused neighbourhood retail.",
  "preview": {
    "kind": "section"
  },
  "fonts": [
    "Bricolage Grotesque:wght@400..700"
  ],
  "brief": {
    "layout": "A 1280px centred container with 48px vertical and 24px side padding. Large brand statement beside a bottle-return panel and smaller offset deposit note. Panel has a 64 by 112px decorative bottle SVG, 24px internal gaps and 24px padding. Legal and shopping links wrap in the bottom rail.",
    "style": "Bricolage Grotesque, teal-950 on teal-50. Return panel reverses to teal-50 on teal-950 with pink-200 bottle and link. Deposit note uses pink-200 fill. Both panels have 32px radius; no shadows. Heading is 44px semibold, 1.05 line height and -0.04em tracking; 24px bold wordmark, 24px return heading.",
    "states": "Links underline on hover on devices that support hover. Every link has a 2px currentColor keyboard focus outline offset 4px, which remains visible in forced-colors mode. No animation.",
    "responsive": "Below 640px heading is 44px, return padding 24px and note flush left. At 640px heading is 60px, return padding 32px and note indents 40px. At 1024px primary regions form equal columns with a 64px gap and outer side padding grows to 32px."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
