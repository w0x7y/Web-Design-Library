import type { ComponentMeta } from '../../types'

export default {
  slug: "cta-schedule-options",
  name: "Call to action — Session time options",
  category: "cta",
  tags: [
    "centered",
    "form",
    "grid"
  ],
  description: "A centered invitation leads three radio choices and a confirmation action. Use it when readers need to select a session time before continuing.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│                  Heading for choosing a session              │
│                          Session details                     │
│ Choose a time                                                │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐  │
│ │ (x) Mar 14      │ │ ( ) Mar 15      │ │ ( ) Mar 16      │  │
│ │     10:00 AM    │ │     2:00 PM     │ │     11:30 AM    │  │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘  │
│ Local time zone hint                           [Continue]    │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. The centered max-w-2xl introduction precedes a max-w-3xl 768px form by 40px. A fieldset contains three sm:grid-cols-3 choices with 12px gaps and 16px padding. The hint and 44px submit action share a footer 24px below.",
    "hierarchy": "The heading explains the invitation before readers choose a date and time. Keep heading below 8 words, introduction below 20 and hint below 12. Each choice names both its date and time.",
    "states": "Native radio buttons expose one checked option and allow keyboard selection within the group. Inputs and submit show 2px focus outlines; the filled submit changes to neutral-700 on hover.",
    "responsive": "Below 640px choices stack and the hint sits above the submit action. From 640px choices and the form footer become rows.",
    "usage": "Use when a small fixed schedule determines the next step. Choose a contact form for open-ended requests. Variations include session formats or appointment durations instead of dates."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
