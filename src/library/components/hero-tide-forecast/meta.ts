import type { ComponentMeta } from '../../types'

export default {
  slug: "hero-tide-forecast",
  name: "Coastal tide forecast",
  category: "hero",
  tags: [
    "glass",
    "gradient",
    "dark"
  ],
  description: "A coastal forecast hero with a translucent tide panel, readable high-water details and a decorative wave field. Use it for marine planning and coastal information services.",
  preview: {
    kind: "section"
  },
  fonts: [
    "Space Grotesk:wght@400..700"
  ],
  brief: {
    layout: "A full-width section with a 1280px inner container padded 24px by 80px. Masthead above a 64px-gap grid with 1:1.2 columns from 1024px. Left has a 44px headline, 18px paragraph and forecast CTA. Right is a 24px-radius glass forecast panel with 24px padding, station/date header, 48px water-height value, a tide SVG and two-column facts. A decorative wave field sits behind the lower section.",
    style: "Space Grotesk, white text with cyan-100 details over a diagonal gradient in oklab from teal-950 through cyan-950 to slate-950. Headline is 44px at 1.1 leading and 500 weight, increasing to 64px at 640px. Panel is white at 10%, 1px white border at 30% and 24px backdrop blur. CTA is white at 20% with a 1px white-50% border. Cyan-200 tide curve has an accessible figure caption.",
    states: "Forecast link fills white at 30% on hover and shows a 2px white focus outline offset 4px. High-water status is conveyed through text and time, not colour. Background waves and tide SVG are decorative, with the data repeated as text. No animation.",
    responsive: "At 320px the columns stack, masthead wraps and panel remains fluid. At 640px headline becomes 64px. At 1024px copy and forecast sit in 1:1.2 columns. Water facts stay in two equal columns and chart labels distribute across the available width."
  },
  addedAt: "2026-10-10"
} satisfies ComponentMeta
