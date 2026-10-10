import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-wishlist',
  name: 'A wishlist without saved finds',
  category: 'empty-state',
  tags: ['minimal', 'dark'],
  description:
    'Wantleaf gift-wishlist empty state uses a bookmark corner and a restrained saved-find prompt. Use it before someone collects gift ideas or personal favorites.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      '24px side and bottom padding with a flush top bookmark corner. A header with 20px top padding on the wordmark, saved-find count, 30px two-line heading, 12px body and ruled wrapping footer with save action and privacy note.',
    style:
      'Default sans stack, stone-900 canvas, stone-100 heading, stone-300 body, stone-400 count and privacy, stone-600 footer rule. Square corners and no shadow. The header has 0.2em tracking.',
    states:
      'The primary action underlines on hover-capable devices. Every action has a 2px current-color outline offset 4px on keyboard focus, including forced-colors mode. Illustrations are decorative and hidden from assistive technology. No animation.',
    responsive:
      'The root is 288px wide below 640px and 384px wide from 640px. All other sizes and spacing stay the same; text wraps to the available width. It fits within a 384px-tall element frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
