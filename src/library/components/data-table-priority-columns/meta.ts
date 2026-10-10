import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-priority-columns',
  name: 'Data table — Dense table with priority columns',
  category: 'data-table',
  tags: ['stacked', 'table', 'numbers', 'compact'],
  description:
    'A ranked numeric table with a sticky header and mobile column priorities. Use when the main figures must stay in a real table on narrow screens.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌───────────────────────────────────────────────────────────┐
│ Ranked records                       [Week] [Month] [All] │
│ 12 records                                                │
│ ┌──────────────────────────────────────────────────────┐  │
│ │ # Name          Points Count Total Rate Recent      │   │
│ ├──────────────────────────────────────────────────────┤  │
│ │ 1 Avatar Alex   98    24    1,284 96%  Done / Open    │ │
│ │ 2 Avatar Jordan 95    23    1,216 95%  Done / Hold    │ │
│ │ 3 Avatar Sam    92    22    1,148 94%  Open / Done    │ │
│ │ ... Twelve rows; header stays visible while scrolling│  │
│ └──────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 896px max-w-4xl shell with 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. The header places title and update meta beside segmented range links from 640px. A rounded-lg bordered focusable scroll region follows after 32px and is fixed at 384px h-96 high. The seven-column, twelve-row table uses 12px px-3 and 8px py-2 desktop cells, 14px text and 24px avatars. Its sticky top-0 header has z-10 and an opaque neutral-50 background. Below 768px fixed mobile widths are 36px Rank, 36px Points, 36px Count and 56px Total, leaving the remaining width for Name.',
    hierarchy:
      'A 30px heading, 36px at 640px, precedes 14px record count/update metadata. Week, Month and All are range links. Each row shows rank, avatar and name, right-aligned tabular Points, Count, Total and Rate, then five small neutral badges with Done, Open or Hold words. Mobile headers shorten Points and Count to Pts and Qty. Slots: names 24 characters, counts 2 digits, totals 5 characters, rates 3, status words 4 characters.',
    states:
      'Table headers and status badges are static. Links underline and turn neutral-600 on hover. Focusable scroll regions and all enabled controls show 2px neutral-900 outlines offset 2px. No JavaScript filtering, sorting, pagination or persistence is included. Week has aria-current=page and a neutral-900 fill and border; its hover fill is neutral-700. Idle range links fill white on hover. Rows fill neutral-50 on hover. The scroll region has visible keyboard focus and a sticky header while scrolling vertically. There are no selection, expansion or disabled states; range destinations are illustrative links.',
    responsive:
      'Below 768px Rate and Recent headers and cells hide and horizontal padding drops to 8px. The table switches from auto layout to fixed layout so its five retained columns fit 320px; names can wrap while the three retained numeric columns remain right-aligned. At 768px all seven columns return, including the five worded recent-status badges in a wrapping row. The 384px region scrolls vertically at every width. The page header stacks below 640px.',
    usage:
      'Use for dense rankings where the key numeric columns should remain comparable on mobile. Pick data-table-stacked-cards for complete identity profiles or data-table-metrics-header for aggregate totals. Variations: rank by usage, replace Rate with a percentage change, or prioritize different secondary metrics or statuses.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
