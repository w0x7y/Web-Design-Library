import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-stacked-proof-band',
  name: 'Hero — Text hero above an endorsement band',
  category: 'hero',
  tags: ['stacked', 'row', 'spacious'],
  description:
    'A left-aligned text hero ends with a divided proof band containing one endorsement and a two-column logo group.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow                                                   │
│Headline for the main outcome                             │
│Supporting lede                                           │
│[Primary action] [Secondary]                              │
│                                                          │
│Endorsement sentence             Supporting organizations │
│Avatar  Name / Role               Logo       Logo         │
│                                 Logo       Logo          │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl section holds a max-w-4xl pitch and max-w-2xl lede. The proof band sits 48px below the actions with a 1px top border and 32px top padding. At 768px it uses equal columns with a 32px gap.',
    hierarchy:
      'The headline leads, then lede and actions, followed by endorsement text and attribution. Keep the headline under 10 words, lede under 25, endorsement under 25 and organization names short.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The proof band stacks below 768px; its logo group stays two columns. Display type steps from 36px through 48px to 60px. Actions wrap without changing reading order.',
    usage:
      'Use when supporting people and organizations carry more weight than a product image. Pick a media hero for visual explanation. Variations: replace the endorsement with a rating, show two logos, or add an organization count beside the label.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
