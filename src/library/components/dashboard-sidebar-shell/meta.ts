import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-sidebar-shell',
  name: "Dashboard — App shell with sidebar",
  category: 'dashboard',
  tags: ["sidebar", "grid", "numbers"],
  description: "A responsive app shell with sidebar navigation, search, four KPIs, a bar-chart placeholder and recent activity. Use it for a dashboard that needs persistent app navigation.",
  preview: { kind: 'section' },
  wireframe: `┌─────────────┬────────────────────────────────────────────┐
│ Logo        │ [Search]                     [Bell] Avatar │
│ Overview    ├────────────────────────────────────────────┤
│ Reports     │ Overview title             [New report]    │
│ Activity    │ Date range                                 │
│ Items       │ KPI       KPI       KPI       KPI          │
│ Members     │ ┌───────────────────────────────────────┐  │
│ Settings    │ │ Chart title / legend                  │  │
│             │ │ Twelve-bar trend                      │  │
│ Projects    │ └───────────────────────────────────────┘  │
│ Project A   │ Recent activity                            │
│ Project B   │ Item   Person   Status   Time              │
│ Project C   │ Five recent rows                           │
│             │                                            │
│ Avatar User │                                            │
└─────────────┴────────────────────────────────────────────┘`,
  brief: {
    layout: "A full-width white section. At 1024px a grid uses a 240px neutral-50 sidebar and minmax(0,1fr) main. Sidebar has 24px padding, six icon links, a three-link project group and a bottom-pinned avatar row. Main topbar has 24px padding and a bottom border. Its content uses max-w-7xl, px-6, py-16 and sm:py-24. Four p-6 rounded-lg KPI cards precede a p-6 chart and activity table with 24px gaps.",
    hierarchy: "The page heading is 30px semibold, 36px from 640px; panel titles are 16px semibold, body and labels 14px, and metadata 12px or 14px. KPIs use 30px figures. Sidebar labels are 14px with 20px icons; project labels up to 3 words. Page title up to 5 words, KPI labels up to 3, changes up to 5. Chart has twelve decorative SVG bars and a hidden summary. Five table rows pair role-based item names, visible people, status words and times. Search has a label and described hint; notification button has an accessible name.",
    states: "All links and buttons show a 2px neutral-900 focus-visible outline offset 2px. Primary actions hover to neutral-700, secondary actions to neutral-50, and underlined links to neutral-600. Transitions use the default 150ms timing. Overview has aria-current=page, white fill and an outline. Sidebar links hover to neutral-100. The search is editable natively. Chart, figures and table remain static; no JavaScript or disabled state.",
    responsive: "Below 1024px the sidebar becomes a top logo row and a horizontally scrolling navigation region with its own focus outline and accessible name; projects and user row hide. KPI cards are one column below 640px, two from 640px and four from 1024px. The activity table scrolls inside a named, keyboard-focusable region on narrow screens; the main column never causes page overflow.",
    usage: "Use for a dashboard with persistent navigation. Pick dashboard-kpi-chart-list for an embedded overview without an app shell. Variations: replace project links with teams, show an outlined active nav item, or use a compact activity list.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
