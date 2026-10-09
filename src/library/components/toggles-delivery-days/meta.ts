import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-delivery-days',
  name: 'Toggles — Delivery days',
  category: 'toggles',
  tags: ['playful', 'light'],
  description:
    'Selectable day-of-week tiles for a neighborhood bakery delivery schedule, with checked days clearly marked.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide orange-50 card with 20px padding and a 24px radius. Seven day checkboxes form a four-column tile grid with 8px gaps; each tile is 56px tall.',
    style:
      'Use the default sans stack, orange-950 primary text, a 1px orange-200 outer border and 1px orange-700 tile borders with 12px radii and white fills. The eyebrow is 10px semibold uppercase and the title is 20px bold. Supporting text is orange-800: a 12px intro with 20px line height and a 10px delivery-window footnote. The grid starts 20px below the introduction; the footnote starts 16px below the grid. Day names are 12px semibold with 16px line height. Selected days use orange-800 fill, white text and a 10px check mark placed 4px below the day name.',
    states:
      'The seven native checkboxes toggle independently. Selected tiles show their check mark, dark fill and stronger border. Keyboard focus draws a 2px slate-900 outline with 2px offset around the visible tile. Visually hidden inputs use focus-visible outline hiding with a transparent 2px forced-colours fallback. Monday, Wednesday and Friday start selected. Full-day accessible names identify each control, and the fieldset describes the introduction and delivery window. Check marks use opacity so they remain distinguishable in forced colours. No hover changes or transitions.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
