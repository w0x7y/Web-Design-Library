import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-kpi-chart-list',
  name: "Dashboard — KPI row, chart and ranked list",
  category: 'dashboard',
  tags: ["asymmetric", "grid", "numbers"],
  description: "Four KPI cells above a wide chart and a narrow ranked list. Use it to compare period totals while keeping the largest contributors visible.",
  preview: { kind: 'section' },
  wireframe: `┌───────────────────────────────────────────────────────┐
│Overview title                       [Today] [7d] [30d]│
│Date range                                             │
│KPI             KPI             KPI             KPI    │
│┌──────────────────────────────────┬─────────────────┐ │
││ Chart title                      │ Ranked items    │ │
││ Summary figure                   │ 1 Name / value  │ │
││                                  │   ─────────     │ │
││ Bar trend with gridlines         │ 2 Name / value  │ │
││                                  │   ───────       │ │
││ Axis labels                      │ Five items      │ │
│└──────────────────────────────────┴─────────────────┘ │
└───────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section with a centred container, 24px side padding (px-6), 64px vertical padding (py-16), and 96px from 640px (sm:py-24). The container is max-w-7xl (1280px). A wrapping header has title/date and an outlined range-link group. A four-cell dl uses p-6 and 1px neutral-200 borders. The lower grid has 24px gaps and three equal columns at 1024px, with a p-6 chart spanning two and a p-6 ranked panel in one. Ranked rows use 20px spacing and 8px-high relative-width bars.",
    hierarchy: "The page heading is 30px semibold, 36px from 640px; panel titles are 16px semibold, body and labels 14px, and metadata 12px or 14px. KPI figures are 30px with explicit units and a 14px change row containing an arrow plus visible or hidden direction words. Keep title to 5 words, metric labels to 3, summary to 15 and ranked names to 4. The chart is decorative SVG bars with gridlines; axis labels and a hidden text summary communicate the illustrated period. Five list values remain visible as text.",
    states: "All links and buttons show a 2px neutral-900 focus-visible outline offset 2px. Primary actions hover to neutral-700, secondary actions to neutral-50, and underlined links to neutral-600. Transitions use the default 150ms timing. 7 days has aria-current=true and a neutral-900 fill with a forced-colors border. Other range links hover to neutral-50. Charts and rank bars are static placeholders; no disabled or expanded state.",
    responsive: "KPIs stack below 640px, use two columns from 640px and four from 1024px. Header controls wrap. Chart and ranked panels stack below 1024px; from 1024px the chart occupies two-thirds and list one-third. SVG scales within min-w-0 and labels remain in a separate wrapping row.",
    usage: "Use for overview metrics and ranked contributors. Pick dashboard-split-panels when two panels deserve equal width. Variations: change the range choices, rank by a different unit, or replace the bars with a line placeholder.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
