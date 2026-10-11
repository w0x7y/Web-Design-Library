import type { ComponentMeta } from '../../types'

export default {
  slug: "testimonial-card-attribution-rail",
  name: "Testimonial cards — Attribution rail beside quote",
  category: "testimonial-card",
  tags: [
    "sidebar",
    "compact"
  ],
  description: "A narrow avatar and author rail sits beside a quote and interview link. Use it when author identity should stay visible alongside the statement.",
  preview: {
    "kind": "element"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ AR         | Quote describing one useful result              │
│ Alex       | and why it matters to the author.               │
│ Rivera     |                                                 │
│ Author role| [Read interview]                                │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. A 72px attribution rail and flexible quote column use a 20px gap and 20px padding. At 640px the root expands to 384px. The rail has a right rule, 16px padding-right, 40px avatar and stacked 12px author text. The interview link sits 20px below the quote.",
    "hierarchy": "Read the author alongside a 16px statement; the source action follows. Keep quote below 18 words, name below 3 and role below 2.",
    "states": "Links underline on hover and show a 2px neutral-900 keyboard outline offset by 2px. ",
    "responsive": "Both columns remain on mobile. The quote wraps in the flexible column and the short attribution prevents excessive card height.",
    "usage": "Use for a compact interview excerpt with explicit author identity. Choose a centered quote for a statement without a source action. Variations include a publication role or a date in the rail."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
