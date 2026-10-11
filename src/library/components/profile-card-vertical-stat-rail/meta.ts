import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-vertical-stat-rail',
  name: 'Profile cards — Identity beside a vertical metric rail',
  category: 'profile-card',
  tags: ['sidebar', 'numbers', 'compact'],
  description:
    'Three small metrics form a narrow vertical rail beside the main profile content.',
  preview: {
    kind: 'element',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│24 Projects     Avatar                                    │
│                Alex Rivera                               │
│8 Years         Role or specialty                         │
│                Short biography                           │
│12 Teams        [Contact]                                 │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 288px card widens to 320px at 640px. A 64px stat rail and flexible identity column use a 16px gap and 16px card padding. The rail has a right border, 12px inset and 20px vertical gaps; the main column ends with a full-width 44px contact link.',
    hierarchy:
      'The avatar and name identify the person while three metrics provide supporting evidence. Keep metric labels to 1 word, role to 4 and biography to 10. Values remain short enough for the rail.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The rail and main column stay side by side at both fixed widths. Copy wraps in the flexible column; metric labels stay compact.',
    usage:
      'Use for a compact expertise profile with three comparable measures. Pick centered stats for broader social metrics. Variations: use publications instead of projects, show two metrics, or replace the contact action with a portfolio link.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
