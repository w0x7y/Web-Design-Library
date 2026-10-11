import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-editorial-dual-media',
  name: 'Hero — Editorial headline and paired media',
  category: 'hero',
  tags: ['asymmetric', 'media', 'spacious'],
  description:
    'A broad headline leads an unequal image pair with the lede and action in a narrow upper column.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow                                                   │
│Headline for the main outcome      Lede                   │
│                                   [Primary action]       │
│                                                          │
│┌──────────────────────────────────┐   ┌────────────────┐ │
││                                  │   │Image           │ │
││Image                             │   │Caption         │ │
││                                  │   └────────────────┘ │
│└──────────────────────────────────┘                      │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl container uses 24px side padding and 64px vertical padding, increasing to 96px at 640px. The upper grid becomes 2:1 at 1024px; the lower image pair becomes 2:1 at 640px with 24px gaps and bottom alignment.',
    hierarchy:
      'Read the 36px to 60px headline first, then the 18px lede and primary action, followed by the large image and detail caption. Limit the headline to 10 words, lede to 25 and caption to 12.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'Both grids stack below their breakpoints. The primary image changes from 4:3 to 16:9 at 640px; the supporting image stays 4:3. The headline steps at 640px and 1024px.',
    usage:
      'Use when an overview image and a detail image both matter. Pick a single split image for one visual. Variations: reverse image weights, use a video in the wide slot, or replace the detail caption with a brief attribution.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
