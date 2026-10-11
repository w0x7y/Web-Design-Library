import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-contact-grid',
  name: 'Profile cards — Identity with a contact grid',
  category: 'profile-card',
  tags: ['stacked', 'grid', 'compact'],
  description:
    'An identity row and brief biography precede four equal contact destinations.',
  preview: {
    kind: 'element',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Avatar  Alex Rivera                                       │
│        Role or specialty                                 │
│Short biography                                           │
│                                                          │
│[Email]          [Website]                                │
│[Profile]        [Calendar]                               │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A w-72 card is 288px wide, widening to 320px at 640px. It uses a 1px border, 8px radius and 16px padding. A 40px avatar leads the identity row; a two-column contact grid follows the biography with 8px gaps and 12px cell padding.',
    hierarchy:
      'Read the person name, role and biography before four contact options. Limit the name to 3 words, role to 4 and biography to 20. Contact accessible labels include the person name.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The contact grid keeps two columns at all widths. The card uses fixed 288px and 320px width steps so it stays compact. Biography and link text wrap naturally.',
    usage:
      'Use in a directory where several contact channels have equal importance. Pick a single-action card when one next step should dominate. Variations: swap calendar for a document, show two channels, or add a brief availability line.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
