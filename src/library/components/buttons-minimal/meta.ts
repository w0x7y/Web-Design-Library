import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-minimal',
  name: 'Buttons — Minimal',
  category: 'buttons',
  tags: ['minimal', 'light'],
  description:
    'A quiet zinc button set: primary, secondary, ghost, icon-only and loading, each in small, medium and large. Drop it into any light interface that needs restrained, consistent actions.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'Three rows, one per size (small, medium, large), 24px apart. Each row holds, left to right: primary, secondary, ghost, a square icon-only button and a primary-styled loading button with a spinner. Rows wrap onto a second line when space runs out.',
    style:
      'Inherits the page font. Primary: zinc-950 fill, white text, 1px 2px shadow. Secondary: white fill, zinc-200 border, zinc-950 text, same shadow. Ghost: no fill, zinc-600 text. Loading: zinc-800 fill with a spinning ring icon and an ellipsis label. Medium weight labels. Heights 32 / 36 / 44px, horizontal padding 12 / 16 / 20px, label size 13 / 14 / 15px, radius 6 / 8 / 10px; icon-only buttons are square at the same heights.',
    states:
      'Primary lightens to zinc-800 on hover; secondary and icon-only buttons fill with zinc-50 and darken their border to zinc-300; ghost gains a zinc-100 fill and zinc-950 text. Every button shows a 2px zinc-950 outline offset by 2px on keyboard focus. The loading button is disabled with a wait cursor and its ring spins continuously.',
    responsive:
      'Button sizes never change; on narrow screens each row wraps, keeping 12px gaps.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
