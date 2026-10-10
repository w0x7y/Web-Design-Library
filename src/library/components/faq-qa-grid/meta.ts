import type { ComponentMeta } from '../../types'

export default {
  slug: "faq-qa-grid",
  name: "FAQ — Open answer grid",
  category: "faq",
  tags: ["grid", "icons"],
  description: "Six always-visible answers form an icon-led three-column grid. Use it for short questions whose answers should remain available for scanning.",
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│ Eyebrow / Heading / Introduction                           │
│                                                            │
│ ─────────────────  ─────────────────  ─────────────────    │
│ Icon               Icon               Icon                 │
│ Starting question  Inclusion question Choice question      │
│ Visible answer     Visible answer     Visible answer       │
│                                                            │
│ ─────────────────  ─────────────────  ─────────────────    │
│ Icon               Icon               Icon                 │
│ Timing question    Access question    Support question     │
│ Visible answer     Visible answer     Visible answer       │
│                                                            │
│ ──────────────────────────────────────────────────────     │
│ Closing help sentence                    [Contact support] │
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section uses a 1152px max-w-6xl container, 24px px-6 side padding, and 64px py-16 vertical padding, rising to 96px sm:py-24 at 640px. A left max-w-2xl intro precedes a six-item ul by 48px. Items have a 1px top border, 24px top padding, a 40px rounded-md icon tile, a 16px question margin and 12px answer margin. The grid uses gap-x-12 48px and gap-y-10 40px. A closing row has a top border and 24px top padding, 48px below the grid, with a 16px flex gap.",
    hierarchy: "The section heading is 30px text-3xl semibold with tracking-tight and balanced wrapping, rising to 36px text-4xl at 640px. Read the heading then Q&A blocks in row order. Each 16px semibold question is directly above its 16px neutral-600 answer; all six answers stay visible. Slots: eyebrow 4 words, heading 8, lede 24, question 10, answer 40, closing sentence 18, support link 3.",
    states: "Links turn from neutral-900 to neutral-600 on hover and show a 2px neutral-900 focus-visible outline offset 2px. All content is static; there are no selected, disabled or loading states.",
    responsive: "One column below 640px, two sm:grid-cols-2 columns from 640px, and three lg:grid-cols-3 from 1024px. The closing sentence and link stack below 640px and form a justified row above. Header type and section padding step at 640px.",
    usage: "Use for concise answers readers should compare at a glance. Choose faq-question-rows for longer answers alongside questions, or faq-accordion to hide detail. Variations: use four blocks, remove icons, or add topic labels. Its repeated three-column blocks differ from the full-width question/answer rows.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
