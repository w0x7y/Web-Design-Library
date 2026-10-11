import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-capability-matrix',
  name: 'Features — Capability scope matrix',
  category: 'features',
  tags: ['table', 'compact'],
  description:
    'A fixed-width semantic table compares capability scope across three working modes.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow / Heading / Introduction                          │
│                                                          │
│Capability         Personal       Shared        Managed   │
│Organize           Included       Included      Included  │
│Collaborate        Limited        Included      Included  │
│Automate           Basic          Extended      Extended  │
│Manage access      Individual     Team          Central   │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl section places a full-width table 40px below the introduction. The table uses four equal fixed columns, 12px cell padding, 1px borders and a neutral-50 header. A caption labels the comparison above it.',
    hierarchy:
      'Read the section heading, caption, column labels and row labels before the values. Keep column names under 2 words, capability labels under 3 and values under 2.',
    states:
      'The table is informational and has no interactive states. Semantic row and column headers associate each value with its capability and working mode.',
    responsive:
      'The table remains within the container using table-fixed and wrapping cell text. Text is 12px below 640px and 14px above it. Cells retain 12px padding, including at 320px.',
    usage:
      'Use to explain how capability scope changes by working mode without introducing prices. Pick feature cards when modes do not need direct comparison. Variations: compare two modes, add a short eligibility note, or use feature stages as columns.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
