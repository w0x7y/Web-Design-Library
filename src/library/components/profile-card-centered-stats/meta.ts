import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-centered-stats',
  name: 'Profile cards — Centred with stats row',
  category: 'profile-card',
  tags: ['stacked','centered','numbers'],
  description: "A centred avatar and identity above three metrics and a paired follow and message row. Use it for a compact public profile where activity counts matter.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│                          Avatar                          │
│                       Alex Rivera                        │
│                    Role or specialty                     │
├──────────────────────────────────────────────────────────┤
│       1,284              312                48           │
│     Followers         Following           Posts          │
├──────────────────────────────────────────────────────────┤
│ [                Follow                ]  [Message icon] │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px card (w-72), 320px at 640px (sm:w-80), with rounded-lg 8px corners, a 1px border and p-6 24px padding. A centred 64px avatar precedes identity text by 12px. A three-column stats grid has 16px vertical padding and top and bottom hairlines, with 20px before it. The closing action row has a 12px gap and 20px top margin; Follow fills the remaining width beside a 44px square message button.",
    hierarchy: "Read the avatar, 18px semibold name, 14px role, then three 16px semibold figures over 12px labels. Slots: name up to 22 characters, role up to 24, three numeric values up to 6 characters and metric labels up to 10. Follow and Message are the only controls.",
    states: "Follow changes from neutral-900 to neutral-700 on hover; Message changes from white to neutral-50. Both use a 150ms colour transition and a 2px neutral-900 focus-visible outline offset 2px. The message button has an accessible label naming Alex Rivera. No selected, open or disabled state.",
    responsive: "Only the fixed width changes at 640px, from 288px to 320px. The avatar, three-column metrics and two-action row remain centred and keep their dimensions at every width.",
    usage: "Use for a public profile with comparable activity figures. Pick profile-card-identity-details for booking and practical facts. Variations: replace Posts with Projects, use a connection action instead of Follow, or change the message button to a labelled contact link.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

