import type { ComponentMeta } from '../../types'

export default {
  slug: "hero-rail-route",
  name: "Rail route planner",
  category: "hero",
  tags: [
    "corporate",
    "light",
    "has-image"
  ],
  description: "A regional rail hero with a scenic route strip, labelled journey controls and clear fare information. Use it for a transport operator or route launch.",
  preview: {
    kind: "section"
  },
  fonts: [
    "Manrope:wght@400..700"
  ],
  brief: {
    layout: "A 1280px container with 24px side padding and 48px vertical padding. Brand row above a two-column introduction, followed by a 176px scenic strip with a dark-blue route diagram inset 24px. Booking form is a bordered three-column row with 24px padding; controls are 48px tall.",
    style: "Manrope, white and blue-950 with blue-700 accents. Headline is 40px, 1.1 leading, 600 weight and -0.025em tracking; 60px from 640px. Diagram uses blue-950 fill, a list of white 12px station names increasing to 14px at 640px, cyan-300 line and white station circles. Square white controls have 1px blue-500 borders for contrast, and the blue-700 submit button has an 8px radius.",
    states: "Book journey fills blue-800 on hover. All inputs, select and button have 2px blue-950 focus outlines offset 4px. The departure and travel-day selects have visible labels; station controls have explicit labels. No animation.",
    responsive: "At 320px, introduction and form stack with 24px gaps. At 640px title becomes 60px. At 768px the introduction becomes 2:1 columns and the form three equal columns. Route is a fluid SVG. Container remains at most 1280px."
  },
  addedAt: "2026-10-10"
} satisfies ComponentMeta
