import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-strength-log',
  name: 'A strength log awaiting its first set',
  category: 'empty-state',
  tags: ['brutalist', 'dark'],
  description:
    'Setmeter strength-log empty state leaves the first training session unrecorded. Use it in a weight-training log before a lifter enters a set.',
  preview: { kind: 'element' },
  fonts: ['Space Grotesk'],
  brief: {
    layout:
      '20px padding inside a square panel. A ruled session header precedes an 80px dash and two-line sets label, 20px heading, 12px instructions, 44px action and footer.',
    style:
      'Space Grotesk, neutral-950 ground, lime-300 primary type and action fill, neutral-300 body and neutral-400 footer. 2px outer border, 1px lime header rule. No radius or shadow.',
    states:
      'The set action underlines on hover and displays a 2px lime-300 outline offset 4px on keyboard focus. The decorative dash and plus are aria-hidden. No motion.',
    responsive:
      'The root is 288px wide below 640px and 384px wide from 640px. All other sizes and spacing stay the same; text wraps to the available width. It fits within a 384px-tall element frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
