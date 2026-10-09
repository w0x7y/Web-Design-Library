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
      'A 288px card with a 1px border and 24px padding. A 64px folder tile contains a 48px SVG. The 20px semibold heading has a 28px line height and 20px top margin; the 14px explanation has a 24px line height and 12px top margin. A full-width 44px action follows after 24px.',
    style:
      'Default sans font, white card, stone-950 headings and button fill, stone-600 body copy, stone-200 border and stone-100 illustration tile. Card and tile radii are 12px; the button has an 8px radius, 14px semibold white text and 16px horizontal padding. No shadow.',
    states:
      'The project button has a pointer cursor, a stone-800 fill on hover-capable devices and a 2px stone-950 keyboard focus outline offset by 2px. No animation.',
    responsive:
      'Fixed 288px root at every viewport, with 24px padding and wrapping copy. The complete component stays under 384px tall in the mobile and desktop capture frames.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
