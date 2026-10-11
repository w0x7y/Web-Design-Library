import type { ComponentMeta } from '../../types'

export default {
  slug: "faq-grouped-topics",
  name: "FAQ — Grouped topic cards",
  category: "faq",
  tags: ["split", "list"],
  description: "Two topic cards each hold three independent expandable questions. Use it when a small FAQ naturally falls into two named groups.",
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│                    Eyebrow                                 │
│               Heading for questions                        │
│                                                            │
│ ┌─────────────────────────┐ ┌─────────────────────────┐    │
│ │ Topic label             │ │ Topic label             │    │
│ │ Getting started         │ │ Managing your choices   │    │
│ ├─────────────────────────┤ ├─────────────────────────┤    │
│ │ Starting question    v  │ │ Changing question    v  │    │
│ ├─────────────────────────┤ ├─────────────────────────┤    │
│ │ Included details     v  │ │ Access question      v  │    │
│ ├─────────────────────────┤ ├─────────────────────────┤    │
│ │ Choosing an option   v  │ │ Support question     v  │    │
│ └─────────────────────────┘ └─────────────────────────┘    │
│             Contact note / [Contact support]               │
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section uses a 1152px max-w-6xl container, 24px px-6 side padding, and 64px py-16 vertical padding, rising to 96px sm:py-24 at 640px. A centred max-w-2xl eyebrow and heading precede two topic cards by 48px. Cards use rounded-lg, 1px neutral-200 borders and p-6 24px with gap-6 24px. Each has a 14px topic label, 18px title 8px later and a top-bordered list 24px later. Three independent details rows per card use 20px summary/answer-bottom padding, 20px chevrons and 16px gaps. A centred contact line follows by 32px.",
    hierarchy: "The section heading is 30px text-3xl semibold with tracking-tight and balanced wrapping, rising to 36px text-4xl at 640px. Read the heading, two group titles and six 16px semibold questions grouped beneath them. Revealed answers are 14px neutral-600. Slots: eyebrow 4 words, heading 8, topic label 4, group title 6, question 9, answer 30, contact note 16, link 3.",
    states: "Native details controls hide the default marker. Every summary shows a 2px neutral-900 focus-visible outline offset 2px. All six questions are independent, unnamed and initially closed. Chevrons rotate 180 degrees with a 150ms transition. Links turn from neutral-900 to neutral-600 on hover and show a 2px neutral-900 focus-visible outline offset 2px. Cards have no selected, disabled or loading states.",
    responsive: "Cards stack below 768px and form equal md:grid-cols-2 columns from 768px. Card padding remains 24px; questions wrap while their 20px chevrons stay fixed. Heading size and vertical section padding step at 640px.",
    usage: "Use for two clear topic groups with three questions each. Choose faq-category-sidebar for more topics or faq-two-column-accordion for an ungrouped list. Variations: start one answer open, rename groups by audience, or add a help link inside each card.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
