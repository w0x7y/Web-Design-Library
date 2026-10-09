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
      'A 1152px split layout has a pill label, 60px heading, paragraph and two actions on the left, and a rotated receipt card on a rose-100 canvas on the right. Receipt contains income, three spending categories and a savings total.',
    style:
      'Rose-50 background, rose-950 text, rose-700 buttons and white receipt. Receipt has a 2px rose-200 border, dashed separators and a small rose-100 savings badge. Body uses default sans and receipt labels use monospace.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Columns begin at 1024px. Phone heading is 48px and desktop is 60px. Receipt container keeps 24px padding; the receipt removes rotation below 640px. Action links wrap.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
