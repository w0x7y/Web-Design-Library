import type { ComponentMeta } from '../../types'

export default {
  slug: "hero-bakery-club",
  name: "Bakery pickup club",
  category: "hero",
  tags: [
    "playful",
    "light"
  ],
  description: "A bakery membership hero with a loaf illustration and a weekly pickup invitation. Use it for local food subscriptions and cooperative shops.",
  preview: {
    kind: "section"
  },
  fonts: [
    "Bricolage Grotesque:wght@400..700"
  ],
  brief: {
    layout: "A 1280px container padded 24px by 64px. Small brand row, then a 40px-gap grid with a 1:1.25:1 proportion at 1024px. Left column contains headline and copy, middle is a 1:1 loaf SVG, and right is a cream pickup card with 24px padding, 32px corners and a 2px orange-950 border. Footer sits below at 40px.",
    style: "Bricolage Grotesque on orange-100 with orange-950 ink. Headline is 44px, 1.05 line height, bold and -0.025em tracking, increasing to 60px at 640px. Bread illustration sits in an orange-200 oval. Orange-700 CTA is pill-shaped, white text and 48px minimum height. No shadows.",
    states: "Join the bread club fills orange-800 on hover and shows a 2px orange-950 focus outline offset 4px. Decorative loaf SVG is hidden from assistive technology. No animation.",
    responsive: "All three columns stack below 1024px. SVG is full width capped at 384px and centred on mobile. Title grows at 640px. At 1024px illustration occupies the wider central column; pickup card stays vertically centred. Copy and footer wrap at 320px."
  },
  addedAt: "2026-10-10"
} satisfies ComponentMeta
