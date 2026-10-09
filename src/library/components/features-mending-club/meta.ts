import type { ComponentMeta } from '../../types'

export default {
  slug: "features-mending-club",
  name: "Mending club noticeboard",
  category: "features",
  tags: [
    "playful",
    "light"
  ],
  description: "A clothing-repair cooperative section with staggered workshop tickets and a shared toolkit list. Use it for hands-on memberships, local clubs and community workshops.",
  preview: {
    kind: "section"
  },
  fonts: [
    "Familjen Grotesk:wght@400..700"
  ],
  brief: {
    layout: "1280px container with 24px horizontal and 64px vertical padding. A 44px headline sits above two workshop tickets and a toolkit list. At 1024px the three columns use 1:1:0.8 widths with 24px gaps; the pink second ticket sits 64px lower.",
    style: "Familjen Grotesk on lime-50 with emerald-950 ink and emerald-900 body. Tickets have lime-200 and pink-200 fills, 2px emerald-950 borders, 12px corners and dashed 2px header rules. Ticket titles are 30px bold; body copy 16px; main title is bold at 1.05 line height.",
    states: "Workshop link underlines on hover and shows a 2px emerald-950 keyboard focus outline offset 4px. Toolkit check icons are decorative and accompany readable labels in a semantic list with role=list. No animation.",
    responsive: "All three pieces stack below 1024px. Main title becomes 64px at 640px and ticket padding becomes 32px. At 1024px the staggered three-column board appears, toolkit top padding becomes 24px and outer padding becomes 96px vertical and 32px horizontal."
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
