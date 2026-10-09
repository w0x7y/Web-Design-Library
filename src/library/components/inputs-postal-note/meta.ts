import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-postal-note',
  name: 'Inputs — Postal note',
  category: 'inputs',
  tags: ['editorial', 'light'],
  description:
    'A warm letter-style input set for a gift note, with a sender field and a ruled message area.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide stone-50 card with 20px padding. Place a 24px serif heading over a 40px sender field and a 96px textarea with a small hint below.',
    style:
      'Use a stone-300 border, square outer corners, serif heading and textarea text, and restrained uppercase 10px labels. The input has a bottom rule and the textarea uses a white fill.',
    states:
      'Both fields highlight their border in amber-800 when focused and draw a 2px slate-900 outline with 2px offset. Textarea resizing is disabled to preserve the compact preview.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
