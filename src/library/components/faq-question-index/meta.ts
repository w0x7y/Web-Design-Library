import type { ComponentMeta } from '../../types'

export default {
  slug: "faq-question-index",
  name: "FAQ — Question index over answers",
  category: "faq",
  tags: [
    "stacked",
    "list",
    "spacious"
  ],
  description: "A two-column anchor index sits above four always-visible answers. Use it for long-form answers that readers should be able to locate quickly.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Heading for finding a specific answer                        │
│ ┌─────────────────────────────────────────────────────────┐  │
│ │ [01. Getting started]        [02. What is included]     │  │
│ │ [03. Making changes]         [04. Finding help]         │  │
│ └─────────────────────────────────────────────────────────┘  │
│ 01 / How do I get started?                                   │
│ Full answer                                                  │
│ ──────────────────────────────────────────────────────────   │
│ 02 / What is included?                                       │
│ Full answer                                                  │
│ ──────────────────────────────────────────────────────────   │
│ 03 / How can I make changes? / Full answer                   │
│ 04 / Where can I get help? / Full answer                     │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A p-6 anchor panel starts 40px below the heading and uses two sm:grid-cols-2 columns with 16px gaps. Four answer articles start 48px below, separated by 32px. Each has a small answer number, 18px question, paragraph and bottom rule.",
    "hierarchy": "The index provides four short destinations. Each answer then reads as number, question and body. Keep index questions below 7 words, full questions below 10 and answers below 70.",
    "states": "Links underline on hover and show a 2px neutral-900 keyboard outline offset by 2px. Each index link scrolls to its corresponding answer; all answers stay visible.",
    "responsive": "Below 640px the anchor index stacks. Answers remain in one column with a max-w-3xl reading width at all sizes.",
    "usage": "Use when answers need paragraphs and stable anchor destinations. Choose an accordion for short answers. Variations include six index entries or an additional answer-source link."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
