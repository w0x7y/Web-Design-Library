import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-bento',
  name: "Dashboard — Bento overview",
  category: 'dashboard',
  tags: ["bento", "numbers", "media"],
  description: "An unequal tile grid combines a large trend, two KPIs, activity, progress and an announcement. Use it for a mixed overview whose modules have different priorities.",
  preview: { kind: 'section' },
  wireframe: `┌───────────────────────────────────────────────────────┐
│Overview title                               [New item]│
│┌──────────────────────────┬───────────┬─────────────┐ │
││ Trend title              │ KPI       │ Activity    │ │
││ Figure                   ├───────────┤ Avatar row  │ │
││                          │ KPI       │ Avatar row  │ │
││ Line trend               │           │ Four rows   │ │
│├──────────────────────────┼───────────┴─────────────┤ │
││ Progress title           │ ┌───────┐ Announcement  │ │
││ Label   ─────────        │ │ Image │ Help line     │ │
││ Label   ─────            │ └───────┘ [Read more]   │ │
││ Label   ───────          │                         │ │
│└──────────────────────────┴─────────────────────────┘ │
└───────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section with a centred container, 24px side padding (px-6), 64px vertical padding (py-16), and 96px from 640px (sm:py-24). A max-w-7xl (1280px) container has a wrapping header and 24px-spaced grid. All tiles use rounded-lg, border-neutral-200 and p-6. At 1024px four columns use 160px minimum auto rows: chart spans two columns and two rows; two KPI tiles stack in column 3; activity spans column 4 and two rows; progress spans columns 1-2; media spans columns 3-4. Line SVG is 176px high; three progress tracks are 8px high.",
    hierarchy: "The page heading is 30px semibold, 36px from 640px; panel titles are 16px semibold, body and labels 14px, and metadata 12px or 14px. The chart figure is 36px, KPI figures 30px. Activity has four 40px avatars with visible names, 14px action copy and 12px time. Chart title up to 4 words; progress labels up to 3; announcement title up to 4 and supporting text up to 10. Progress exposes labels and numeric percentages. Media is a named illustration placeholder with a decorative glyph.",
    states: "All links and buttons show a 2px neutral-900 focus-visible outline offset 2px. Primary actions hover to neutral-700, secondary actions to neutral-50, and underlined links to neutral-600. Transitions use the default 150ms timing. Progress fills use forced-colors CanvasText, and tracks show a CanvasText outline in forced-colors mode. Chart, metrics and activity are static. There are no selected, open or disabled states.",
    responsive: "Below 640px all tiles stack. From 640px a two-column grid pairs KPI tiles while chart, activity, progress and media span both columns. From 1024px it becomes the four-column, three-row bento arrangement. The announcement stays stacked below 640px and uses a 128px media column from 640px. Rows may grow to fit copy.",
    usage: "Use for an overview with several kinds of content and unequal emphasis. Pick dashboard-tile-board for uniform status tiles. Variations: swap progress for goals, replace the announcement with a media summary, or use a weekly trend.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
