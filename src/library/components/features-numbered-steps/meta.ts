import type { ComponentMeta } from '../../types'

export default {
  slug: "features-numbered-steps",
  name: "Features — Numbered steps",
  category: "features",
  tags: ["grid", "numbers"],
  description: "Three numbered steps in equal columns lead to a full-width note and action. Use it to explain a short sequence with clear timing.",
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│ Eyebrow / Heading for the process                          │
│                                                            │
│ ─────────────────  ─────────────────  ─────────────────    │
│ (01)               (02)               (03)                 │
│ First step title   Next step title    Final step title     │
│ Step body          Step body          Step body            │
│ Day 1              Day 2              Day 3                │
│                                                            │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ Supporting note                    [Primary action]  │   │
│ └──────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section uses a 1152px max-w-6xl container, 24px px-6 side padding, and 64px py-16 vertical padding, rising to 96px sm:py-24 at 640px. A max-w-2xl intro precedes a three-item ol by 48px. Steps use gap-10 40px and equal columns from 768px. Each has a 1px top border, 24px top padding, a 40px bordered number circle, a 24px title margin, 8px body margin and 16px timing margin. A full-width rounded-lg neutral-50 note bar follows by 48px with p-6 24px and a 24px gap.",
    hierarchy: "The section heading is 30px text-3xl semibold with tracking-tight and balanced wrapping, rising to 36px text-4xl at 640px. Read the heading then the 01-03 sequence, 18px semibold step titles, 16px neutral-600 descriptions and 14px neutral-500 timing lines. The closing action follows the note. Slots: eyebrow 4 words, heading 8, step title 6, body 30, timing 4, note 20, action 3.",
    states: "The 44px primary action has a 6px radius, neutral-900 fill, white text and neutral-700 hover fill with a 150ms transition. Focus shows a 2px neutral-900 outline offset 2px. Steps are static; there are no selected, disabled or loading states.",
    responsive: "Steps stack with 40px gaps below 768px and use three equal md:grid-cols-3 columns above. The note and action stack below 640px and form a justified sm:flex-row at 640px. Type and section padding also step at 640px.",
    usage: "Use for a process with three sequential stages. Choose features-sidebar-list when each stage needs a longer explanation. Variations: change timing to duration, use four steps, or remove the note action for a purely explanatory section.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
