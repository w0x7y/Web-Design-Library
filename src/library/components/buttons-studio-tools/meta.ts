import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-studio-tools',
  name: 'Buttons — Studio tools',
  category: 'buttons',
  tags: ['dark', 'minimal'],
  description:
    'A compact action palette for an audio recording. Pair four editing tools with a prominent review action.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide dark panel with 20px padding, a recording title, a two-column grid of 64px tool buttons, and a 44px full-width review button.',
    style:
      'Zinc-950 panel with a 20px radius, zinc-800 bordered tool tiles, muted zinc-400 labels, and a lime-300 primary action. Tool icons use 20px inline line art.',
    states:
      'Tool hover uses zinc-800 and review hover uses lime-200. All buttons have 2px focus outlines with 2px offset; dark controls use lime-300 and the primary uses white. Reduced motion removes color transitions.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
