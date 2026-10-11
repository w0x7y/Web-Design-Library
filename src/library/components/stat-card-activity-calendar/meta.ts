import type { ComponentMeta } from '../../types'

export default {
  slug: "stat-card-activity-calendar",
  name: "Stat cards — Activity calendar",
  category: "stat-card",
  tags: [
    "grid",
    "numbers",
    "compact"
  ],
  description: "A current count leads a four-week calendar heatmap and a text explanation. Use it to show activity frequency over a short period.",
  preview: {
    "kind": "element"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Activity this month                     Oct 2026             │
│ 24 active days                                               │
│ [#] [#] [#] [ ] [#] [#] [#]                                  │
│ [#] [#] [#] [#] [ ] [#] [#]                                  │
│ [#] [#] [ ] [#] [#] [#] [#]                                  │
│ [#] [#] [#] [#] [#] [ ] [#]                                  │
│ Each square is a day / Darker means more activity            │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. At 640px the root grows to 320px sm:w-80. It uses 24px padding. A 30px count and period share the top region; a seven-column grid follows after 20px with 4px gaps and square bordered cells. The explanatory caption is 16px below.",
    "hierarchy": "The count reads before the calendar shape and legend. Keep the metric label below 4 words, count unit below 3 and explanation below 16. The calendar has an accessible aggregate description.",
    "states": "All content is static; figures have no selected, disabled or loading state. A bordered cell remains visible when system colours replace its fill.",
    "responsive": "The seven-column grid stays intact at every width; flexible squares expand with the root at 640px. The root widens from 288px to 320px at that breakpoint.",
    "usage": "Use for regular activity or attendance over four weeks. Choose a monthly bar chart for longer periods. Variations include a three-week range or a count of completed days."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
