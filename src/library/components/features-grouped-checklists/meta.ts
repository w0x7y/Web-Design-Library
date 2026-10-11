import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-grouped-checklists',
  name: 'Features — Two grouped capability checklists',
  category: 'features',
  tags: ['split', 'list', 'icons'],
  description:
    'Two labelled capability lists sit beneath one introduction with a shared action beneath them.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow / Heading / Introduction                          │
│                                                          │
│Core capabilities                Included support         │
│Check Main benefit               Check Guidance           │
│Check Workflow                   Check Resources          │
│Check Reliability                Check Help               │
│                                                          │
│Closing note                              [Explore]       │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl container uses 24px side padding and 64px to 96px vertical padding. Two capability groups appear 40px below the introduction and form equal columns from 768px with a 40px gap. Each begins with a top border and 24px padding; a shared action panel follows.',
    hierarchy:
      'The section heading introduces two groups, each with a title, short context and three check-mark rows. Keep the heading under 8 words, each context under 15 and each capability under 10.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'Groups stack below 768px. The shared closing panel wraps its note and action while checklists stay vertical. Section type changes from 30px to 36px at 640px.',
    usage:
      'Use to separate capabilities from support or access. Pick an icon grid for individually emphasized benefits. Variations: group by audience, show four checks per group, or replace the closing action with an assurance note.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
