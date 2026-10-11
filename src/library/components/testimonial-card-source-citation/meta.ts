import type { ComponentMeta } from '../../types'

export default {
  slug: "testimonial-card-source-citation",
  name: "Testimonial cards — Quote and source citation",
  category: "testimonial-card",
  tags: [
    "sidebar",
    "compact"
  ],
  description: "A slim numbered annotation rail aligns with a quote and a separate source block. Use it when the original interview or publication should be easy to trace.",
  preview: {
    "kind": "element"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ 01   Quote recording a useful observation                    │
│      in the author words                                     │
│      ─────────────────────────────────────────────────────   │
│ 02   Alex Rivera                                             │
│      Interview / Oct 10, 2026                                │
│      [Original source]                                       │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. A 32px annotation rail and flexible body use a 16px horizontal gap and 20px row gap with 20px padding. The quote occupies the first row and a top-bordered citation occupies the second. The root grows to 320px at 640px.",
    "hierarchy": "The 16px quote leads; the numbered source block contains author, publication/date and a cited link. Keep quote below 14 words, name below 3 and source label below 3.",
    "states": "Links underline on hover and show a 2px neutral-900 keyboard outline offset by 2px. The annotation numbers are decorative and do not create controls.",
    "responsive": "The annotation grid remains intact at every width. The citation wraps inside its flexible column.",
    "usage": "Use for attributed research or interview excerpts. Choose quote-and-author for a simple recommendation without source metadata. Variations include a report title or a transcript timestamp."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
