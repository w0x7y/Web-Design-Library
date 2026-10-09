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
      'A 288px-wide cream panel with 24px padding. Center a 128px by 80px oval seal, 20px below the centered 10px eyebrow. Place a wrapping dietary list 28px below the seal, with 8px gaps. A 10px origin/weight footer has a 20px top margin and 12px padding above its text.',
    style:
      'Use amber-50, emerald-950 and emerald-800, a fine emerald-800 border and system serif display text. The maker seal has a 1px inner border and 1px outer ring separated by a 4px amber-50 gap, 10px uppercase captions and a 24px serif name with 32px line height; dietary labels are uppercase 10px text in square bordered boxes with 4px vertical and 10px horizontal padding. Organic reverses to amber-50 text on emerald-800. No shadows beyond the seal ring.',
    states:
      'All badges are static information with no interactive state. Include written dietary names and provenance, so the visual seals never carry meaning alone.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
