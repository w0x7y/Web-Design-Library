import type { ComponentMeta } from '../../types'

export default {
  slug: "features-icon-grid",
  name: "Features — Icon grid",
  category: "features",
  tags: ["centered", "grid", "icons"],
  description: "Centred introduction above six icon-led features in an equal-column grid. Use it when benefits have similar weight and need quick scanning.",
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│                   Eyebrow                                  │
│              Heading for key benefits                      │
│                  Short introduction                        │
│                                                            │
│   Icon               Icon               Icon               │
│   Benefit title      Capability title   Outcome title      │
│   Supporting body    Supporting body    Supporting body    │
│                                                            │
│   Icon               Icon               Icon               │
│   Detail title       Workflow title     Assurance title    │
│   Supporting body    Supporting body    Supporting body    │
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section uses a 1152px max-w-6xl container, 24px px-6 side padding, and 64px py-16 vertical padding, rising to 96px sm:py-24 at 640px. A centred max-w-2xl 672px intro precedes a six-item ul by 64px mt-16. The grid has 32px gap-x-8 and 48px gap-y-12. Each item has a 40px rounded-md icon tile, a 16px title margin, and an 8px body margin.",
    hierarchy: "The section heading is 30px text-3xl semibold with tracking-tight and balanced wrapping, rising to 36px text-4xl at 640px. Read the centred eyebrow, heading and 18px lede before the six features in row order. Titles are 16px semibold and bodies 16px neutral-600. Slots: eyebrow 4 words, heading 8, lede 24, feature title 6, body 30.",
    states: "All content is static; there are no selected, disabled or loading states.",
    responsive: "One column below 640px; two equal columns from 640px sm:grid-cols-2; three from 1024px lg:grid-cols-3. Icon and text alignment stays left in every item. Header type and section padding step at 640px.",
    usage: "Use for six equally important benefits. Choose features-media-list when one screenshot explains the list, or features-bento-grid for uneven emphasis. Variations: reduce to three items, group by capability, or add one text link below the grid.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
