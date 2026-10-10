import type { ComponentMeta } from '../../types'

export default {
  slug: "cta-numbered-steps",
  name: "Call to action — Steps checklist",
  category: "cta",
  tags: ["split", "list", "numbers"],
  description: "A next-step introduction beside a bordered three-step list. Use it when a short process makes the action easier to understand.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Eyebrow                         ┌──────────────────────────┐ │
│ Heading for the next step       │(1) First step title      │ │
│ Supporting lede                 │    Step explanation      │ │
│ [Primary] [Secondary]           │(2) Next step title       │ │
│                                 │    Step explanation      │ │
│                                 │(3) Final step title      │ │
│                                 │    Step explanation      │ │
│                                 └──────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 1152px max-w-6xl container has 24px horizontal padding and 64px vertical padding, increasing to 96px at 640px. At 768px two equal columns have 64px gap and center alignment. The intro has 16px to heading, 24px to lede and 32px to a wrapping action row with 12px gaps. A rounded-lg neutral-200 bordered white card has 24px padding. Its ordered list has 24px gaps; each row has a 32px neutral-100 number circle and text with a 16px gap.",
    hierarchy: "The section headline is 30px, increasing to 36px at 640px, semibold with tracking-tight and balanced wrapping. Read eyebrow, h2, 18px lede and actions, then three 16px semibold step titles with 14px neutral-600 explanations. Slots: eyebrow 5 words, heading 8, lede 25, actions 3, each step title 5, each explanation 18. The styled ol retains role=list.",
    states: "Actions are 44px tall with 20px horizontal padding and rounded-md 6px radii. Primary hover changes neutral-900 to neutral-700; secondary hover changes white to neutral-50. Colour transitions take 150ms. Every enabled control shows a 2px neutral-900 focus-visible outline offset 2px. The numbered circles and list are static. No completion state is shown.",
    responsive: "Below 768px the card follows the intro with a 48px gap. From 768px the two-column arrangement has a 64px gap. At 640px the heading increases to 36px and vertical padding to 96px. Action labels wrap and numbered circles keep their 32px size.",
    usage: "Use when the next action begins a short predictable process. Choose cta-detail-card when timing or price matters more than steps. Variations: use two steps, place completion criteria in the explanations, or link the secondary action to a longer guide.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
