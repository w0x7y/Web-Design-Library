import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-first-project',
  name: 'First project prompt',
  category: 'empty-state',
  tags: ['minimal', 'light'],
  description:
    'A compact first-project prompt with a folder illustration. Use it in a new account before the first project is created.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px card with a 64px folder tile, 20px heading, explanation and a full-width project action. 24px padding.',
    style:
      'White card, stone-950 type, stone-200 border and stone-100 illustration tile. 12px card radius and 8px button radius.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Fixed 288px root at every viewport, with 24px padding and wrapping copy. The complete component stays under 384px tall in the mobile and desktop capture frames.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
