import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-three-tiers',
  name: 'Pricing — Three tiers, middle highlighted',
  category: 'pricing',
  tags: ['centered', 'grid', 'numbers'],
  description: 'Three equal plan cards beneath a monthly and yearly billing selector, with the middle plan emphasized. Use to compare three levels of access.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│                Headline and lede                             │
│              [Monthly] [Yearly Save 20%]                     │
│ ┌───────────────┐ ┌───────────────┐ ┌────────────────┐       │
│ │ Plan name     │ │ Most popular  │ │ Plan name      │       │
│ │ $19 /month    │ │ $49 /month    │ │ $99 /month     │       │
│ │ [Choose plan] │ │ [Choose plan] │ │ [Choose plan]  │       │
│ │ Five benefits │ │ Five benefits │ │ Five benefits  │       │
│ └───────────────┘ └───────────────┘ └────────────────┘       │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'White section with 1152px max-w-6xl container, 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Centred max-w-xl header; billing pill 32px below, cards 40px below. Three lg:grid-cols-3 columns with 24px gap. Cards p-6, rounded-lg; featured card has a 1px neutral-900 border, badge and shadow-lg. Five-item benefit lists follow a 24px-separated divider.',
    hierarchy:
      'Section headings are 30px text-3xl semibold, 36px sm:text-4xl at 640px, with tight tracking and balanced wrapping. Headline, billing choice, plan names, 48px text-5xl prices, actions then benefits. Slots: headline 8 words, lede 24, plan 3, description 12, benefit 7. Each card contains both price sets and matching billing notes.',
    states:
      '44px h-11 actions have 6px rounded-md corners and 150ms color transitions. Primary hover fills neutral-700; secondary fills neutral-50; links turn neutral-600. Keyboard focus draws a 2px neutral-900 outline offset 2px. Native Monthly radio is selected initially. Labels use has-[:checked] dark fill, border and underline and has-[:focus-visible] outlines. Section group-has swaps every price and note. Annual-equivalent prices are $15.20, $39.20, $79.20; totals $182.40, $470.40, $950.40 yearly. Border and underline preserve selection in forced colors.',
    responsive:
      'Below 1024px cards stack in a centred max-w-md 448px column. From 1024px three equal columns align actions. Billing labels wrap at narrow widths. Heading and padding increase at 640px.',
    usage:
      'Use for progressive tiers. Pick pricing-comparison-table for many limits. Variations: highlight another tier, reduce benefits to three, or add a trial note.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
