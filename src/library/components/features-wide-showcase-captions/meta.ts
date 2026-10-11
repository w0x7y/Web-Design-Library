import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-wide-showcase-captions',
  name: 'Features — Wide showcase with three captions',
  category: 'features',
  tags: ['stacked', 'media', 'grid'],
  description:
    'A centered introduction leads one wide visual whose three caption columns explain separate capabilities.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│                 Eyebrow / Heading                        │
│                  Introduction                            │
│                                                          │
│┌──────────────────────────────────────────────────────┐  │
││                                                      │  │
││Image                                                 │  │
││                                                      │  │
│└──────────────────────────────────────────────────────┘  │
│                                                          │
│First capability   Supporting workflow   Final outcome    │
│Description        Description           Description      │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'Use a centered max-w-3xl introduction inside a max-w-6xl section. A 16:9 visual follows after 40px. Its caption uses 24px top spacing and three equal columns from 768px; each caption starts with a 1px top border and 16px inset.',
    hierarchy:
      'Read the heading and single overview image before the three feature labels. Keep the heading under 8 words, caption titles under 4 and each explanation under 15.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'Caption columns stack below 768px while the media remains 16:9. The centered introduction stays centered at every width and the section adds 96px vertical padding from 640px.',
    usage:
      'Use when one annotated visual explains several related capabilities. Pick alternating rows for independent visuals. Variations: show two captions, use a video overview, or number the caption headings to match callouts in real media.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
