import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-group-media-roster',
  name: 'Team — Group portrait and individual contacts',
  category: 'team',
  tags: ['asymmetric', 'media', 'grid'],
  description:
    'A shared group photograph sits beside a two-column set of individual contact summaries.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow / Heading / Introduction                          │
│                                                          │
│┌──────────────────────┐   ┌────────────────────────────┐ │
││                      │   │Individual contacts         │ │
││Image                 │   │Avatar Name   Avatar Name   │ │
││Group caption         │   │Role / Focus  Role / Focus  │ │
│└──────────────────────┘   │[Contact]     [Contact]     │ │
│                           │Avatar Name   Avatar Name   │ │
│                           │Role / Focus  Role / Focus  │ │
│                           └────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl section becomes a 2:3 grid from 1024px with a 40px gap. The left group portrait is square with a 12px caption gap. The right roster forms two columns from 640px with 24px gaps and 1px top dividers.',
    hierarchy:
      'The shared photograph establishes the group before individual identities and contacts. Keep the group caption under 12 words, roles under 4 and each focus sentence under 12.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'Below 1024px the group portrait precedes the roster. Individual summaries become one column below 640px. Identity rows stay horizontal, with flexible text beside 40px avatars.',
    usage:
      'Use when the team’s collective identity matters alongside individual contact routes. Pick featured-lead layouts for one central person. Variations: use a workspace photograph, show six contacts, or replace contact links with profile destinations.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
