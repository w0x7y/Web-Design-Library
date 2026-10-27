import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-grouped-headers',
  name: 'Data table — Grouped headers with frozen first column',
  category: 'data-table',
  tags: ['table', 'numbers', 'compact'],
  description:
    'A wide numeric table groups its month columns under quarter headers and keeps the record column pinned while the figures scroll sideways. Use for reports with more columns than a screen can show, such as monthly figures across a year.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Monthly volume by record                                     │
│ Lede                                                         │
│ ┌──────────────┬────────────┬────────────┬─────┬───────────┐ │
│ │              │     Q1     │     Q2     │ ... │           │ │
│ │ Record       ├────────────┼────────────┼─────┤     Total │ │
│ │              │ Jan Feb Mar│ Apr May Jun│ ... │           │ │
│ ├──────────────┼────────────┼────────────┼─────┼───────────┤ │
│ │ Record label │  45  61  39│  40  42  59│ ... │       584 │ │
│ │ ID 0012      │            │            │     │           │ │
│ │ Item label   │  46  57  47│  69  45  49│ ... │       626 │ │
│ │ ID 0027      │            │            │     │           │ │
│ │ Entry label  │  59  69  77│  60  58  70│ ... │       761 │ │
│ │ ID 0031      │            │            │     │           │ │
│ │ ... 6 rows   │            │            │     │           │ │
│ ├──────────────┼────────────┼────────────┼─────┼───────────┤ │
│ │ All records  │ 318 353 339│ 364 324 353│ ... │     4,083 │ │
│ └──────────────┴────────────┴────────────┴─────┴───────────┘ │
│ Units per month                               [Download CSV] │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 1152px max-w-6xl section with 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. The heading and a 672px max-w-2xl lede precede a rounded-lg bordered, keyboard-focusable scroll region by 32px. Inside, a full-width auto-layout table uses border-separate with zero spacing, so cell borders move with sticky cells. Two header rows sit on neutral-50: Record and Total span both rows, and Q1 to Q4 each span three month columns. The first column is 144px wide (192px from 640px), sticky at left-0 with an opaque fill and a neutral-200 right border. Cells use 12px vertical padding, 12px horizontal padding for months and 16px for the first and Total columns. A neutral-200 left border opens each quarter after the first and the Total column. A neutral-50 semibold footer row totals each month. A wrapping meta line and download link follow after 16px.',
    hierarchy:
      'The 30px heading, 36px from 640px, and a 20px lede explain the grouping and the pinned column. Quarter headers are centered over their months; month and Total headers are right-aligned like the figures. Each row header shows a 14px medium name over a 12px neutral-500 ID. Month figures are 14px neutral-600 tabular numerals, the Total column is medium neutral-900, and the footer row is semibold. Headers are real table headers scoped to columns, quarter groups and rows, so each figure is announced with its record, month and quarter. Slots: lede 20 words, record names 20 characters, IDs 8, month figures 3 digits, totals 5 characters.',
    states:
      'The scroll region is labelled and focusable, so keyboard users can focus it and scroll with the arrow keys; it shows a 2px neutral-900 focus-visible outline offset 2px. The record column stays pinned while the month columns pass beneath it. Download CSV is an underlined link that turns neutral-600 on hover and has the same focus outline. Headers and figures are static, with no sorting, selection or disabled states.',
    responsive:
      'The table keeps all 14 columns at every width. Below about 900px they no longer fit, so the region scrolls horizontally inside its own border while the page never scrolls sideways; the pinned first column narrows to 144px below 640px. From about 900px the whole year fits without scrolling. The download link wraps under the meta line at narrow widths. Section padding and heading size increase at 640px.',
    usage:
      'Use when every column matters and readers compare along a long run of columns, such as months, weeks or regions. Pick data-table-priority-columns when narrow screens should drop secondary columns instead of scrolling, or data-table-stacked-cards when each row should become a card. Variations: group weeks under months, show plan and actual under each quarter, or cap the region height and pin the header rows too.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
