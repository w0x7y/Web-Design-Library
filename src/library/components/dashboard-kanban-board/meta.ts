import type { ComponentMeta } from '../../types'

export default {
  slug: "dashboard-kanban-board",
  name: "Dashboard — Status-column work board",
  category: "dashboard",
  tags: [
    "grid",
    "list",
    "compact"
  ],
  description: "Three status columns group task cards with per-column creation links. Use to view work progression without a dense metrics dashboard.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Work overview                              [Add work item]    │
│To do (2)            In progress (1)     Done (1)             │
│Task title           Active task title   Completed task       │
│Alex Rivera          Sam Taylor          Alex Rivera          │
│[Open task]          [Open task]         [Open task]          │
│Work item title                                               │
│Jordan Lee                                                    │
│[Open task]                                                   │
│[Add task]           [Add task]          [Add task]           │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. Three equal md columns use 24px gaps, neutral-50 surfaces and 16px padding. Status/count headers precede 12px-separated white p-4 task cards. Each column ends in an underlined Add task link.",
    hierarchy: "The h1 names the work scope, then status headings and counts give structure. Task titles are 14px semibold and owners 12px muted. Each repeated action names its task or status column. H1 up to 5 words, lede 14 and task titles 5.",
    states: "All task and add links have visible 2px keyboard-focus outlines. Columns show status as text and counts. Cards are static; moving tasks, adding work and persisting workflow changes require application integration.",
    responsive: "Below 768px columns stack in workflow order rather than scrolling horizontally. Task copy wraps inside each card. The heading and section padding grow at sm.",
    usage: "Use for a small task board organized by workflow stage. Choose dashboard-tile-board for a uniform status grid. Variations: add a review column, include due dates in cards, or show one card per active owner."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
