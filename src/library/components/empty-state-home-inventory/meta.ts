import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-home-inventory',
  name: 'A home inventory without items',
  category: 'empty-state',
  tags: ['minimal', 'corporate', 'light'],
  description:
    'Roomcount home-inventory empty state pairs a zero-item ledger with room-first guidance. Use it before a household catalogs belongings for insurance or moving.',
  preview: { kind: 'element' },
  fonts: ['Manrope'],
  brief: {
    layout:
      '20px-padded inventory card. A privacy-labelled header, 48px zero with item count, three-column ledger heading, 18px title, 12px instructions and full-width 44px action.',
    style:
      'Manrope, white background and teal-950 ink. Teal-200 1px border and ledger rules, teal-700 hints, teal-800 description. 12px outer radius, 6px action radius, teal-900 action with white text. No shadow.',
    states:
      'The add-item action underlines on hover and shows a 2px teal-900 outline offset 4px on keyboard focus. Ledger column headings are a decorative empty preview and aria-hidden. The actual count is text. No animation.',
    responsive:
      'The root is 288px wide below 640px and 384px wide from 640px. All other sizes and spacing stay the same; text wraps to the available width. It fits within a 384px-tall element frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
