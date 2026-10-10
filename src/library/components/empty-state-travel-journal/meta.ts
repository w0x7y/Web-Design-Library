import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-travel-journal',
  name: 'An unwritten travel journal',
  category: 'empty-state',
  tags: ['editorial', 'light', 'has-image'],
  description:
    'Roamfolio travel-journal empty state pairs a destination photograph with an unwritten entry. Use it before a traveler records their first day.',
  preview: { kind: 'element' },
  fonts: ['Newsreader'],
  brief: {
    layout:
      'A flex panel with an 80px-wide photographic margin, 192px-high portrait crop and caption. The text column has 20px horizontal and 24px vertical padding, a journal label, two-line heading, description and entry link.',
    style:
      'Newsreader throughout. Sky-50 background, slate-900 heading, slate-600 label and slate-700 body. Square edges and a sky-200 1px margin border. Heading 32px with line-height 1; copy 14px with 20px line-height. No shadow.',
    states:
      'The primary action underlines on hover-capable devices. Every action has a 2px current-color outline offset 4px on keyboard focus, including forced-colors mode. Illustrations are decorative and hidden from assistive technology. No animation.',
    responsive:
      'The root is 288px wide below 640px and 384px wide from 640px. All other sizes and spacing stay the same; text wraps to the available width. It fits within a 384px-tall element frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
