import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-customer-retention',
  name: 'Customer retention breakdown',
  category: 'stat-card',
  tags: ['corporate', 'light'],
  description:
    'A retention card that separates customer cohorts and compares their rates. Use it in subscription analytics and customer success dashboards.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px retention article, 320px from 640px, with 20px padding. Small category and metric labels sit above a 36px percentage and delta pill. Two cohort rows include numeric percentages and 6px progress bars, followed by a ruled methodology note.',
    style:
      'Indigo-50 background, indigo-200 border and 12px corners. Indigo-950 primary text, indigo-700 team bar and indigo-400 individual bar. Numeric values use tabular figures and the white delta badge includes a direction arrow and explicit points.',
    states:
      'There are no controls, hover states or animations. Each progress visualization is decorative because its label and exact value are already visible in the definition list.',
    responsive:
      'The card is 288px below 640px and 320px from that breakpoint. Bars fill their available width and the methodology note wraps into short lines.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
