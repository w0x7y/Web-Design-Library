import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-cta-band',
  name: 'Footer — Closing call to action band',
  category: 'footer',
  tags: ['split', 'grid'],
  description:
    'A large closing pitch and paired actions precede identity, three link groups and legal information. Use it for a final conversion slot.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Closing outcome headline            [Primary] [Secondary]    │
│ One sentence that supports the final action                  │
│ ──────────────────────────────────────────────────────────   │
│ Logo              Product       Resources       Company      │
│ Short statement   Link list     Link list       Link list    │
│ ──────────────────────────────────────────────────────────   │
│ Copyright                                   Privacy Terms    │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A white footer has a 1152px max-w-6xl container and 24px side padding. Closing band uses 64px vertical padding, 96px from 640px and 32px gaps; at 1024px copy and actions form a bottom-aligned justified row. Copy max-width is 672px (max-w-2xl); a 30px headline sits 16px above an 18px lede. Two 44px actions have 12px gaps. Ruled directory band has 48px vertical padding and four equal columns with 32px gaps at 1024px. Legal row padding is 24px.',
    hierarchy:
      'Closing headline and primary action dominate. Lede, identity and three labelled groups follow. Limit headline to 10 words, lede to 24, identity statement to 18 and action labels to 2. Each group has four short links.',
    states:
      'Text links hover from neutral-900 to neutral-600. Primary actions are 44px tall with a 6px radius, neutral-900 fill, neutral-700 hover fill and 150ms colour transition. Secondary action has a neutral-300 border and neutral-50 hover fill. Directory is static. Every enabled control has a 2px neutral-900 focus outline offset 2px. There are no disabled controls.',
    responsive:
      'Below 1024px closing copy and actions stack. Below 640px each action spans available width; from 640px actions share a row and headline grows to 36px. Directory has one column below 640px, two below 1024px and four above. Legal row stacks below 768px.',
    usage:
      'Use to repeat a main conversion after a long page. Choose footer-newsletter-columns for a subscription close. Variations: use Contact as primary, add reassurance below actions, or replace a group with support links.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
