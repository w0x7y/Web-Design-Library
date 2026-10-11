import type { ComponentMeta } from '../../types'

export default {
  slug: "faq-comparison-answers",
  name: "FAQ — Comparison answer table",
  category: "faq",
  tags: [
    "table",
    "compact"
  ],
  description: "Three questions are answered for two options in a comparison table. Use it when the same questions help readers choose between two routes.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Heading for comparing the answers                            │
│ Question             First option        Second option       │
│ ──────────────────────────────────────────────────────────   │
│ What is included?    Scope answer        Scope answer        │
│ Who can use it?      Access answer       Access answer       │
│ How can I change it? Change answer       Change answer       │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A full-width table starts 40px below the heading. Three equal columns hold a question and two answers. Rows have 24px vertical padding, 24px cell spacing and bottom rules; each answer is 14px body text.",
    "hierarchy": "Questions are 16px semibold row headers; option headings orient the two answer columns. Keep questions below 7 words, option names below 3 and answers below 30 per cell.",
    "states": "All content is static; figures have no selected, disabled or loading state. ",
    "responsive": "Below 768px rows stack into question and two labelled answers; desktop option headings hide and mobile labels appear. The table needs no horizontal scroll.",
    "usage": "Use when readers ask the same things about two alternatives. Choose static question rows for one common answer. Variations include billing options or access levels."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
