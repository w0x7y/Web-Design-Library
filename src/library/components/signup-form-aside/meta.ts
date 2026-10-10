import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-form-aside',
  name: 'Sign-up — Form with next-steps aside',
  category: 'signup',
  tags: ['asymmetric', 'form', 'list'],
  description: 'A detailed registration form with paired identity and address fields beside a next-steps aside. Use when users need to supply more information and understand what follows.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│┌─────────────────────────────────┐  ┌─────────────────┐  │
││ Registration title / Lede       │  │ What comes next │  │
││ First name      Last name       │  │ 1. Review       │  │
││ Email                           │  │ 2. Confirm      │  │
││ Phone                           │  │ 3. Get started  │  │
││ City            Postcode        │  │                 │  │
││ Select                          │  │ [Data use v]    │  │
││ [ ] Consent                     │  └─────────────────┘  │
││ [Submit details]                │                       │
│└─────────────────────────────────┘                       │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A 1152px max-w-6xl container uses 24px gutters and 64px vertical padding, 96px from 640px. From 1024px a 2fr/1fr top-aligned grid has a 32px gap. The white form card has a 1px neutral-200 border, 8px radius and 24px padding, 32px from 640px. The neutral-50 aside uses 24px padding and three ordered rows with 24px number circles, 12px gaps and 24px spacing.',
    hierarchy: 'A 30px h1 and 18px lede introduce First name, Last name, Email, Phone, City, Postcode and Account type. A consent checkbox and Submit details action close the form. The 18px aside title introduces three 16px step titles with 14px descriptions and a data-use disclosure. Slots: heading up to 6 words, lede up to 20, step descriptions up to 15, data explanation up to 35.',
    states: 'Inputs are 40px high with a 1px neutral-300 border, 6px radius and 14px text. The 44px primary action changes neutral-900 to neutral-700 on hover with a 150ms colour transition. Text links change to neutral-600. All controls show a 2px neutral-900 keyboard-focus outline offset 2px. Account type is a native required select with a disabled empty placeholder. The required consent checkbox is toggleable and tied to its hint. Native details starts closed, revealing a data-use explanation and rotating the chevron 180 degrees on open. No submission state is simulated.',
    responsive: 'Below 1024px the aside follows the form with a 32px gap. First/Last name and City/Postcode are one column below 640px and two equal columns with a 16px gap above. At 640px the section padding becomes 96px, form padding 32px and heading 36px. The action is full width below 640px, auto width above.',
    usage: 'Use for an intake flow with identity, contact and address information. Choose signup-centered-social for a short account form or signup-multi-step to split a long flow. Variations: replace address fields with organization fields, change the select to eligibility, or add review timing to the aside.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
