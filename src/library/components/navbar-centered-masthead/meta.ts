import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-centered-masthead',
  name: 'Navbar — Centred masthead',
  category: 'navbar',
  tags: ['centered', 'stacked', 'row'],
  description:
    'Utility links, a centred identity and a ruled topic row form a three-level masthead. Use it when the identity deserves more space than navigation.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Oct 10, 2026                             Subscribe  Sign in  │
│                                                              │
│                             Logo                             │
│                   One-line identity descriptor               │
│                                                              │
│ ──────────────────────────────────────────────────────────   │
│    Latest   Topics   Guides   Stories   Events   About   Help│
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A white header uses a 1152px max-w-6xl container with 24px side padding. The utility row is 40px tall and justified. The identity block has 32px vertical padding, a 24px glyph beside a 36px wordmark and a 14px tagline 8px below. A centred topic nav has neutral-200 top and bottom hairlines, 16px vertical padding, 24px column gaps and 12px row gaps.',
    hierarchy:
      'Logo dominates, then seven 14px topics and utility metadata. Limit tagline to 10 words, topics to 1 word; use standard Subscribe and Sign in labels. Latest carries aria-current.',
    states:
      'Text links hover from neutral-900 to neutral-600. The current topic stays semibold. All regions are static. Every enabled control has a 2px neutral-900 focus outline offset 2px. There are no disabled controls.',
    responsive:
      'Below 640px the date hides, utilities align right and the wordmark is 30px (text-3xl). From 640px the date returns and the wordmark is 36px (text-4xl). Topics wrap into centred lines at every width.',
    usage:
      'Use for a publication or archive with a prominent identity and topic navigation. Choose navbar-two-row-search when search leads. Variations: show edition metadata, reduce topics to five, or add a utility announcement.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
