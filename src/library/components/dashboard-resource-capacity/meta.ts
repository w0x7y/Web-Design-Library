import type { ComponentMeta } from '../../types'

export default {
  slug: "dashboard-resource-capacity",
  name: "Dashboard — Resource allocation ledger",
  category: "dashboard",
  tags: [
    "stacked",
    "list",
    "numbers"
  ],
  description: "A weekly capacity summary leads to person-by-person allocation bars and remaining hours. Use when workload balance matters more than activity counts.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Capacity overview                           Week of 12 Oct    │
│Available hours         Allocated hours     Remaining hours   │
│120                     60                  60                │
│Member allocation                                             │
│AR Alex Rivera    [===============     ]          10h free    │
│JL Jordan Lee     [==========          ]          20h free    │
│ST Sam Taylor     [=====               ]          30h free    │
│[Open allocation planner]                                     │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A three-column sm summary band uses p-6 and 24px gaps. A member ledger follows after 32px; rows use 24px vertical padding and a 160px/flexible/auto grid at sm with 16px gaps. Allocation tracks are 12px tall.",
    hierarchy: "The h1 and week identify the scope. Summary figures are 30px tabular values, followed by names, allocated hours and remaining capacity. Names allow 24 characters, roles 3 words, headline 5 and lede 12.",
    states: "Allocation meters expose labelled values out of 40 hours and visible text equivalents. The planner link has a 2px focus outline. Assignments and date changes require application integration.",
    responsive: "Below 640px the summary and each member row stack. Allocation bars fill their available width; remaining hours stay as visible text. The header period wraps beside the title.",
    usage: "Use for a small capacity planning dashboard. Choose dashboard-kanban-board for the work itself. Variations: group members by team, show resource slots instead of hours, or include a utilization target."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
