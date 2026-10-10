import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-tile-board',
  name: "Dashboard — Status tile board",
  category: 'dashboard',
  tags: ["stacked", "grid", "numbers", "compact"],
  description: "Twelve equal linked tiles encode active, idle and offline states with words and border treatments. Use it to scan many compact entities at once.",
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────┐
│Board title                               Updated time  │
│Active: 6       Idle: 3       Offline: 3       Total: 12│
│┌───────┬───────┬───────┬───────┬───────┬───────┐       │
││ID 01  │ID 02  │ID 03  │ID 04  │ID 05  │ID 06  │       │
││Name   │Name   │Name   │Name   │Name   │Name   │       │
││Active │Active │Idle   │Offline│Active │Idle   │       │
│├───────┼───────┼───────┼───────┼───────┼───────┤       │
││ID 07  │ID 08  │ID 09  │ID 10  │ID 11  │ID 12  │       │
││Name   │Name   │Name   │Name   │Name   │Name   │       │
││Active │Offline│Active │Idle   │Offline│Active │       │
│└───────┴───────┴───────┴───────┴───────┴───────┘       │
└────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section with a centred container, 24px side padding (px-6), 64px vertical padding (py-16), and 96px from 640px (sm:py-24). A max-w-7xl (1280px) container has a wrapping title/time header, a divided four-count legend with 24px top spacing, and a 12px-gap tile grid with equal fractional auto rows (auto-rows-fr), 24px below. Tile links fill their rows with h-full and have min-w-0, p-3, a 1px border and rounded-lg. Grid is three equal columns on mobile, four from 640px and six from 1024px. Active tiles use neutral-900 fill; idle solid neutral-300 borders; offline dashed borders.",
    hierarchy: "The page heading is 30px semibold, 36px from 640px; panel titles are 16px semibold, body and labels 14px, and metadata 12px or 14px. Read the title, explicit four-count summary and equal-weight tile list. Tile ID is 12px, name 14px semibold with break-words, and status 12px. Names up to 2 short words and IDs up to 6 characters. The legend shows 6 active, 3 idle, 3 offline and 12 total, matching the board.",
    states: "All twelve tiles are full-card links and show a 2px neutral-900 focus-visible outline offset 2px. On hover borders darken to neutral-600. Active tiles keep an outline in forced colors; idle and offline retain solid versus dashed borders and status wording. There are no selected, disabled or expanded states.",
    responsive: "The grid has three minmax(0,1fr) columns below 640px, four from 640px and six from 1024px. No tile has a minimum width, and names wrap to keep all three columns inside a 320px viewport. Header and summary counts wrap as needed.",
    usage: "Use for scanning status across a dozen entities. Pick dashboard-bento when modules have different sizes and content. Variations: use numbered stations, show a short last-update line, or change the status vocabulary while preserving fills and border styles.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
