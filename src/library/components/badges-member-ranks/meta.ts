import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-member-ranks',
  name: 'Badges — Member ranks',
  category: 'badges',
  tags: ['playful', 'light'],
  description:
    'Friendly achievement badges for a walking club, combining circular award emblems with clear milestones.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide violet-50 card with 20px padding. A 10px semibold uppercase club name and 20px bold title precede a list with a 20px top margin and 10px gaps. Three white achievement rows have 12px padding, 12px radii and 12px gaps, pairing 40px circular badges with a 14px semibold title and an 11px milestone description.',
    style:
      'Use a 24px outer radius, violet-950 headings and white row backgrounds. The emblems have 2px borders. Their border, fill and text colours are amber-400/amber-100/amber-900 for First five, emerald-400/emerald-100/emerald-900 for Early bird and violet-400/violet-100/violet-900 for Weekend wanderer. A 20px star, 24px sunrise SVG and 20px spark distinguish the awards. Descriptions have violet-700 text and 2px top margins. Use the default sans stack and no shadows.',
    states:
      'The achievements are static and have no hover or focus states. Each graphic has a written achievement name and milestone; decorative SVGs are hidden from assistive technology.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
