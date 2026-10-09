import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-command-search',
  name: 'Inputs — Command search',
  category: 'inputs',
  tags: ['dark', 'minimal'],
  description:
    'A dark search field with searchable scopes and a suggested command. Use it in a workspace command palette.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide zinc-950 panel with 16px padding. A 44px search field sits above a three-option horizontal native radio scope row and a suggested-action button.',
    style:
      'Use zinc-700 borders, 12px radii and zinc-100 text. A 16px magnifier sits inside the search field; scope pills are small outlined boxes, with white text and a zinc-700 checked fill.',
    states:
      'The search and action have lime-300 focus outlines. Native radio selections change the scope fill and show a 2px lime-300 focus outline on their labels. Hover uses zinc-800; reduced motion removes transitions.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
