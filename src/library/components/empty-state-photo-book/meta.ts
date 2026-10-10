import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-photo-book',
  name: 'A photo book awaiting its pictures',
  category: 'empty-state',
  tags: ['editorial', 'light', 'has-image'],
  description:
    'Folioframe photo-book empty state shows a sample spread and an unfilled page. Use it before someone imports photographs into a new book.',
  preview: { kind: 'element' },
  fonts: ['Young Serif'],
  brief: {
    layout:
      '20px-padded book panel. Header, 96px-high two-page sample spread with 12px vertical margins and a grid row allowed to shrink with an inset desert-road photo and dashed blank image slot, a 9px caption, two-line 24px title, 12px instruction and 40px outlined action.',
    style:
      'Young Serif brand and heading, system sans for caption, copy and action. White background, stone-800 ink, stone-600 secondary text, stone-300 1px outer border and spine. Stone-100 spread backing and white pages. Square edges, no shadow.',
    states:
      'The primary action underlines on hover-capable devices. Every action has a 2px current-color outline offset 4px on keyboard focus, including forced-colors mode. Illustrations are decorative and hidden from assistive technology. No animation.',
    responsive:
      'The root is 288px wide below 640px and 384px wide from 640px. All other sizes and spacing stay the same; text wraps to the available width. It fits within a 384px-tall element frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
