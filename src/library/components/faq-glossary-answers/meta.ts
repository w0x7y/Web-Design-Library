import type { ComponentMeta } from '../../types'

export default {
  slug: "faq-glossary-answers",
  name: "FAQ — Glossary answer rows",
  category: "faq",
  tags: [
    "list",
    "sidebar",
    "compact"
  ],
  description: "Alphabet markers and term labels sit beside the questions they explain. Use it when unfamiliar terms cause repeated questions.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Heading for terms behind the questions                       │
│ ──────────────────────────────────────────────────────────   │
│ A   Access level       What does access level mean?          │
│                        Definition and practical context      │
│ ──────────────────────────────────────────────────────────   │
│ B   Billing period     What is a billing period?             │
│                        Definition and payment context        │
│ ──────────────────────────────────────────────────────────   │
│ C   Confirmation       What counts as confirmation?          │
│                        Definition and expected details       │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A definition list starts 40px below the heading. Rows have 24px vertical padding and 16px gaps. Desktop columns are 48px for an alphabet marker, 192px for a term and a flexible question/answer column. Each row has a bottom rule.",
    "hierarchy": "Read the large alphabet marker and semibold term before the question and its 14px definition. Keep terms below 3 words, questions below 8 and definitions below 40.",
    "states": "All content is static; figures have no selected, disabled or loading state. ",
    "responsive": "Below 768px each row stacks marker, term and question/answer. The reading order and definition association remain consistent.",
    "usage": "Use when readers need terminology explained in practical language. Choose a standard accordion for operational questions. Variations include acronym explanations or grouping several terms under one letter."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
