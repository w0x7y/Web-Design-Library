import type { ComponentMeta } from '../../types'

export default {
  "slug": "footer-observatory-window",
  "name": "Observatory window footer",
  "category": "footer",
  "tags": [
    "glass",
    "gradient",
    "dark"
  ],
  "description": "A hilltop-observatory footer with a translucent night-sky panel and next-session booking details. Fits science venues and evening experiences.",
  "preview": {
    "kind": "section"
  },
  "fonts": [
    "DM Sans:wght@400..700"
  ],
  "brief": {
    "layout": "A full-width radial night-sky field with a centred 1280px container, 48px vertical and 24px side padding. Brand/coordinates row above a session window separated by 40px. The window has a headline region and viewing-session region, 40px gap, a 48px-minimum-height reservation pill and bottom visitor links.",
    "style": "DM Sans, cyan-50/cyan-100 foreground. Radial gradient in oklab at the top right uses #155e75, #083344 at 45%, #020617 at 100%. Window has 24px radius, white 5% fill, white 20% borders and 24px backdrop blur. 44px medium headline with 1.05 line height and -0.04em tracking, 32px session time, 15px body.",
    "states": "Text links underline on hover. Reservation pill fills cyan-100 and uses cyan-950 ink on hover. All links have a 2px currentColor keyboard focus outline offset 4px, visible in forced-colors mode. No animation.",
    "responsive": "Below 640px window padding is 24px and headline 44px. From 640px padding is 40px and headline 68px. From 768px window uses flexible/288px columns; the session divider becomes a left rule and 40px left padding. At 1024px outer side padding is 32px. Brand and visitor rows wrap."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
