import type { ComponentMeta } from '../../types'

export default {
  slug: "footer-address-map",
  name: "Footer — Address beside a map",
  category: "footer",
  tags: [
    "asymmetric",
    "media",
    "spacious"
  ],
  description: "An identity and address sit beside a map placeholder and short page directory. Use it when finding a physical location is a useful final action.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Logo                    ┌─────────────────┐  Useful pages    │
│ Address line            │                 │  [About]         │
│ City / postal code      │      Image      │  [Contact]       │
│ Country / region        │                 │  [Accessibility] │
│ [Get directions]        └─────────────────┘  [Privacy]       │
│ [name@example.com]      Arrival note                         │
│ ──────────────────────────────────────────────────────────   │
│ Copyright                            Contact availability    │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. At 1024px a 1fr/1fr/192px grid uses 40px gap-10. The address column has identity, a semantic address 24px below and links after 20px. The 4:3 map has a note 12px below; the directory lists four links. A legal/availability bar starts 40px below.",
    "hierarchy": "Address and map are the main pair. Keep address to three lines, arrival note below 12 words, directory labels below 2 and availability below 8.",
    "states": "Links underline on hover and show a 2px neutral-900 keyboard outline offset by 2px. The map placeholder is static.",
    "responsive": "Below 1024px the three columns stack in identity, map and pages order. Legal and availability text wrap into separate lines when needed.",
    "usage": "Use for a location-oriented close. Choose contact-and-hours when weekly hours are the priority. Variations include a meeting-point image or an access-instructions caption."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
