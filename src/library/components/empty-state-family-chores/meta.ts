import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-family-chores',
  name: 'A household chore board ready to fill',
  category: 'empty-state',
  tags: ['playful', 'light'],
  description:
    'Nestshift family-chores empty state arranges a blank checklist beside a household note. Use it when a family has not added any shared tasks.',
  preview: { kind: 'element' },
  fonts: ['Syne'],
  brief: {
    layout:
      '20px-padded asymmetric household note. Header, two blank 16px checklist boxes on a white sheet, a four-line side note, 20px heading, 12px description and 44px inline action.',
    style:
      'Syne bold headings with fuchsia-950 ink on pink-100. 2px borders, 40px top-right and bottom-left radii, square opposite corners. White checklist sheet with 16px padding and 16px row gaps; fuchsia-950 action. No shadow.',
    states:
      'The chore action underlines on hover and shows a 2px fuchsia-950 outline offset 4px on keyboard focus. The blank checklist illustration is aria-hidden. No animation.',
    responsive:
      'The root is 288px wide below 640px and 384px wide from 640px. All other sizes and spacing stay the same; text wraps to the available width. It fits within a 384px-tall element frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
