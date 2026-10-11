import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-credential-timeline',
  name: 'Profile cards — Identity and credential timeline',
  category: 'profile-card',
  tags: ['stacked', 'list', 'compact'],
  description:
    'A short chronological background list follows a compact identity row.',
  preview: {
    kind: 'element',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Avatar  Alex Rivera / Role                                │
│                                                          │
│2024   Current role                                       │
│       Short scope description                            │
│2021   Previous role                                      │
│       Relevant background                                │
│2018   Qualification                                      │
│       Credential detail                                  │
│                                                          │
│[View full profile]                                       │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 288px to 320px card uses 16px padding. The timeline follows after 16px with a top border and 16px inset. Each row uses a 48px year column, flexible text column and 12px gaps; three rows have 12px vertical separation.',
    hierarchy:
      'Read identity first, then current-to-earliest background entries and the full-profile link. Limit each entry title to 4 words and supporting detail to 6.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The year and text columns stay intact at both fixed widths. Details wrap while the 48px year column remains aligned; there are no disclosure controls.',
    usage:
      'Use when a few career or qualification milestones matter more than metrics. Pick an expandable profile for longer credentials. Variations: show two entries, replace years with durations, or list certifications instead of roles.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
