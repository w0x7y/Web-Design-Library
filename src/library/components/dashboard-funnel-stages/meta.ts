import type { ComponentMeta } from '../../types'

export default {
  slug: "dashboard-funnel-stages",
  name: "Dashboard — Sequential conversion funnel",
  category: "dashboard",
  tags: [
    "grid",
    "numbers",
    "compact"
  ],
  description: "Four numbered stage cards show entry counts and retention, followed by a conversion summary. Use to inspect drop-off through a short process.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Process conversion                                            │
│01 Started    02 Qualified    03 Reviewed    04 Completed     │
│1,200         900             600            300              │
│100%          75%             50%            25%              │
│[==========]  [=======   ]    [=====     ]   [==        ]     │
│Overall completion                                   25%      │
│300 of 1,200 entries completed the process                    │
│[View stage records]                                          │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A stage grid begins 40px below the heading: two columns at sm and four at lg, with 24px gaps and p-6 cards. Each has a 30px count and 8px retention track. A wrapping summary band follows after 32px.",
    hierarchy: "The h1 sets context, stage numbers establish sequence, and 30px tabular counts dominate each card. Retention text reinforces every meter. Stage titles allow 2 words, h1 5, lede 18 and summary 12.",
    states: "Meters expose labelled numeric values and visible percentages; the static stage illustration has no interactive chart controls. The records link shows keyboard focus. Filtering and metric updates require host application integration.",
    responsive: "The funnel is a single vertical sequence under sm, two columns at sm and four at lg. Bars use proportional static widths within their cards. The summary band wraps at narrow widths.",
    usage: "Use for a short conversion or completion process. Choose a time-series chart dashboard for changes over time. Variations: show three stages, replace counts with revenue, or add per-stage change notes."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
