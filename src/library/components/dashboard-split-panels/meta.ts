import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-split-panels',
  name: "Dashboard — Two panels, trend and list",
  category: 'dashboard',
  tags: ["split", "numbers", "list"],
  description: "Two equal panels pair a headline trend with a four-row operational list. Use it when the trend and current items deserve equal emphasis.",
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────┐
│Overview title             Date range       [Updated]   │
│──────────────────────────────────────────────────────  │
│┌──────────────────────────┬─────────────────────────┐  │
││ Metric label             │ List heading            │  │
││ Headline figure          │ Icon  Item / meta Value │  │
││                          │ Icon  Item / meta Badge │  │
││ Seven-bar trend          │ Icon  Item / meta Value │  │
││ Day labels               │ Icon  Item / meta Badge │  │
│└──────────────────────────┴─────────────────────────┘  │
│Footer meta                                [View report]│
└────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section with a centred container, 24px side padding (px-6), 64px vertical padding (py-16), and 96px from 640px (sm:py-24). A max-w-6xl (1152px) container has a wrapping header and bottom divider. Panels start 24px below, each with p-6, rounded-lg and a neutral-200 border. At 1024px they are equal columns with a 24px gap. The left has a label, 30px figure, 128px-tall seven-bar SVG and day-label row. Right has four icon-led rows with 16px vertical spacing and dividers. A divided footer strip follows by 24px.",
    hierarchy: "The page heading is 30px semibold, 36px from 640px; panel titles are 16px semibold, body and labels 14px, and metadata 12px or 14px. The headline figure is 30px, list names 14px medium, metadata 12px and trailing values 14px or outlined status badges. Title up to 5 words; metric label up to 3; row title up to 4 and meta up to 5. Day labels name all seven bars. Status badges use explicit wording and outlines.",
    states: "All links and buttons show a 2px neutral-900 focus-visible outline offset 2px. Primary actions hover to neutral-700, secondary actions to neutral-50, and underlined links to neutral-600. Transitions use the default 150ms timing. Updated and row status badges are static. There are no selected, disabled or expanded controls. The footer report link is the only action.",
    responsive: "Panels stack below 1024px and become equal columns from 1024px. Below 640px row values move below the item text while the 40px icon spans both lines; from 640px values align right. Header and footer wrap, preserving the section at 320px without page scrolling.",
    usage: "Use when one trend and a short list have equal importance. Pick dashboard-kpi-chart-list for four KPIs and a wider chart. Variations: show balance versus transactions, workload versus queue, or completion versus milestones.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
