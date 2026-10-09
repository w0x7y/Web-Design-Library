import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-remote-directory',
  name: 'Distributed team directory',
  category: 'team',
  tags: ['dark', 'minimal'],
  description:
    'A dark directory for a distributed product team with initials, responsibilities and local time zones. Use it on company pages or project workspaces.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A full-width dark team section with a 1024px container, 24px side padding and 64px vertical padding. The header has a large title and short introduction. A 48px top gap leads to four 24px-padded directory tiles in a 1px ruled grid, each with a 48px monogram and timezone.',
    style:
      'Zinc-950 background and tiles, zinc-700 dividing rules, zinc-100 names and zinc-400 roles. Lime-300 monospace eyebrow and contact links. Circular zinc-800 initials badges keep the otherwise square layout approachable.',
    states:
      'Named email links become white on hover and show 2px lime-300 focus outlines with 2px offset. Timezones are labeled as October 2026 rather than presented as a live clock. No animation is used.',
    responsive:
      'The directory is one column at 320px and becomes two columns from 640px. Header text stays stacked until 768px, then sits side by side; vertical padding becomes 80px from 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
