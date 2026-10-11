import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-identity-details',
  name: 'Profile cards — Identity row with details list',
  category: 'profile-card',
  tags: ['stacked','list','compact'],
  description: "A left-aligned identity row above three practical details and a full-width booking action. Use it when availability and profile facts inform the next step.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│ Avatar    Jordan Ellis                                   │
│           Role or specialty                              │
│ Short biography                                          │
├──────────────────────────────────────────────────────────┤
│ Time zone                                     UTC+1      │
│ Languages                              English, Spanish  │
│ Next available                                Mar 14     │
├──────────────────────────────────────────────────────────┤
│                                                          │
│ [                    Book a session                    ] │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px card (w-72), 320px from 640px (sm:w-80), with p-6 24px padding, rounded-lg 8px corners and a 1px border. A 48px avatar sits beside name and role with a 12px gap. The two-line bio follows by 8px. A definition list begins 12px later, with three hairline-separated flex rows, 4px vertical padding, 12px gaps and right-aligned values capped at 55% width. A full-width 44px primary action follows by 12px.",
    hierarchy: "Read the 18px semibold name and 14px role, the 14px bio, then the 14px label/value pairs before booking. Slots: name up to 22 characters, role up to 24, biography up to 12 words, fact labels up to 14 characters and values up to 18. The list remains always visible.",
    states: "Book a session changes from neutral-900 to neutral-700 on hover with a 150ms colour transition and shows a 2px neutral-900 focus-visible outline offset 2px. Facts and identity have no interaction. No open, selected or disabled state.",
    responsive: "Only the card width changes at 640px, from 288px to 320px. Rows retain label-left and value-right alignment; long values wrap at the right edge. A two-line bio and compact values keep the card under 384px high.",
    usage: "Use for a bookable person with availability and concise practical facts. Pick profile-card-expandable-details when credentials can stay hidden. Variations: replace time zone with response time, change languages to specialties, or make the primary action Request a call.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

