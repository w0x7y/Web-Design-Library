import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-kitchen-foundations',
  name: 'Cooking foundations enrollment',
  category: 'signup',
  tags: ['editorial', 'light', 'has-image'],
  description:
    'A Counterlesson cooking-school enrollment with a teaching-kitchen photograph, native course-date choices and optional dietary or access needs.',
  preview: { kind: 'section' },
  fonts: ['Newsreader:wght@400..600'],
  brief: {
    layout:
      'A 1152px container padded 24px horizontally and 64px vertically. Introductory text beside a 256px kitchen photograph and caption; application begins 40px later under a rule with 32px top padding. Contact fields and course-date radios, 20px internal gaps and 44px fields.',
    style:
      'Stone-100 background, stone-900 ink and green-900 submit and focus accents. Newsreader 400 heading at 36px/1.1, 48px from 640px; default sans for 14px/24px copy and medium labels. White inputs with square corners and 60% current-colour borders. No shadows.',
    states:
      'Controls use 2px green-900 keyboard focus outlines offset 2px, including forced-colors mode. Submit button brightens on hover-capable devices. Native fields retain browser validation. No animation. Native course radios receive solid borders and a 5% current-colour fill when checked. Optional needs field references its explanatory hint.',
    responsive:
      'Stacks on phones. Heading becomes 48px at 640px. At 768px introduction uses 1:1.2 columns with centred alignment, while application uses two equal columns. Both grids have 32px gaps.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
