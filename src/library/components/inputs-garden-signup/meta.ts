import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-garden-signup',
  name: 'Inputs — Garden club',
  category: 'inputs',
  tags: ['playful', 'light'],
  description:
    'Friendly rounded fields for a neighborhood garden club, with name, email and a volunteer opt-in.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide lime-50 card with 20px padding and 24px radius. A small leaf marker and heading precede two 44px pill-shaped fields and a compact checkbox consent row.',
    style:
      'Use emerald-950 text, emerald-200 outlines, white field fills and a lime-200 square decorative leaf tile. Labels are 12px semibold and the heading is 20px bold.',
    states:
      'Inputs and the native checkbox show a 2px slate-900 focus outline with 2px offset. Checkbox accent is emerald-800; fields keep their ordinary keyboard and autofill behavior.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
