import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-stacked-distribution',
  name: 'Stat cards — Stacked distribution bar',
  category: 'stat-card',
  tags: ['stacked', 'numbers', 'list'],
  description: 'A total sits above one horizontal bar split into proportional segments, with a legend list of counts and percentages below. Use it to show how a single total divides into a few parts at a glance.',
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│ Total by category                 Oct 2026   │
│ 1,284 items                                  │
│ ┌─────────────────┬───────────┬──────┬────┐  │
│ │#################│===========│------│....│  │
│ └─────────────────┴───────────┴──────┴────┘  │
│ #  First category                 578   45%  │
│ =  Second category                385   30%  │
│ -  Third category                 193   15%  │
│ .  Other                          128   10%  │
│ ──────────────────────────────────────────   │
│ Shares round to the nearest whole percent    │
└──────────────────────────────────────────────┘`,
  brief: {
    layout: 'A 288px w-72 card, 320px sm:w-80 from 640px, with 24px p-6 padding, an 8px rounded-lg radius and a 1px neutral-200 border. The label and period share a space-between row, with the total 8px below. A 12px h-3 rounded-full bar follows after 20px, its four segments sized 45%, 30%, 15% and 10% and split by 2px white dividers. The legend list starts 16px below with 8px gaps; each row has a 10px dot, a name that fills the row, a count and a 40px right-aligned percentage. A divided note closes the card with 16px top margin and 12px top padding.',
    hierarchy: 'Read the 30px semibold tabular total and its 14px unit first, then the bar, then the legend in the same left-to-right order as the segments. Segments and dots step from neutral-900 through neutral-600 and neutral-400 to neutral-300, largest share first. Counts are 14px medium neutral-900; names are neutral-600 and percentages neutral-500. The bar is hidden from assistive technology because the list carries every value. Slots: label up to 4 words, period up to 3 words, total up to 7 characters, category names up to 3 words, four or five parts with the smallest grouped as Other, note one sentence up to 10 words.',
    states: 'The card is static, with no hover, focus, selected or disabled states. Parts are told apart by shade, by the white dividers and by matching order with the legend, and every count and percentage is written out. When system colors replace the palette, the bar and dots gain an outline so the dividers still mark each part.',
    responsive: 'Only the width changes: 288px below 640px and 320px from sm. Segment widths stay proportional to the bar at both sizes, and legend rows keep one line, with names taking the space left by the count and percentage.',
    usage: 'Use when one total splits into a handful of parts and the share of each matters more than change over time. Pick stat-card-breakdown-rows to give each part its own bar, or stat-card-ring-gauge for a single rate. Variations: storage or budget used against capacity with a remaining segment in neutral-100, two-column legend rows on a wider card, or a link to the full breakdown in the footer.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
