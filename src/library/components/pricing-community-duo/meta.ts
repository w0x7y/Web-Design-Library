import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-community-duo',
  name: 'Community plan pricing',
  category: 'pricing',
  tags: ['playful', 'light'],
  description:
    'Two friendly membership plans for a maker community with clear benefits and an accessible supporter offer. Use it for clubs and community spaces.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1024px maximum-width section with 24px side and 80px vertical padding. A centered max-width 576px introduction has an eyebrow, h2 16px below and paragraph 20px later. Two membership cards start 48px below with 24px gaps. Each has an eyebrow, 30px h3 16px below, 48px price 16px later, description 12px below and a four-item benefits list with 32px margins and 16px row spacing. Full-width actions have at least 48px height and 20px horizontal padding. A centered support note follows 28px below.',
    style:
      'Default sans on violet-50 with violet-950 ink. Heading is 36px bold, 1.25 line height, -0.025em tracking; prices are 48px bold with line height 1. Intro eyebrow is 12px semibold violet-700 uppercase, 0.1em tracking. Cards have 24px radii: Neighbor has violet-100 fill and a 1px violet-200 border; Regular has violet-950 fill and white headings. Card labels are 12px semibold uppercase with 0.05em tracking, violet-700 or lime-200. Body is violet-900 on the free card and violet-200 on the paid card; benefits are 14px, violet-100 on Regular. Actions are fully rounded and 16px semibold: outlined violet-950 for Neighbor, lime-200 fill with violet-950 text for Regular. No shadows.',
    states:
      'Neighbor action fills violet-200 on hover; Regular action fills lime-100. Hover applies only on hover-capable devices. Keyboard focus shows a 2px outline offset 2px, zinc-950 for Neighbor and white for Regular, including forced-colors mode. Link labels name their membership. Lists retain role=list. No motion or transitions.',
    responsive:
      'Cards stack below 768px and become two equal columns from 768px. At 640px the heading steps from 36px to 48px with unchanged 1.25 line height, and card padding steps from 24px to 32px. Regular price and period form a wrapping flex row with 8px gaps and bottom alignment. Actions wrap text while retaining a 48px minimum height.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
