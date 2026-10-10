import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-joined-trio',
  name: 'Stat cards — Three metrics in one panel',
  category: 'stat-card',
  tags: ["grid","numbers","compact"],
  description: "Three linked metrics share a panel, appearing as rows on mobile and equal columns on desktop. Use it for a related group of dashboard figures with one reporting period.",
  preview: { kind: 'element' },
  wireframe: `┌───────────────────────────────────────────────┐
│ Last 7 days                  Mar 08 - 14      │
├───────────────┬───────────────┬───────────────┤
│ [Metric one]  │ [Metric two]  │ [Metric 3]    │
│ 1,284         │ 742           │ 98%           │
│ [^ Up 4.1%]   │ [v Down 2%]   │ [^ Up 1pt]    │
└───────────────┴───────────────┴───────────────┘`,
  brief: {
    layout: "A 288px w-72 bordered panel with an 8px rounded-lg radius and clipped corners. At 768px md:w-[40rem] makes it 640px wide. The header has 24px side padding, 16px vertical padding and a space-between period/date row. Below, a three-item list has rows with 24px side and 16px vertical padding, each divided by a hairline. From 768px the list forms three equal columns with 24px p-6 cells and vertical dividers.",
    hierarchy: "The header is 14px medium with a 12px date range. Each metric has a 14px linked label above a 30px semibold tabular value; the value gap is 4px on mobile and 8px from 768px. An outlined 12px directional pill sits at the right on mobile and 16px below the value on desktop. Slots: labels up to 2 words, figures up to 6 characters, change text up to 3 words, date range up to 12 characters.",
    states: "Each label link has an absolute inset-0 after pseudo-element covering its cell. Hover fills that cell neutral-50 and changes the label to neutral-600. Each link shows a 2px neutral-900 focus-visible outline offset 2px. Deltas include arrow glyphs and Up or Down wording. There are no open, selected or disabled states.",
    responsive: "Below 768px, a 288px panel stacks three horizontal metric rows with the badge right of the figure column. At 768px, a 640px panel uses three equal columns, the badges move below the figures, padding grows to 24px, and horizontal dividers become vertical ones. The header stays a single row at both widths.",
    usage: "Use for three related metrics sharing one reporting period. Pick stat-card-icon-inline for independent compact cards or stat-card-breakdown-rows when three numbers are portions of one total. Variations: show a count, amount and rate; change the period to a month; or link each cell to its own report.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

