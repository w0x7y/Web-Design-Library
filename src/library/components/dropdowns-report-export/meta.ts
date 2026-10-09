import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-report-export',
  name: 'Dropdowns — Report export',
  category: 'dropdowns',
  tags: ['brutalist', 'light'],
  description:
    'A bold report export disclosure with three file-format actions and a native source-data opt-in.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide white details element with a 2px black border and 16px padding. A 44px summary opens three 44px ruled export actions, followed by a compact checkbox option.',
    style:
      'Use black text, lime-300 summary fill, square corners and monospace 10px format labels. Buttons align their file extension on the left and purpose on the right, separated by black rules.',
    states:
      'Native summary toggles the export choices. Buttons hover in lime-100 and checkbox uses black accent. Every control has a 2px slate-900 focus outline with 2px offset; no animation is used.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
