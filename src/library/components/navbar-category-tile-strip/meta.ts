import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-category-tile-strip',
  name: 'Navbar — Brand row and category tiles',
  category: 'navbar',
  tags: ['grid', 'icons', 'compact'],
  description:
    'A compact brand row is followed by four equal bordered category destinations with inline icons.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Logo                                             [Account]│
│                                                          │
│┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐   │
││Icon       │ │Icon       │ │Icon       │ │Icon       │   │
││Category 1 │ │Category 2 │ │Category 3 │ │Category 4 │   │
│└───────────┘ └───────────┘ └───────────┘ └───────────┘   │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl header has a brand row and a category grid 24px below. The grid uses 12px gaps, two columns by default and four at 768px. Each destination has a 1px border, 8px radius and 16px padding.',
    hierarchy:
      'The brand leads, then four equal categories with 20px decorative icons. Keep category labels under 3 words and show the full label without truncation.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The category grid stays two columns below 768px and becomes four above it. The account link stays in the wrapping brand row; tile labels can wrap within their cells.',
    usage:
      'Use for a small catalog or resource collection with four main categories. Pick a text bar for many routes. Variations: add brief item counts, show three columns on desktop, or replace the glyphs with category initials.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
