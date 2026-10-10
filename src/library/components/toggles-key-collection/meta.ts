import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-key-collection',
  name: 'Toggles — Locksmith collection',
  category: 'toggles',
  tags: ['editorial', 'light'],
  description:
    'A Keyturn locksmith collection panel with a prominent key quantity, order description and independent ready and pickup reminders. Use it beside a key-cutting order.',
  preview: { kind: 'element' },
  fonts: ['Newsreader:wght@400;500;600;700'],
  brief: {
    layout:
      'A 288px panel with 20px padding. A 10px brand eyebrow precedes a 64px-and-flexible grid with 16px gap and 16px top margin: a 56px key quantity beside a 26px serif title. A 14px order description follows 12px later with a hairline and 16px bottom padding. Two notification rows follow 16px later, with 16px spacing and 20px checkboxes opposite labels and hints. An 11px collection-time note follows after 16px.',
    style:
      'Newsreader on amber-50 paper with red-950 main text and red-800 secondary text. Square corners and a 1px red-200 outer border and description rule. Quantity is 56px at single leading; title is 26px normal at 28px leading. Labels are 14px semibold at 20px leading, hints 12px at 16px leading and footer 11px at 16px leading. Native checkboxes use red-900 accents. No shadow.',
    states:
      'Ready-to-collect email starts checked and Pickup-day reminder starts unchecked. Native checkboxes support Space and pointer input and each references its hint through aria-describedby. Every checkbox has a 2px red-900 focus-visible outline offset 2px, including forced colours. No hover effect, motion or custom state fill.',
    responsive:
      'Fixed width is 288px below 640px and 384px from 640px. Quantity grid, stacked reminder rows, control sizes, padding and typography stay fixed, fitting within the 384px-high element frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
