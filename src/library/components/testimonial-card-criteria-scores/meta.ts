import type { ComponentMeta } from '../../types'

export default {
  slug: "testimonial-card-criteria-scores",
  name: "Testimonial cards — Criteria scores with quote",
  category: "testimonial-card",
  tags: [
    "list",
    "numbers",
    "compact"
  ],
  description: "A reviewer header leads three criterion scores and one explanatory quote. Use it when feedback covers several specific qualities.",
  preview: {
    "kind": "element"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Alex Rivera                              Verified reviewer   │
│ Ease of use                                          5 / 5   │
│ Useful results                                       4 / 5   │
│ Support quality                                      5 / 5   │
│ ──────────────────────────────────────────────────────────   │
│ Quote explaining the most important score                    │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-5 figure grows to 320px at 640px. Its reviewer header uses a space-between row, followed by three score rows after 20px with 12px gaps. A 14px quote sits below a rule with 20px margin and 16px top padding.",
    "hierarchy": "The reviewer identifies the source; three aligned scores supply the main evidence. Keep criteria below 3 words, verification below 2 and quote below 12.",
    "states": "All content is static; figures have no selected, disabled or loading state. ",
    "responsive": "The score rows retain their horizontal alignment at every width. Header metadata wraps if needed within the card.",
    "usage": "Use when multiple review criteria matter. Choose a star-review card for one overall rating and a longer review. Variations include two criteria or a different fixed rating scale."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
