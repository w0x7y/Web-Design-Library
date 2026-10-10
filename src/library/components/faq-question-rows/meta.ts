import type { ComponentMeta } from '../../types'

export default {
  slug: "faq-question-rows",
  name: "FAQ — Question and answer rows",
  category: "faq",
  tags: ["asymmetric", "list"],
  description: "Five full-width static rows place questions beside their answers. Use it when answers are long enough to need a dedicated reading column.",
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│ Heading for detailed answers                               │
│ Short introduction                                         │
│                                                            │
│ ┌──────────────────────┬───────────────────────────────┐   │
│ │ Starting question    │ Always-visible answer         │   │
│ │                      │ Supporting paragraph          │   │
│ ├──────────────────────┼───────────────────────────────┤   │
│ │ Inclusion question   │ Always-visible answer         │   │
│ ├──────────────────────┼───────────────────────────────┤   │
│ │ Choice question      │ Always-visible answer         │   │
│ ├──────────────────────┼───────────────────────────────┤   │
│ │ Access question      │ Always-visible answer         │   │
│ ├──────────────────────┼───────────────────────────────┤   │
│ │ Support question     │ Always-visible answer         │   │
│ └──────────────────────┴───────────────────────────────┘   │
│ Contact note / [Contact support]                           │
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section uses a 1152px max-w-6xl container, 24px px-6 side padding, and 64px py-16 vertical padding, rising to 96px sm:py-24 at 640px. A max-w-2xl intro precedes five static dl rows by 48px. Each row has a 1px top border and 32px py-8, with a bottom border on the final row. At 1024px rows use a 12-column grid and 32px gap; dt spans columns 1-5 and dd 6-12. Answer paragraphs use 16px gaps. A 14px contact line follows by 32px.",
    hierarchy: "The section heading is 30px text-3xl semibold with tracking-tight and balanced wrapping, rising to 36px text-4xl at 640px. Read each 18px semibold question across to its 16px neutral-600 answer. All answers are visible, and the first includes a supporting paragraph. Slots: heading 8 words, lede 24, question 10, each answer paragraph 35, contact note 16, link 3.",
    states: "Links turn from neutral-900 to neutral-600 on hover and show a 2px neutral-900 focus-visible outline offset 2px. All content is static; there are no selected, disabled or loading states.",
    responsive: "Below 1024px each answer sits 12px gap-3 below its question. From 1024px the 5/12 question and 7/12 answer sit beside one another with a 32px gap. Rows keep 32px vertical padding. Header type and section padding step at 640px.",
    usage: "Use for detailed explanations in an editorial list. Choose faq-qa-grid for short three-column blocks or faq-accordion for expandable answers. Variations: add a second paragraph to other answers, reduce to three rows, or add a topic eyebrow above each question.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
