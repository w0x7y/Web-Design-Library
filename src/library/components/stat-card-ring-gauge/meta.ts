import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-ring-gauge',
  name: 'Stat cards — Ring gauge beside summary',
  category: 'stat-card',
  tags: ["split","numbers"],
  description: "A percentage ring and comparison sit side by side above two totals and a report link. Use it for a rate that needs both a quick visual and supporting counts.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│ Metric label                  [On track]     │
│ ┌──────────┐  Comparison summary             │
│ │   98%    │  ^ Up 2 points                  │
│ │   Ring   │  vs previous period             │
│ └──────────┘                                 │
│ ────────────────────────────────────────     │
│ 1,184                 26                     │
│ Passed                Failed                 │
│ [View report]                         >      │
└──────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px w-72 card, 320px sm:w-80 from 640px, with 24px p-6 padding, a 1px border and an 8px radius. A space-between header contains a title and status pill. The summary starts 12px below, with a 96px size-24 ring and a flexible text column separated by 16px. A divided footer starts 12px later with 8px top padding, a two-column definition list with a 16px gap, and a report link 8px below.",
    hierarchy: "The 24px semibold centred percentage leads. Two 24x24 SVG circles with r=10 and 1.5 strokes scale to 96px; pathLength=100 and dasharray=98 100 draw the neutral-900 arc on a neutral-200 track. The SVG is hidden from assistive technology and 98% remains text. Comparisons are 14px and 12px; totals are 18px semibold above 12px labels. Slots: title up to 3 words, status up to 2, comparison up to 3, totals up to 5 characters each.",
    states: "The report link changes to neutral-600 on hover and shows a 2px neutral-900 focus-visible outline offset 2px. The gauge is static. Up and its arrow show comparison direction; On track supplies a textual status. There are no open, selected or disabled states.",
    responsive: "The width changes from 288px to 320px at 640px. The 96px ring and comparison stay side by side at both widths; the comparison wraps in its min-w-0 column. Totals keep two equal columns and all type and spacing stay fixed.",
    usage: "Use for a completion or pass rate that needs the underlying counts. Pick stat-card-progress-target for a current count and goal, or stat-card-figure-delta for a figure without a gauge. Variations: show completion and remaining counts, use three comparison lines, or change the status wording with the rate.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

