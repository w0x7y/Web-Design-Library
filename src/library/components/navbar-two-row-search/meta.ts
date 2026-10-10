import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-two-row-search',
  name: 'Navbar — Two rows with search',
  category: 'navbar',
  tags: ['stacked', 'row', 'form'],
  description:
    'An announcement strip sits above a logo and search row, followed by wrapping categories. Search remains visible on mobile.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│           Short announcement sentence  [Read more]           │
│ ──────────────────────────────────────────────────────────   │
│ Logo      [Search destinations           ] [Go] Account Cart │
│ ──────────────────────────────────────────────────────────   │
│      Product   Collections   Guides   New   Popular   Help   │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'Three bands: a neutral-900 announcement at least 40px tall; a 1152px max-w-6xl main container with 24px side and 20px vertical padding; and a ruled category row with 16px vertical padding and 32px gaps. At 768px the main row uses three grid columns with a minmax(0,1fr) search area capped at 576px. Search pairs a 40px input and 40px icon submit with an 8px gap.',
    hierarchy:
      'Read announcement, Logo, search, Account and Cart with count badge, then six 14px categories. The input has a hidden label and Search destinations placeholder. Limit announcement to 12 words and links to 1–2 words.',
    states:
      'Text links hover from neutral-900 to neutral-600. Announcement links hover to neutral-300 with white focus outlines. Submit fills neutral-50 on hover. Native GET submission sends the search query. Other enabled controls have a 2px neutral-900 focus outline offset 2px. There are no disabled controls.',
    responsive:
      'Below 768px a two-column grid places Logo and utilities on the first row and search across the full second row, 16px apart. At 768px all three regions share a row. Categories and announcements wrap at every width.',
    usage:
      'Use when people browse categories and search equally often. Choose navbar-centered-masthead for a search-free header. Variations: change the count badge, replace announcement copy, or reduce categories.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
