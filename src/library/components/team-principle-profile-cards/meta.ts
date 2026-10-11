import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-principle-profile-cards',
  name: 'Team — Working principles with identity footers',
  category: 'team',
  tags: ['grid', 'stacked', 'spacious'],
  description:
    'Text-first cards introduce each person through a working principle and close with identity and profile links.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌─────────────────────────────────────────────────────────────┐
│Eyebrow / Heading / Introduction                             │
│                                                             │
│Working principle    Team contribution    Personal focus     │
│Statement            Statement            Statement          │
│Statement            Statement            Statement          │
│                                                             │
│Avatar Name          Avatar Name          Avatar Name        │
│Role [View profile]  Role [View profile]  Role [View profile]│
└─────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl section holds three equal cards from 768px with 24px gaps. Each card uses a 1px border, 8px radius and 24px padding. An 18px principle statement sits above an identity footer separated by 32px spacing and a top border.',
    hierarchy:
      'Statements introduce people before their names and roles. Keep each label under 3 words, statement under 25 and role under 4. Profile links name their individual person.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'Cards stack below 768px. Text remains above identity at every width; the horizontal 40px avatar row allows names and roles to wrap.',
    usage:
      'Use when team values or working approaches deserve more space than portraits. Pick a photo grid for visual introductions. Variations: use a brief personal mission, replace the link with email, or show two longer statements.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
