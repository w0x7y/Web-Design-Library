import type { ComponentMeta } from '../../types'

export default {
  slug: 'product-card-featured-collection-list',
  name: 'Product cards — Featured product and related list',
  category: 'product-card',
  tags: ['asymmetric', 'media', 'list'],
  description:
    'One large featured product sits beside three compact related item rows.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow / Heading / Introduction                          │
│                                                          │
│┌────────────────────────────┐    Related items           │
││                            │                            │
││Image                       │    ┌───────┐ Supporting    │
││                            │    │Image  │ $24           │
│└────────────────────────────┘    └───────┘ [View item]   │
│                                                          │
│Featured product          $64     ┌───────┐ Alternative   │
│Description                       │Image  │ $48           │
│[View featured item]              └───────┘ [View item]   │
│                                                          │
│                                  ┌───────┐ Companion     │
│                                  │Image  │ $32           │
│                                  └───────┘ [View item]   │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl section becomes a 3:2 grid from 1024px with a 32px gap. The featured card uses 24px padding and a 16:9 visual. Related rows use 64px thumbnails, 16px gaps and 20px vertical padding with 1px separators.',
    hierarchy:
      'The featured image, title and price lead before its action; related products remain a compact secondary list. Keep the featured description under 15 words and item names under 4. Every repeated action names its item.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The related list follows the featured card below 1024px. Its thumbnail rows remain horizontal with wrapping flexible copy; the featured media keeps 16:9.',
    usage:
      'Use for a curated collection with one primary recommendation. Pick an equal product grid when items have equal importance. Variations: feature a bundle, list alternate sizes, or show two related accessories.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
