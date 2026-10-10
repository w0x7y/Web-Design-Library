import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-index-callout',
  name: 'Navbar — Link index with callout',
  category: 'navbar',
  tags: ['asymmetric', 'grid', 'list'],
  description: "A static header spreads identity, a numbered two-column index of eight destinations and a callout across unequal columns. Use it for a directory or archive where every destination should stay visible.",
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Logo             Product  01   Guides   05   ┌─────────────┐ │
│ Short identity   Pricing  02   Stories  06   │ Eyebrow     │ │
│ descriptor       Docs     03   Events   07   │ Callout     │ │
│                  About    04   Help     08   │ [Action]    │ │
│                                              └─────────────┘ │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A white ruled header uses a 1152px max-w-6xl grid, 24px side padding, 32px vertical padding and 32px gaps. At 1024px a 12-column grid assigns 3 columns to identity, 6 to a two-column index and 3 to a neutral-50 callout with rounded-lg border and 24px padding. Index links have 12px vertical padding, bottom hairlines, 14px labels and 12px mono numbers.',
    hierarchy:
      'Logo and a 14px descriptor anchor the left. Eight numbered destinations read down each column. Callout has a 14px eyebrow, 16px title and action. Limit descriptor to 12 words, destinations to 1 word, callout title to 5 words and action to 2.',
    states:
      'Text links hover from neutral-900 to neutral-600. Primary actions are 44px tall with a 6px radius, neutral-900 fill, neutral-700 hover fill and 150ms colour transition. Index numbers are decorative and aria-hidden. Everything is always visible. Every enabled control has a 2px neutral-900 focus outline offset 2px. There are no disabled controls.',
    responsive:
      'Below 768px identity, index and callout stack. At 768px identity occupies one of three columns and index two; callout spans the row below. At 1024px all regions share the 12-column row. Index keeps two equal columns and 24px gaps at every width.',
    usage:
      'Use for a directory or archive that benefits from a visible index. Choose navbar-links-actions for a compact bar. Variations: use codes instead of numbers, change the callout to a notice, or reduce the index to six links.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
