import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-kelp-harvest',
  name: 'Kelp harvest reservation',
  category: 'cta',
  description:
    'A coastal kelp farm CTA styled as a harvest sheet, with pack details and a native delivery disclosure. Use it for seasonal harvest reservations.',
  tags: ['editorial', 'light'],
  preview: { kind: 'section' },
  fonts: ['Fraunces:wght@400..700'],
  brief: {
    layout:
      '1280px maximum-width section with 24px side and 56px vertical padding. Ruled masthead, a 40px-spaced heading/harvest grid, then a 32px-spaced footer with action and details disclosure. The harvest record has top and bottom 1px rules, 20px vertical padding and a two-column definition list.',
    style:
      'Fraunces on amber-50 paper, green-950 main ink, green-900 body/rules and green-800 fact labels. Heading 40px regular, 1.1 leading and -0.025em tracking. Monospace 12px harvest labels. Square green-950 action with amber-50 14px semibold text and 48px minimum height. No shadows.',
    states:
      'Action becomes green-900 on hover-capable devices; summary changes to green-700. Both show 2px green-950 focus outlines offset 4px. Native details toggles delivery text with a visible disclosure marker. No animation.',
    responsive:
      'At 640px heading becomes 56px and padding becomes 80px vertical and 32px horizontal. At 768px heading/harvest become 1.2:1 columns with 64px gap and footer forms a row; smaller widths stack.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
