import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-card-grid',
  name: 'Testimonials — Card grid',
  category: 'testimonials',
  tags: ['centered', 'grid'],
  description: 'Six equally weighted quote cards with ratings and bottom-aligned attributions. Use for several short endorsements.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│                  Eyebrow / Headline / Lede                   │
│ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐     │
│ │ Stars / Quote  │ │ Stars / Quote  │ │ Stars / Quote  │     │
│ │ AR Name / Role │ │ JL Name / Role │ │ SK Name / Role │     │
│ └────────────────┘ └────────────────┘ └────────────────┘     │
│ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐     │
│ │ Stars / Quote  │ │ Stars / Quote  │ │ Stars / Quote  │     │
│ │ MT Name / Role │ │ CP Name / Role │ │ RN Name / Role │     │
│ └────────────────┘ └────────────────┘ └────────────────┘     │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'White section with 1152px max-w-6xl container, 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Centred max-w-xl header; ul role=list 48px below with 24px gaps, sm:grid-cols-2 then lg:grid-cols-3. p-6 rounded-lg cards with hairline borders contain full-height flex figures, five 16px stroke stars, quote 16px below and mt-auto pt-6 attribution with 40px avatar.',
    hierarchy:
      'Section headings are 30px text-3xl semibold, 36px sm:text-4xl at 640px, with tight tracking and balanced wrapping. Read header, rating, quote and attribution. Stars have sr-only Rated 5 out of 5 text. Slots: heading 8 words, eyebrow 4, lede 24, quote 28-36, name 3, role 6. Stars remain stroke-only currentColor.',
    states: 'Static cards, ratings and attributions; no controls or hover states.',
    responsive: 'One column below 640px, two from 640px, three from 1024px; equal card heights per row. Heading and padding increase at 640px.',
    usage: 'Use for similar-length endorsements. Pick testimonials-masonry for varied lengths. Variations: omit ratings, four cards, or role-based groupings.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
