import type { ComponentMeta } from '../../types'

export default {
  slug: "signup-consent-checklist",
  name: "Sign-up — Consent checklist with account strip",
  category: "signup",
  tags: [
    "stacked",
    "list",
    "form"
  ],
  description: "A list of individually described agreements precedes a compact identity and registration band. Use when several consent decisions need space and clarity.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Review your account preferences                               │
│Agreements and preferences                                    │
│[ ] Accept terms of service         Required description      │
│[ ] Acknowledge privacy policy      Data-use description      │
│[ ] Receive updates                 Optional description      │
│Name                  Email                                   │
│[Alex Rivera       ]  [Email              ] [Create account]  │
│[Read full policies]                                          │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. Three agreement rows have 24px vertical padding, 12px input/copy gaps and horizontal separators. A p-6 neutral-50 identity band follows after 32px, with 1fr/1fr/auto columns at md.",
    hierarchy: "The h1 explains consent, then each 14px checkbox label and associated description is read before identity fields and submit. Headline up to 7 words, lede 16, row labels 5 and descriptions 12. Optional preference is named explicitly.",
    states: "Native checkboxes toggle independently and display keyboard focus. Required agreements must be checked before submitting; marketing remains optional. Policy links use underlined hover states. Add host application account creation and agreement recording.",
    responsive: "Under 768px the identity band becomes one column. Agreement descriptions wrap beneath their labels while inputs remain at the left. Title increases at sm.",
    usage: "Use when registration has several independently described agreements. Choose a short standard signup form for one required agreement. Variations: add a data residency agreement, remove optional marketing, or move policy links into each description."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
