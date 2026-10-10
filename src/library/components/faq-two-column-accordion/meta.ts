import type { ComponentMeta } from '../../types'

export default {
  slug: "faq-two-column-accordion",
  name: "FAQ — Two-column accordion",
  category: "faq",
  tags: ["grid", "list", "compact"],
  description: "Eight independent questions form two separate accordion columns beneath an introduction and help note. Use it for a broad list with several answers open at once.",
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│ Heading / Introduction        ┌───────────────────────┐    │
│                               │ Help note / [Support] │    │
│                               └───────────────────────┘    │
│                                                            │
│ ┌─────────────────────────┐   ┌────────────────────────┐   │
│ │ Getting started      v  │   │ Managing access     v  │   │
│ ├─────────────────────────┤   ├────────────────────────┤   │
│ │ Included details     v  │   │ Changing settings   v  │   │
│ ├─────────────────────────┤   ├────────────────────────┤   │
│ │ Choosing an option   v  │   │ Finding records     v  │   │
│ ├─────────────────────────┤   ├────────────────────────┤   │
│ │ Timing question      v  │   │ Getting help        v  │   │
│ └─────────────────────────┘   └────────────────────────┘   │
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section uses a 1152px max-w-6xl container, 24px px-6 side padding, and 64px py-16 vertical padding, rising to 96px sm:py-24 at 640px. A header grid uses a 2:1 split and 48px gap at 1024px; the intro is max-w-2xl and the neutral-50 rounded-lg note card has a 1px border and p-6. Two independent four-item column lists follow by 48px with gap-16 64px from 768px. Each details row has a 1px bottom border, 20px summary and answer-bottom padding, a 20px chevron and 24px gap.",
    hierarchy: "The section heading is 30px text-3xl semibold with tracking-tight and balanced wrapping, rising to 36px text-4xl at 640px. Read the 18px intro and the note label, 14px sentence and support link, then eight 16px semibold questions. Answers are 16px neutral-600. Slots: heading 8 words, lede 24, note label 5, note 20, question 10, answer 35, link 3.",
    states: "Native details controls hide the default marker. Every summary shows a 2px neutral-900 focus-visible outline offset 2px. Every question is independent, has no shared name, and starts closed. The chevron rotates 180 degrees with a 150ms transition. Links turn from neutral-900 to neutral-600 on hover and show a 2px neutral-900 focus-visible outline offset 2px. There are no selected, disabled or loading states.",
    responsive: "Below 768px the four-item lists stack with a 32px gap. At 768px they sit side by side with 64px gap without coupling row heights. At 1024px the note moves beside the intro. Heading size and vertical padding step at 640px.",
    usage: "Use for eight questions readers may expand in any combination. Choose faq-sidebar-accordion for one open answer or faq-grouped-topics for labelled topic cards. Variations: add topic headings above columns, start one answer open, or reduce to six questions.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
