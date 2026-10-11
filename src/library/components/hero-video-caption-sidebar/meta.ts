import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-video-caption-sidebar',
  name: 'Hero — Video with an explanatory sidebar',
  category: 'hero',
  tags: ['asymmetric', 'media', 'sidebar'],
  description:
    'A spanning headline introduces a wide video with its caption and a separate narrow explanation column.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow                                                   │
│Headline for the visual walkthrough                       │
│                                                          │
│┌──────────────────────────────────┐   ┌────────────────┐ │
││                                  │   │What it covers  │ │
││Video                             │   │Supporting lede │ │
││Caption / 2:14                    │   │                │ │
│└──────────────────────────────────┘   │[Primary action]│ │
│                                       └────────────────┘ │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'The headline spans a max-w-6xl section. A 32px-gap grid below it becomes 2:1 at 1024px. The left figure has a 16:9 video region and 12px caption gap; the right column has a 1px left divider and 32px inset.',
    hierarchy:
      'Read the headline, video and caption, then the sidebar title and action. Limit the headline to 10 words, sidebar title to 6 and explanation to 25. Include a concise duration in the caption.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'Below 1024px the sidebar follows the video and uses a top divider with 24px padding instead of a left divider. The video retains 16:9 at every width. Actions wrap.',
    usage:
      'Use for introductions centered on a demonstration. Pick a split image when the headline belongs alongside the media. Variations: use an image presentation, add a transcript link in the caption, or list two demonstration topics in the sidebar.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
