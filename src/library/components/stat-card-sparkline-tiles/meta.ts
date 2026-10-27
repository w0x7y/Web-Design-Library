import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-sparkline-tiles',
  name: 'Stat cards — Sparkline tiles',
  category: 'stat-card',
  tags: ['grid', 'numbers', 'compact'],
  description: 'Four metric tiles each pair a figure and change badge with a full-width trend line, in a grid that steps from one to two to four columns. Use it for a dashboard band where the recent direction of each metric matters as much as its value.',
  preview: { kind: 'section' },
  wireframe: `┌─────────────────────────────────────────────────────────────┐
│ Last 30 days             Compared with the previous 30 days │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐ │
│ │ Activity   │ │ People     │ │ Completion │ │ Avg. time  │ │
│ │ 12,480 ^8% │ │ 2,418  ^6% │ │ 64.2% ^1.8 │ │ 3m 12s v4% │ │
│ │ _.-'-._.-' │ │ _._.-.-.-' │ │ -.-'-.-'-. │ │ '-._.-'-._ │ │
│ └────────────┘ └────────────┘ └────────────┘ └────────────┘ │
└─────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A white section with a 1152px max-w-6xl container, 24px px-6 side padding and 64px py-16 vertical padding. A header row places an 18px heading and a 14px comparison note at opposite ends, baseline-aligned with a 16px gap. The tile grid starts 24px below with 16px gap-4 gaps. Each tile is a card with a 1px neutral-200 border, an 8px rounded-lg radius and 24px p-6 padding: a label, a figure row 8px below with the figure left and a pill change badge right, then a full-width 40px h-10 trend line 16px below.',
    hierarchy: 'Read the period heading and comparison note, then each tile from label to figure, change and trend. The 30px semibold tabular figure is the strongest element; the 14px medium neutral-500 label sits above it. The 12px badge pairs an arrow with a visually hidden Up or Down word. The trend is a 1.5px neutral-900 line of 13 points with a short accessible name such as "30-day trend: rising". Slots: heading up to 4 words, note up to 8 words, label up to 3 words, figure up to 7 characters, change up to 6 characters.',
    states: 'The tiles are static, with no hover, focus, selected or disabled states. Direction is carried by the arrow and the hidden word, never by color. The trend line strokes with the current text color, so it stays visible when system colors replace the palette.',
    responsive: 'Below 640px the tiles stack in one full-width column. From 640px sm:grid-cols-2 gives two columns and vertical padding grows to 96px sm:py-24; from 1024px lg:grid-cols-4 puts all four in one row. The comparison note wraps under the heading when the header is narrow, and the badge wraps under the figure if a tile gets too tight. Trend lines stretch to the tile width at a fixed 40px height without thickening the stroke.',
    usage: 'Use for a band of three or four headline metrics where the direction over the period matters alongside the current value. Pick stat-card-bar-chart for one metric with labeled periods, or stat-card-joined-trio when no trend is needed. Variations: three tiles with lg:grid-cols-3, a dashed previous-period line behind each trend, or tiles that link to a report for each metric.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
