import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-paired-media-shared-list',
  name: 'Features — Paired media and shared capabilities',
  category: 'features',
  tags: ['split', 'media', 'row'],
  description:
    'Two equal visual panels share one compact capability strip beneath their individual captions.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow / Heading / Introduction                          │
│                                                          │
│┌──────────────────────────┐   ┌────────────────────────┐ │
││Image                     │   │Image                   │ │
│└──────────────────────────┘   └────────────────────────┘ │
│First view                        Second view             │
│Description                       Description             │
│                                                          │
│Check Capability   Check Detail   Check Assurance         │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl container places two visual figures in equal columns from 768px with a 32px gap. Each uses a 16:9 media region, 16px caption spacing and an 18px title. A shared list follows after 32px with a top border and 24px padding.',
    hierarchy:
      'The section heading frames the comparison; each visual then has a short title and explanation. Three shared capabilities close the section. Keep titles under 4 words, descriptions under 15 and shared labels under 4.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'Visual figures stack below 768px. The capability strip becomes three columns at 640px and stacks below it. Both media regions retain 16:9.',
    usage:
      'Use when two related screens or views share a common capability set. Pick alternating rows for a longer sequence. Variations: show overview and detail views, use two videos, or replace the capability strip with three measurable outcomes.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
