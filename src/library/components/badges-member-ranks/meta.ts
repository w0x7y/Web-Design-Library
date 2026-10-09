import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-member-ranks',
  name: 'Badges — Member ranks',
  category: 'badges',
  tags: ['playful', 'light'],
  description:
    'Friendly achievement badges for a walking club, combining circular award emblems with clear milestones.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide violet-50 card with 20px padding. Three achievement rows pair 40px circular badges with a title and an 11px milestone description.',
    style:
      'Use a 24px outer radius, violet-950 headings and white row backgrounds. The emblems have 2px colored borders in amber, emerald and violet, plus star, sunrise and spark line art.',
    states:
      'The achievements are static and have no hover or focus states. Each graphic has a written achievement name and milestone; decorative SVGs are hidden from assistive technology.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
