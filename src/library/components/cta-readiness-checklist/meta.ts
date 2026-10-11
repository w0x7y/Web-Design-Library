import type { ComponentMeta } from '../../types'

export default {
  slug: "cta-readiness-checklist",
  name: "Call to action — Readiness checklist close",
  category: "cta",
  tags: [
    "centered",
    "list",
    "icons"
  ],
  description: "A centered prerequisite checklist ends with one action beneath a divider. Use it when confirming readiness makes the next step easier.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│                   Heading for confirming readiness           │
│                         Short introduction                   │
│ ┌─────────────────────────────────────────────────────────┐  │
│ │ + First prerequisite     + Second prerequisite          │  │
│ │ + Third prerequisite     + Fourth prerequisite          │  │
│ ├─────────────────────────────────────────────────────────┤  │
│ │                   [Begin the next step]                 │  │
│ │                       Expectation note                  │  │
│ └─────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A max-w-3xl bordered panel sits 40px below the centered heading. It has 24px padding, 32px from 640px, and a two-column sm:grid-cols-2 checklist with 24px gaps. A centered action footer starts 32px later with a top rule and 24px top padding.",
    "hierarchy": "The invitation leads, then four static prerequisites and a single action. Limit heading to 7 words, lede to 20, each prerequisite to 10 and expectation note to 10.",
    "states": "The 44px filled action changes from neutral-900 to neutral-700 on hover; outlined actions fill neutral-50. All controls show a 2px neutral-900 keyboard outline offset by 2px. Checklist icons are decorative and do not represent editable checks.",
    "responsive": "Below 640px checklist items stack and panel padding is 24px. From 640px they become two columns with 32px panel padding.",
    "usage": "Use for a short readiness check before onboarding. Choose numbered steps when the reader needs a procedure. Variations include two prerequisites or a reassurance note beneath the action."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
