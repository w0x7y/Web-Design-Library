import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-studio-packages',
  name: 'Studio package pricing',
  category: 'pricing',
  tags: ['editorial', 'light'],
  description:
    'A service package menu with three clearly scoped offers and starting prices. Use it for design studios, consultants and freelance practices.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px section has a compact title row followed by three full-width package rows. Each row has a number, service description and right-aligned starting price with enquiry link. Rows have 32px vertical padding.',
    style:
      'Stone-100 canvas, stone-950 text and orange-800 links. 48px serif section heading, 24px service headings, 30px prices and stone-300 dividers. No raised cards.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Rows use three columns at 768px and two columns with price beneath description on phones. Header stacks below 640px. Long deliverable lines wrap naturally.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
