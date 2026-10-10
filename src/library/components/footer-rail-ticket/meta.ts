import type { ComponentMeta } from '../../types'

export default {
  "slug": "footer-rail-ticket",
  "name": "Rail ticket footer",
  "category": "footer",
  "tags": [
    "corporate",
    "minimal",
    "light"
  ],
  "description": "A regional rail footer with a ticket-shaped passenger-help panel and a simple route diagram. Use it on travel booking and passenger information sites.",
  "preview": {
    "kind": "section"
  },
  "fonts": [
    "IBM Plex Sans:wght@400..700"
  ],
  "brief": {
    "layout": "A full-width footer with a centred 1280px container, 48px vertical and 24px horizontal padding. A 1px bordered ticket holds a journey statement and passenger navigation. The route is a three-stop ordered list with a 2px blue-700 rail. Bottom policy row wraps with 20px gaps.",
    "style": "IBM Plex Sans, blue-950 on white. Blue-50 ticket stub, blue-200 dashed perforation and borders, 16px ticket radius. Brand is 24px bold; heading 36px medium with 1.1 line height and -0.03em tracking. Navigation is 15px; policy text 12px. No shadows.",
    "states": "Links underline on hover on devices that support hover. Every link has a 2px currentColor keyboard focus outline offset 4px, which remains visible in forced-colors mode. No animation.",
    "responsive": "Below 640px ticket padding is 24px and heading 36px. From 640px padding is 40px and heading 48px. From 768px ticket becomes a flexible journey column plus a 304px help stub, with the dashed seam moving to the left. From 1024px container side padding is 32px."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
