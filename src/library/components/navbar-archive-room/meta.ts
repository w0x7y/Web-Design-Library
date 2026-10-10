import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-archive-room',
  name: 'Archive reading-room navigation',
  category: 'navbar',
  tags: ['editorial', 'dark', 'has-image'],
  description:
    'A literary archive header with an oversized wordmark, paired collection links and a photographed reading-room invitation. Use it for archives and independent research libraries.',
  preview: { kind: 'section' },
  fonts: ['Instrument Serif'],
  brief: {
    layout:
      '1280px maximum grid with 24px horizontal and 32px vertical padding, 32px gaps. Wordmark is 48px with 1 line height above a 16px archive descriptor. Collection menu is a two-column grid with 16px gaps and 18px links. Reading-room invitation pairs a 80px-square notebook photo with 18px title and 16px opening times.',
    style:
      'Instrument Serif throughout, stone-950 background, orange-100 text, stone-600 reading-room divider. Wordmark has -0.025em tracking. Image is square with no rounded corners; invitation has a 1px top rule and 16px top padding. No shadows.',
    states:
      'Brand, collection links and reading-room invitation underline on hover with 4px underline offset. Every control has a 2px currentColor keyboard outline offset 2px, including forced colours.',
    responsive:
      'Regions stack below 768px. From 768px brand and menu use two equal columns and the reading-room invitation spans both. From 1024px use 1fr 1fr 1.2fr and restore a single-column invitation. Photo remains 80px square.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
