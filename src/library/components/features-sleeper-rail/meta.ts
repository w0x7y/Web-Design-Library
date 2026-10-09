import type { ComponentMeta } from '../../types'

export default {
  slug: "features-sleeper-rail",
  name: "Sleeper rail comforts",
  category: "features",
  tags: [
    "corporate",
    "dark"
  ],
  description: "A night train feature section with cabin amenities and a journey-ticket illustration. Use it to explain a sleeper service before booking.",
  preview: {
    kind: "section"
  },
  fonts: [
    "IBM Plex Sans:wght@400..700"
  ],
  brief: {
    layout: "1280px container, 24px horizontal and 64px vertical padding. Copy and a bordered ticket form a 1.1:1 split from 1024px, with 40px between them. Two amenity notes have 2px left borders. The ticket has a peach header, a three-column route, a cabin inset and a perforated footer.",
    style: "IBM Plex Sans on slate-950. Slate-50 headings, slate-300 body, orange-300 accents and an orange-200 ticket header. Title is 36px then 48px with 1.1 line height. Ticket has 12px corners and slate-600 borders; the cabin has 8px corners.",
    states: "The cabin link underlines on hover. Keyboard focus draws a 2px slate-50 outline offset 4px. The ticket is a static illustration with real text, not a control. No motion.",
    responsive: "Single column below 1024px. Amenity notes form two columns at 640px. Ticket city names grow from 24px to 36px and padding from 24px to 32px at 640px. Container padding becomes 96px vertical and 32px horizontal at 1024px."
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
