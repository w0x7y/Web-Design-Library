import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-single-plan',
  name: 'Pricing — Single plan with benefits',
  category: 'pricing',
  tags: ['asymmetric', 'list', 'numbers'],
  description: 'One annual plan beside a six-benefit introduction and a member-count footer. Use when there is one paid offer to explain.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Eyebrow                             ┌─────────────────┐      │
│ Headline                            │ Badge           │      │
│ Lede                                │ Plan label      │      │
│                                     │ $228 /year      │      │
│ Benefit        Benefit              │ $19 /month      │      │
│ Benefit        Benefit              │ [Primary action]│      │
│ Benefit        Benefit              │ Renewal note    │      │
│                                     │ AR JL SK 1,284  │      │
│                                     └─────────────────┘      │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'White section with 1152px max-w-6xl container, 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Vertically centred lg:grid-cols-[7fr_5fr] grid with 48px gap. Benefits 32px below lede use sm:grid-cols-2. Plan p-6 card has badge, 48px price, monthly equivalent, full-width action, renewal note and 24px-separated footer with overlapping 40px avatars.',
    hierarchy:
      'Section headings are 30px text-3xl semibold, 36px sm:text-4xl at 640px, with tight tracking and balanced wrapping. Heading and six benefits lead to $228 annual price with $19 monthly equivalent. Slots: eyebrow 4 words, heading 8, lede 24, benefit 7, plan label 3, renewal note 14. Member count 1,284 sits beside decorative avatars.',
    states:
      '44px h-11 actions have 6px rounded-md corners and 150ms color transitions. Primary hover fills neutral-700; secondary fills neutral-50; links turn neutral-600. Keyboard focus draws a 2px neutral-900 outline offset 2px. Card and avatar stack are static; no billing selector.',
    responsive: 'Card follows intro below 1024px. Benefits are one column below 640px and two above. Heading and padding increase at 640px.',
    usage:
      'Use for one annual offer. Pick pricing-two-plans for upgrades. Variations: use a one-time price, replace count with guarantee, or place benefits after card.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
