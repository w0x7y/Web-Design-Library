import type { ComponentMeta } from '../../types'

export default {
  slug: "features-comparison-panels",
  name: "Features — Before and after panels",
  category: "features",
  tags: ["split", "list", "icons"],
  description: "Two parallel panels compare a starting state and an improved state. Use it to make the change in a workflow easy to scan.",
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│                 Eyebrow / Heading                          │
│                 Short introduction                         │
│                                                            │
│ ┌─────────────────────────┐ ┌─────────────────────────┐    │
│ │ Before                  │ │ After                   │    │
│ │ Starting state title    │ │ Improved state title    │    │
│ │ x  Limitation row       │ │ Check  Benefit row      │    │
│ │ x  Friction row         │ │ Check  Workflow row     │    │
│ │ x  Constraint row       │ │ Check  Outcome row      │    │
│ │ x  Missing detail       │ │ Check  Assurance row    │    │
│ └─────────────────────────┘ └─────────────────────────┘    │
│                  [Explore the change]                      │
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section uses a 1152px max-w-6xl container, 24px px-6 side padding, and 64px py-16 vertical padding, rising to 96px sm:py-24 at 640px. A centred max-w-2xl intro precedes two equal panels by 48px with gap-6 24px. Both use rounded-lg, 1px borders and p-6 24px. Before uses neutral-50 and neutral-200 border; After uses white and neutral-900 border. Each holds a 14px label, an 18px title 12px later, and a four-item ul after 24px. Rows have 16px gaps and 20px icons beside text with 12px gaps. A centred link follows by 32px.",
    hierarchy: "The section heading is 30px text-3xl semibold with tracking-tight and balanced wrapping, rising to 36px text-4xl at 640px. Read the header then the Before and After labels, 18px semibold titles and paired 16px neutral-600 list rows. Cross and check icons reinforce the named states. Slots: eyebrow 4 words, heading 8, lede 24, panel title 7, row 10, link 3.",
    states: "Links turn from neutral-900 to neutral-600 on hover and show a 2px neutral-900 focus-visible outline offset 2px. Both panels are static. State labels and different stroke icons remain legible in forced colors. There are no selectable, disabled or loading controls.",
    responsive: "Panels stack below 768px and use equal md:grid-cols-2 columns from 768px. Lists keep their 20px icons and 12px gaps. The heading and vertical padding step at 640px.",
    usage: "Use for a clear before/after comparison of a workflow. Choose features-icon-grid for unrelated benefits. Variations: compare two approaches, add a brief summary under each panel, or reduce to three rows.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
