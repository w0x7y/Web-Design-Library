import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-intro-plans',
  name: 'Pricing — Intro beside two plans',
  category: 'pricing',
  tags: ['asymmetric', 'grid', 'numbers'],
  description: 'An explanatory column beside two plans, with a shared-inclusions row below. Use to describe the offer outside its plan cards.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Eyebrow            ┌────────────────┐ ┌────────────────┐     │
│ Headline           │ Plan name      │ │ Badge          │     │
│ Lede               │ Description    │ │ Plan name      │     │
│ [Talk to sales]    │ $19 /month     │ │ $49 /month     │     │
│                    │ Four benefits  │ │ Four benefits  │     │
│                    │ [Choose plan]  │ │ [Choose plan]  │     │
│                    └────────────────┘ └────────────────┘     │
│ ────────────────────────────────────────────────────────     │
│ Every plan includes                                          │
│ Icon Title         Icon Title          Icon Title            │
│     Sentence           Sentence            Sentence          │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'White section with 1152px max-w-6xl container, 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. lg:grid-cols-[1fr_2fr] with 48px gap. Two sm:grid-cols-2 cards use 24px gap, p-6 flex columns, 36px prices and four benefits. Second has badge and primary action. After a 48px-separated top border, three icon items use 24px gaps, 40px tiles and 16px tile-to-copy spacing.',
    hierarchy:
      'Section headings are 30px text-3xl semibold, 36px sm:text-4xl at 640px, with tight tracking and balanced wrapping. Intro and sales link lead to plans, then shared benefits. Slots: eyebrow 4 words, heading 8, lede 24, plan 3, description 12, benefit 7, inclusion title 5, sentence 16. Prices $19 and $49 monthly.',
    states:
      '44px h-11 actions have 6px rounded-md corners and 150ms color transitions. Primary hover fills neutral-700; secondary fills neutral-50; links turn neutral-600. Keyboard focus draws a 2px neutral-900 outline offset 2px. Cards and inclusions static; only actions and sales link are interactive.',
    responsive:
      'Intro stacks above plans below 1024px. Plans stack below 640px; inclusions stack below 768px and form three columns above. Heading and padding increase at 640px.',
    usage:
      'Use when context should appear once. Pick pricing-two-plans for compact comparison. Variations: replace sales link with FAQ, use two inclusions, or add billing selector.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
