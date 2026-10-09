import type { ComponentMeta } from '../../types'

export default {
  slug: "hero-climbing-wall",
  name: "Climbing gym wall",
  category: "hero",
  tags: [
    "brutalist",
    "dark"
  ],
  description: "A climbing-gym hero pairing compact opening information with an oversized headline and a route-wall drawing. Use it for a gym, sports venue or trial-session offer.",
  preview: {
    kind: "section"
  },
  fonts: [
    "Archivo:wght@400..900"
  ],
  brief: {
    layout: "1280px container with 24px horizontal and 48px vertical padding. Top row contains gym name and opening hours. Main area uses a 48px gap, then 2:1 columns from 1024px. Headline, 18px paragraph and CTA sit left; a 4:5 route-wall SVG sits right. A 3px lime rule anchors a wrapping session information row.",
    style: "Zinc-950 background with lime-300 text and zinc-300 copy. Archivo 900 headline, uppercase, 56px at 0.9 line height and -0.05em tracking, stepping to 96px at 640px and 112px at 1024px. Square lime CTA has zinc-950 text. Route wall is a zinc-900 slab with lime and coral climbing holds.",
    states: "Trial-session link becomes white on hover and has a 2px lime-300 focus outline offset 4px. Route-wall drawing is decorative. No motion or scripted behavior.",
    responsive: "Below 1024px the wall stacks after the heading and CTA. Wall is 4:5 on mobile and 3:2 at 640px, then 4:5 again at 1024px. Headline is 56px on phones. Opening-hours and bottom facts wrap at narrow widths."
  },
  addedAt: "2026-10-10"
} satisfies ComponentMeta
