import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-pantry-labels',
  name: 'Badges — Pantry labels',
  category: 'badges',
  tags: ['editorial', 'light'],
  description:
    'Food-label badges that mix an oval maker seal with dietary tags and origin information. Use them on specialty grocery products.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide cream panel with 24px padding. Center a 128px by 80px oval seal, then a wrapping row of dietary badges and a split origin/weight footer.',
    style:
      'Use amber-50, emerald-950 and emerald-800, a fine emerald-800 border and system serif display text. The maker seal has double rounded outlines; dietary labels are uppercase 10px text in square bordered boxes.',
    states:
      'All badges are static information with no interactive state. Include written dietary names and provenance, so the visual seals never carry meaning alone.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
