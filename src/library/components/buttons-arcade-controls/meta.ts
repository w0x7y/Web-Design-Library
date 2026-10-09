import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-arcade-controls',
  name: 'Buttons — Arcade controls',
  category: 'buttons',
  tags: ['playful', 'brutalist', 'light'],
  description:
    'Chunky game-room buttons with a play action, a score board and a sound control. Useful for playful onboarding or casual games.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide amber-100 panel with 20px padding and a 2px border. Use one 56px primary button, then two equally sized 64px utility buttons in a two-column grid.',
    style:
      'Black outlines, lime-300 and white button fills, 12px corners, and a 4px black offset shadow. A bold 24px heading and tiny monospace label establish the arcade tone.',
    states:
      'Hover raises button backgrounds to lime-200 or amber-50. Pressed buttons translate 2px down and lose half their shadow. Focus uses a 2px slate-900 outline with 2px offset; reduced motion removes transitions.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
