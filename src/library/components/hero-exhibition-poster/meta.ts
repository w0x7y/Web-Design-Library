import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-exhibition-poster',
  name: 'Exhibition poster hero',
  category: 'hero',
  tags: ['editorial', 'light'],
  description:
    'An exhibition opening with oversized serif typography and a compact visitor schedule. Use it for museums, galleries and cultural events.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1280px cream poster uses a small header row, an oversized exhibition title, then a two-column introduction and visitor information. The bottom row has a ticket link and a 120px abstract circle emblem.',
    style:
      'Stone-100 fill, stone-950 text, orange-700 accent and stone-300 hairlines. The title uses system serif at 96px on large screens with 0.95 line height. Small labels are uppercase monospace. No shadows or rounded cards.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Title changes from 56px on phones to 96px at 640px and 128px at 1024px. Information columns stack below 768px. Header and bottom rows wrap with 24px gaps.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
