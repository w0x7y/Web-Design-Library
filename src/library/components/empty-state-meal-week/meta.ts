import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-meal-week',
  name: 'An unplanned dinner week',
  category: 'empty-state',
  tags: ['playful', 'light'],
  description:
    'Weekdish meal-planner empty state shows blank dinner slots and a practical first-meal action. Use it at the start of a new weekly plan.',
  preview: { kind: 'element' },
  fonts: ['Bricolage Grotesque'],
  brief: {
    layout:
      '20px-padded panel with a brand header, five equal decorative day cells separated by 8px, a 24px heading, 14px explanation, full-width 44px action and 11px closing note.',
    style:
      'Bricolage Grotesque, yellow-50 ground, rose-900 ink, white day cells with rose-200 borders, 20px outer radius and 12px day-cell top corners. The action is rose-900 with yellow-50 text and 8px radius. No shadows.',
    states:
      'The dinner action underlines on hover and shows a 2px rose-900 outline offset 4px on keyboard focus. Decorative weekday cells are aria-hidden. No animation.',
    responsive:
      'The root is 288px wide below 640px and 384px wide from 640px. All other sizes and spacing stay the same; text wraps to the available width. It fits within a 384px-tall element frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
