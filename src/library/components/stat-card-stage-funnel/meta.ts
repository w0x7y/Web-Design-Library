import type { ComponentMeta } from '../../types'

export default {
  slug: "stat-card-stage-funnel",
  name: "Stat cards — Stage funnel",
  category: "stat-card",
  tags: [
    "list",
    "numbers",
    "compact"
  ],
  description: "Three sequential stage totals descend beneath an overall conversion figure. Use it to expose where a process narrows.",
  preview: {
    "kind": "element"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Conversion through stages                                    │
│ 18.5% overall                                                │
│ Started                         1,284                        │
│ [==================================================]         │
│ Qualified                         642                        │
│ [========================]                                   │
│ Completed                         238                        │
│ [=========]                                                  │
│ Three stages in the same period                              │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The root uses 24px padding and becomes 320px sm:w-80 from 640px. A 30px conversion figure sits above three 16px-separated rows. Each has a labelled count and a 12px bordered track 8px below. The final note follows by 20px.",
    "hierarchy": "Read the overall conversion and the ordered stage sequence. Keep metric title below 4 words, stage labels below 2, counts below 7 characters and note below 10 words.",
    "states": "All content is static; figures have no selected, disabled or loading state. Labels and counts remain readable when forced colours remove relative fills.",
    "responsive": "The ordered rows and flexible tracks remain stacked at every width. The root expands at 640px.",
    "usage": "Use for a process with three ordered stages. Choose breakdown rows for independent parts of a total. Variations include an additional stage or a completion ratio per row."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
