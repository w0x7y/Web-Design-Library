import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-split-menu-panel',
  name: 'Navbar — Open two-column menu panel',
  category: 'navbar',
  tags: ['split', 'list', 'spacious'],
  description:
    'A simple brand row opens into an always-visible panel of large primary links and smaller resource destinations.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Logo                                            [Contact] │
│                                                          │
│Explore                          Resources                │
│[Product overview]               [Guides]     [Examples]  │
│[Capabilities]                   Description  Description │
│[Pricing]                        [Support]    [Updates]   │
│                                 Description  Description │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl header holds a brand row and a navigation panel separated by a 1px border and 24px padding. At 768px the panel becomes two equal columns with a 32px gap; resources form a two-column grid from 640px.',
    hierarchy:
      'Three larger primary links read before four smaller resource links and their descriptions. Use primary labels under 3 words and destination descriptions under 8.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The panel columns stack below 768px and resource destinations stack below 640px. The brand row wraps. All destinations stay visible at every width.',
    usage:
      'Use for a compact site index at a page entrance. Pick a closed dropdown when vertical space is limited. Variations: group links by audience, add a help destination, or put a brief section summary above the large links.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
