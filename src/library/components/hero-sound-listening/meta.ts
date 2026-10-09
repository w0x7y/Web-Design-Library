import type { ComponentMeta } from '../../types'

export default {
  slug: "hero-sound-listening",
  name: "Listening equipment launch",
  category: "hero",
  tags: [
    "minimal",
    "dark",
    "has-image"
  ],
  description: "An audio-equipment hero with a product photograph, quiet typography and a short technical specification. Use it for a focused single-product launch.",
  preview: {
    kind: "section"
  },
  fonts: [
    "DM Sans:wght@400..600"
  ],
  brief: {
    layout: "A 1280px container padded 24px by 48px. Brand and edition row above a grid, 48px gaps, 1.5:1 columns from 1024px. Left contains 48px headline then a 3:2 product photo. Right is vertically aligned to the bottom with a model label, 32px heading, descriptive copy, two-column specs and full-width purchase action.",
    style: "DM Sans, neutral-950 background, white headline and neutral-300 body. Main headline is weight 400, 48px with 1.05 leading and -0.025em tracking, increasing to 72px at 640px. Photograph is warm yellow with no radius; 1px neutral-600 spec rules. White CTA with neutral-950 text, square corners. No shadows.",
    states: "Purchase link fills amber-200 on hover and has a 2px white focus outline offset 4px. Product photograph has descriptive alternative text and real 800x533 intrinsic size. Specifications use a dl. No animation.",
    responsive: "At 320px title, photo and product copy stack. At 640px title becomes 72px. At 1024px photo sits in the wider left column and the product details align to its lower edge. Specs remain two equal columns and action spans full width."
  },
  addedAt: "2026-10-10"
} satisfies ComponentMeta
