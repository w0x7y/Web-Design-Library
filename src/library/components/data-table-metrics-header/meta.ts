import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-metrics-header',
  name: 'Data table — Summary metrics above table',
  category: 'data-table',
  tags: ['stacked', 'numbers', 'table'],
  description:
    'Three summary figures above a numeric table with a totals row. Use when the overall result and the records behind it should be read together.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌───────────────────────────────────────────────────────────┐
│ Activity summary                            [View report] │
│ Description                                               │
│ ┌─────────────────┬─────────────────┬──────────────────┐  │
│ │ Total amount    │ Total units     │ Active records   │  │
│ │ $1,020          │ 51              │ 5                │  │
│ │ Change meta     │ Change meta     │ Change meta      │  │
│ └─────────────────┴─────────────────┴──────────────────┘  │
│ Name           Units       Completed     Pending  Amount  │
│ Item 001       12          10            2        $240    │
│ Item 002       8           6             2        $160    │
│ ... Five rows                                             │
│ ──────────────────────────────────────────────────────    │
│ Total          51          42            9        $1,020  │
│ Updated Mar 14                                            │
└───────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 1152px max-w-6xl shell with 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A header and text link precede a bordered rounded-lg three-stat box by 32px. Stat cells use 24px p-6 and divide horizontally below 640px or vertically from sm. A bordered focusable table follows by 32px; its five columns have a 672px min-w-[42rem] width, 16px horizontal padding, 12px header padding and 16px body padding. Five rows precede a ruled semibold tfoot total. The update meta follows after 16px.',
    hierarchy:
      'A 30px heading, 36px from 640px, and 16px description precede three 14px metric labels, 30px semibold tabular figures and 14px change notes. The table has Name, Units, Completed, Pending and Amount, with four right-aligned tabular numeric columns. Totals equal 51 units, 42 completed, 9 pending and $1,020. Slots: description 20 words, metric labels 3, change notes 9, row references 8 characters, update note 3 words.',
    states:
      'Table headers and status badges are static. Links underline and turn neutral-600 on hover. Focusable scroll regions and all enabled controls show 2px neutral-900 outlines offset 2px. No JavaScript filtering, sorting, pagination or persistence is included. View report is an underlined link. The labelled scroll region is keyboard focusable. Below 768px the first column is sticky left-0 with an opaque white background, including headers and the totals label, so row identities stay visible while scrolling. Metrics have no controls; there are no selected rows, expandable panels or disabled states.',
    responsive:
      'Below 640px the three stat cells stack and the header link follows the copy. From 640px stats are three equal columns with vertical dividers. Below 768px the table can scroll horizontally in its own region and the identity column stays pinned; at 768px sticky positioning becomes static. The section fits 320px without page scrolling.',
    usage:
      'Use when a few totals help interpret individual records. Pick data-table-toolbar-pagination for a longer paginated list or data-table-priority-columns for dense rankings. Variations: summarize invoice amounts, compare fulfilled and outstanding quantities, or add a fourth metric when the available width allows.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
