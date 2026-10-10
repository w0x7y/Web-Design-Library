import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-arcade-controls',
  name: 'Buttons — Arcade controls',
  category: 'buttons',
  tags: ['playful', 'brutalist', 'light'],
  description:
    'Chunky game-room buttons with a play action, a score board and a sound control. Useful for playful onboarding or casual games.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A fixed 288px amber-100 panel with a 2px black border, 16px radius and 20px padding. A 10px eyebrow and 24px heading precede a full-width 56px play button after 20px. A two-column grid of 64px utility buttons follows after 16px, with 12px gaps. End with a centered caption after 20px.',
    style:
      'Default sans with black text. The heading is 900 weight with -0.025em tracking; the 10px eyebrow and caption use the system monospace stack. Buttons have 2px black borders, 12px radii and 4px black offset shadows. Play uses lime-300, an 18px black label and 16px triangle. White utility buttons use 12px bold labels and a star or 20px speaker icon.',
    states:
      'Hover raises button backgrounds to lime-200 or amber-50. Pressed buttons translate 2px down and lose half their shadow. Focus uses a 2px slate-900 outline with 2px offset; reduced motion removes transitions.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
