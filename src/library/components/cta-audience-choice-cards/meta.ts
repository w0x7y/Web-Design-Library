import type { ComponentMeta } from '../../types'

export default {
  slug: "cta-audience-choice-cards",
  name: "Call to action — Audience choice cards",
  category: "cta",
  tags: [
    "split",
    "list",
    "spacious"
  ],
  description: "Two equal action cards separate routes for readers with different needs. Use it when the next step depends on readiness or the kind of help required.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│               Heading for choosing the next step             │
│ ┌─────────────────────────┐  ┌─────────────────────────┐     │
│ │ Audience ready to begin │  │ Audience needing help   │     │
│ │ Route explanation       │  │ Route explanation       │     │
│ │ + Condition             │  │ + Condition             │     │
│ │ + Condition             │  │ + Condition             │     │
│ │ [Start now]             │  │ [Talk to someone]       │     │
│ └─────────────────────────┘  └─────────────────────────┘     │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Two equal md:grid-cols-2 cards sit 48px below a centered introduction with a 24px gap. Cards have 24px padding, 32px from 640px, a title, paragraph, two check rows and a bottom-aligned action with 32px top separation.",
    "hierarchy": "Readers choose an audience card before its action. Keep heading below 10 words, audience title below 7, route copy below 24 and each condition below 8.",
    "states": "The 44px filled action changes from neutral-900 to neutral-700 on hover; outlined actions fill neutral-50. All controls show a 2px neutral-900 keyboard outline offset by 2px. ",
    "responsive": "Below 768px the cards stack in reading order. At 640px card padding grows to 32px. Actions remain aligned to the bottom within each card.",
    "usage": "Use for two distinct conversion routes. Choose centered actions for one route with a secondary destination. Variations include a self-service route or a request-for-help route."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
