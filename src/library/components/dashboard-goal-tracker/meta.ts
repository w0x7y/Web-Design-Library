import type { ComponentMeta } from '../../types'

export default {
  slug: "dashboard-goal-tracker",
  name: "Dashboard — Goal progress with review sidebar",
  category: "dashboard",
  tags: [
    "sidebar",
    "list",
    "numbers"
  ],
  description: "A goal ledger with owners and progress sits beside a review-period summary. Use to keep a few longer-term targets visible beside their next review.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Goal progress                                                 │
│Current goals                            Review period        │
│Goal title / Alex Rivera [On track]     Oct-Dec               │
│[===============     ] 75% [View goal]   Next: 1 Nov 2026     │
│Target title / Jordan Lee [Needs review] 3 goals              │
│[==========          ] 50% [View goal]   [Prepare review]     │
│Objective title / Sam Taylor [On track]                       │
│[=====               ] 25% [View goal]                        │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 2fr/1fr lg grid has 40px gaps. Goal rows use a wrapping title/status header, an 8px progress track after 20px and a percentage/action row after 12px. The neutral-50 review rail has p-6.",
    hierarchy: "The h1 leads to goal titles, owners and written status, then progress values and actions. The sidebar explains the period and next review. Goal titles allow 5 words, headline 5 and lede 12.",
    states: "Each progress meter exposes a name and value, reinforced by visible percentage text. Status uses text rather than color. All view/review links have visible focus; metric updates and review actions need host integration.",
    responsive: "Below 1024px the review panel follows the goal list. Status and action rows wrap while progress bars fill available width. Heading size increases at sm.",
    usage: "Use for a small set of longer-term objectives. Choose dashboard-resource-capacity for immediate workload planning. Variations: show milestone counts, add an owner avatar, or replace the sidebar with a review checklist."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
