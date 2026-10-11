import type { ComponentMeta } from '../../types'

export default {
  slug: "stat-card-threshold-status",
  name: "Stat cards — Threshold status rail",
  category: "stat-card",
  tags: [
    "sidebar",
    "numbers",
    "compact"
  ],
  description: "A three-band status rail sits beside the current percentage and its allowed limits. Use it to summarize a metric with lower and upper thresholds.",
  preview: {
    "kind": "element"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌──────┐ Current capacity                                    │
│ │      │ 64%                                                 │
│ ├──────┤ Within operating range                              │
│ │ #### │ Lower limit            40%                          │
│ ├──────┤ Upper limit            80%                          │
│ │      │                                                     │
│ └──────┘                                                     │
│ ──────────────────────────────────────────────────────────   │
│ Keep the figure between the stated limits                    │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-6 root is a 40px/flexible two-column grid with a 20px gap. It grows to 320px at 640px. A decorative rail has three equal bordered bands; the main column holds a 36px value, explicit state label and two limit rows. A full-width note closes the card.",
    "hierarchy": "The figure and written state explain the status before exact limits. Keep label below 3 words, state below 4 and note below 10. The decorative rail adds no extra information.",
    "states": "All content is static; figures have no selected, disabled or loading state. The written state and bordered rail preserve the meaning in forced colours.",
    "responsive": "The rail and metric remain side by side at all widths. The footnote spans both columns; the root expands at 640px.",
    "usage": "Use for an operating interval with two boundaries. Choose a progress bar for a one-sided target. Variations include a count with bounds or a written above-range state."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
