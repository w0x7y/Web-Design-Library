import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-mega-menu',
  name: 'Navbar — Mega menu panel',
  category: 'navbar',
  tags: ['layered', 'grid', 'media'],
  description: "A wide product panel pairs six destinations with a featured resource card, and mobile uses one flat native menu. Use it for a broad product suite whose destinations need short descriptions and a featured resource.",
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Logo  Products ^  Pricing Docs About  Log in [Get started]   │
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ Icon Overview      Icon Collaboration   ┌──────────────┐ │ │
│ │ Supporting copy    Supporting copy      │    Image     │ │ │
│ │ Icon Automation    Icon Reporting       └──────────────┘ │ │
│ │ Supporting copy    Supporting copy      Featured title   │ │
│ │ Icon Integrations  Icon Security        Description      │ │
│ │ Supporting copy    Supporting copy      [Read guide]     │ │
│ └──────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A neutral-50 section reserves 448px at desktop, 960px from 640px to 1023px and 1024px below 640px. The white 64px bar has a 1152px max-w-6xl container and 24px side padding. An absolute panel begins 8px below it with 24px padding, rounded-lg neutral-200 border and shadow-lg. A 12-column grid with 24px gaps assigns eight columns to a two-column product grid and four to a feature card with 16:9 media. Product links pair 40px icon tiles with 16px semibold titles, 24px title line height and 14px descriptions.',
    hierarchy:
      'Read Logo, Products, three plain links and actions. The open panel has six product destinations and a featured card with 16px title, sentence and text link. Limit product titles to 2 words, descriptions to 8 words, feature title to 5 and sentence to 16.',
    states:
      'Text links hover from neutral-900 to neutral-600. Primary actions are 44px tall with a 6px radius, neutral-900 fill, neutral-700 hover fill and 150ms colour transition. Desktop Products and the mobile menu start open. Desktop chevron rotates on opening; mobile bars swap to a cross. Product links fill neutral-50 on hover. Mobile uses one flat disclosure without nested details. Every enabled control has a 2px neutral-900 focus outline offset 2px. There are no disabled controls.',
    responsive:
      'Below 1024px desktop navigation and actions hide. One mobile panel lists six products, then Pricing, Docs and About, then full-width login and primary actions. At 1024px the desktop panel returns. Reserved height contains the open panel at 320px.',
    usage:
      'Use for a broad product suite with supporting descriptions and a featured resource. Choose navbar-dropdown-menus for smaller groups. Variations: use a video placeholder in the feature card, reorganise products, or replace login with Help.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
