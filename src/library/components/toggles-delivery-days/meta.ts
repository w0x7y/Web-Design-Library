import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-delivery-days',
  name: 'Toggles — Delivery days',
  category: 'toggles',
  tags: ['playful', 'light'],
  description:
    'Selectable weekday tiles for a neighborhood bakery delivery schedule, with checked days clearly marked.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide orange-50 card with 20px padding and a 24px radius. Seven day checkboxes form a four-column tile grid with 8px gaps; each tile is 56px tall.',
    style:
      'Use orange-950 text, orange-200 borders and white tiles. Selected days use orange-800 fill, white text and an explicit check mark; the heading uses 20px bold sans.',
    states:
      'The seven native checkboxes toggle independently. Selected tiles show their check mark, dark fill and stronger border. Keyboard focus draws a 2px slate-900 outline with 2px offset on both input and visible label.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
