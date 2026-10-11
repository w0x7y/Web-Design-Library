import type { ComponentMeta } from '../../types'

export default {
  slug: "faq-nested-topics",
  name: "FAQ — Nested topic disclosures",
  category: "faq",
  tags: [
    "stacked",
    "list",
    "compact"
  ],
  description: "Two outer topic disclosures each contain two independent question disclosures. Use it to keep both topics and their answers compact.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│                  Heading for exploring topics                │
│ ┌─────────────────────────────────────────────────────────┐  │
│ │ [Getting started v]                                     │  │
│ │   [How do I get started? v]                             │  │
│ │     Answer when opened                                  │  │
│ │   [What is included? v]                                 │  │
│ ├─────────────────────────────────────────────────────────┤  │
│ │ [Making changes v]                                      │  │
│ │   [How can I make changes? v]                           │  │
│ │   [Where can I get help? v]                             │  │
│ └─────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A max-w-3xl centered topic list begins 40px below the heading. Outer summaries have 24px vertical padding and stacked title/caption text. Their inner questions sit in a p-x-6 neutral-50 panel with 20px summary padding and bottom rules.",
    "hierarchy": "First scan two 18px topic titles and their 14px captions, then individual 16px questions. Keep titles below 4 words, captions below 8, questions below 9 and answers below 50.",
    "states": "Native outer and inner details open independently. Each level rotates only its own chevron, and all summaries show 2px focus outlines. Closing a topic retains the nested disclosure state.",
    "responsive": "The centered list remains stacked at every width. Side padding and natural wrapping keep both disclosure levels within narrow screens.",
    "usage": "Use when the FAQ needs two levels of navigation. Choose grouped topic cards when all questions should stay visible. Variations include three topics or one initially open outer group."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
