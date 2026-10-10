import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-two-plans',
  name: 'Pricing — Two plans',
  category: 'pricing',
  tags: ['centered', 'split', 'numbers'],
  description: 'Two balanced plans with a dark second card and bottom-aligned actions. Use for an entry-level versus expanded-access choice.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│               Eyebrow / Headline / Lede                      │
│        ┌──────────────────┐ ┌──────────────────┐             │
│        │ Entry label      │ │ Expanded label   │             │
│        │ Plan name        │ │ Plan name        │             │
│        │ $19 /month       │ │ $49 /month       │             │
│        │ Description      │ │ Description      │             │
│        │ Four benefits    │ │ Four benefits    │             │
│        │ [Choose plan]    │ │ [Choose plan]    │             │
│        └──────────────────┘ └──────────────────┘             │
│                 Note and [Compare details]                   │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'White section with 1152px max-w-6xl container, 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Centred max-w-xl header followed 48px below by max-w-4xl 896px plan grid, 24px gap. Cards are flex columns with p-6, rounded-lg and four benefits. Second is neutral-900 with white headings and neutral-300 text. Footer note is centred 32px below.',
    hierarchy:
      'Section headings are 30px text-3xl semibold, 36px sm:text-4xl at 640px, with tight tracking and balanced wrapping. Intro precedes 14px labels, 18px titles, 48px text-5xl prices, descriptions and benefits. Slots: eyebrow 4 words, heading 8, lede 24, description 16, benefit 7, action 3. Prices $19 and $49 per month.',
    states:
      '44px h-11 actions have 6px rounded-md corners and 150ms color transitions. Primary hover fills neutral-700; secondary fills neutral-50; links turn neutral-600. Keyboard focus draws a 2px neutral-900 outline offset 2px. Dark-card white action hovers neutral-200 and uses a white focus outline. No billing selector or disabled state.',
    responsive:
      'Cards stack below 768px and become md:grid-cols-2 above. Flex columns stretch equally and actions use mt-auto. Heading and padding increase at 640px.',
    usage:
      'Use for two clear access levels. Pick pricing-intro-plans for a separate explanatory column. Variations: use one-time versus ongoing access, change benefit counts, or add a trial hint.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
