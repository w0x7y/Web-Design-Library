import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-customer-retention',
  name: 'Customer retention breakdown',
  category: 'stat-card',
  tags: ['corporate', 'light'],
  description:
    'A retention card that compares retention rates for teams and individuals within a July cohort. Use it in subscription analytics and customer success dashboards.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px retention article, 320px from 640px, with 20px padding. Small category and metric labels sit above a 36px percentage and delta pill. Two customer-segment rows include numeric percentages and 6px progress bars, followed by a ruled methodology note.',
    style:
      'Indigo-50 background, indigo-200 border and 12px corners. Indigo-950 primary text, indigo-700 team bar and indigo-400 individual bar. The 10px category label is semibold with 0.16em uppercase tracking; the metric title is 14px semibold with 20px line height. The overall rate is 36px with 40px line height and -0.025em tracking, with a 20px percent sign. Numeric values use tabular figures. A white delta badge has 10px semibold indigo-800 text, 8px horizontal and 4px vertical padding; it sits 12px from the rate on the same baseline. The 12px segment rows have 16px line height, right-aligned semibold percentages and 16px between rows. Bars sit 8px below each label; the 11px methodology note has 20px line height and 12px top padding.',
    states:
      'There are no controls, hover states or animations. Each progress visualization is decorative because its label and exact value are already visible in the definition list. Each segment groups its term and definitions directly, including a hidden visual bar.',
    responsive:
      'The card is 288px below 640px and 320px from that breakpoint. Bars fill their available width and the methodology note wraps into short lines.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
