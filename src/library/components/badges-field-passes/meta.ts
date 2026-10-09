import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-field-passes',
  name: 'Badges — Field passes',
  category: 'badges',
  tags: ['brutalist', 'light'],
  description:
    'Bold event access badges with serial numbers, admission tiers and explicit access descriptions.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide black-bordered panel with 16px padding. A uppercase header sits above three stacked 56px pass strips, each containing a narrow serial compartment and an access tier.',
    style:
      'Use 2px black rules, square corners, monospace serials and heavy sans labels. Lime-300 general admission, white workshop access and pink-200 backstage fills create three distinct passes.',
    states:
      'The passes are static identity information with no focus or hover states. Every tier includes a textual access description; no animation is present.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
