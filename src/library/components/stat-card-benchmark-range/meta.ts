import type { ComponentMeta } from '../../types'

export default {
  slug: "stat-card-benchmark-range",
  name: "Stat cards — Benchmark range",
  category: "stat-card",
  tags: [
    "numbers",
    "compact"
  ],
  description: "A horizontal range shows the current figure and a separate benchmark marker above two comparison details. Use it when a reference point matters more than a completion target.",
  preview: {
    "kind": "element"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Metric against benchmark                                     │
│ 72 points                                                    │
│ ─────────────────────|────────────────────────               │
│ 0                  Benchmark 60                 100          │
│ ──────────────────────────────────────────────────────────   │
│ Benchmark                 Above benchmark                    │
│ 60 points                 12 points                          │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-6 root becomes 320px sm:w-80 at 640px. A 36px value precedes a bordered 12px range by 32px. Its fill reaches 72% and a 28px vertical marker sits at 60%. Endpoints appear 12px below; two detail columns start 20px later with a divided footer.",
    "hierarchy": "The current figure leads, then its position against a benchmark, then exact comparison values. Use a metric label below 5 words, unit below 2 and detail labels below 3. The range has an explicit accessible description.",
    "states": "All content is static; figures have no selected, disabled or loading state. The range has a border and the marker is a visible stroke. Numeric text provides the same comparison as the visual.",
    "responsive": "The range and two detail columns remain unchanged on mobile; only the root grows at 640px.",
    "usage": "Use for a score compared with a standard. Choose a progress-target card for completion toward a deadline. Variations include an average benchmark or a maximum allowed value."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
