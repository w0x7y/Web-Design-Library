import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-budget-receipt',
  name: 'Budget planner hero',
  category: 'hero',
  tags: ['playful', 'light'],
  description:
    'A friendly personal finance hero beside a monthly budget receipt. Use it to introduce a budgeting service with a concrete savings example.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A centered 1152px grid with 24px horizontal padding, 64px vertical padding and 48px gaps. The left column has a pill, heading, 448px-wide description, two wrapping 48px-tall actions and a note. The right column contains a receipt up to 384px wide, a four-row budget definition list with 16px spacing and a savings total.',
    style:
      'Default sans, rose-50 background and rose-950 ink. Heading is 48px bold, line-height 1.25 and -0.025em tracking; description is 18px with 1.625 line-height and rose-800 ink. The primary pill is rose-700 with white text. Rose-100 receipt canvas has 32px corners; white receipt has a 2px rose-200 border and dashed separators, monospace amounts, a 36px savings total and a rose-100 badge.',
    states:
      'Primary link turns rose-800 on hover; secondary link underlines. Both show a 2px zinc-950 keyboard focus outline offset 2px, including forced colours. No transitions.',
    responsive:
      'Below 640px the receipt is unrotated, canvas and receipt each have 24px padding and heading is 48px. At 640px the heading becomes 60px, canvas padding becomes 48px and receipt padding 32px with -3deg rotation. At 1024px the layout becomes two equal columns and vertical padding becomes 96px. Actions wrap at every width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
