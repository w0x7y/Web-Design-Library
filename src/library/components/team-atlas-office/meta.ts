import type { ComponentMeta } from '../../types'

export default {
  slug: "team-atlas-office",
  name: "Cartography atlas office",
  category: "team",
  tags: ["minimal", "editorial", "light"],
  description: "Two atlas-style biographies for Contourline, a walking-map publisher, with compass letters and field-note links. Use it for place-led practices and specialist publishing teams.",
  preview: {"kind": "section"},
  fonts: ["Newsreader:wght@400..600"],
  brief: {
    layout: "1280px inner container, 24px side and 64px vertical padding. A 768px-wide introduction precedes two unequal atlas panels. Panels have 32px padding, a compass letter and coordinate on a ruled top line, followed by name, discipline, biography and field-note link.",
    style: "Stone-50 ground, stone-950 text, stone-100 and red-50 atlas panels, red-800 accents and stone-300 hairlines. Newsreader throughout. Heading is 36px, then 64px from 640px; compass letters 64px, names 32px, biographies 18px with 1.6 line height. Square corners and no shadows.",
    states: "Each field-note link is underlined, turns red-800 on hover and has a 2px currentColor keyboard outline offset 4px. Full names and roles remain readable text. No animation.",
    responsive: "At 640px side padding becomes 32px and headline 64px. At 1024px vertical padding becomes 96px and atlas panels use 1.2:1 columns. On smaller screens they stack with 16px gap; the compass and coordinate remain in one row at 320px.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
