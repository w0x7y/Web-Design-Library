import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-split-benefits',
  name: 'Sign-up — Benefits panel beside form',
  category: 'signup',
  tags: ['split', 'form', 'icons'],
  description: 'A trial-and-benefits panel beside workspace registration, with the form first on smaller screens. Use when sign-up needs a clear explanation of what is included.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│┌──────────────────────────┐  Form title                  │
││ [Free 14-day trial]      │  Workspace name              │
││ Benefit headline        │  Email                        │
││                         │  Password / Hint              │
││ Check Access benefit    │                               │
││ ──────────────────────  │  [ ] Accept terms             │
││ Check Setup benefit     │  [Create workspace       ]    │
││ ──────────────────────  │  Account? [Log in]            │
││ Check Support benefit   │                               │
││ No card required        │                               │
│└──────────────────────────┘                              │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A 1152px max-w-6xl white section uses 24px gutters and 64px vertical padding, 96px from 640px. From 1024px the grid is two equal columns with a 48px gap. The left neutral-50 benefits panel has an 8px radius and 32px padding, 40px from 640px. Three rows use 20px vertical padding, hairlines and 20px checks. The right form uses 20px gaps and a full-width 44px submit.',
    hierarchy: 'A Free 14-day trial badge, 30px benefit headline and three 16px benefit titles explain the offer. The form has a 30px title, Workspace name, Email, Password with a rules hint, a required terms checkbox and Create workspace. The login prompt and no-card note are 14px. Slots: benefit heading up to 8 words, each description up to 15, password hint up to 12.',
    states: 'Inputs are 40px high with a 1px neutral-300 border, 6px radius and 14px text. The 44px primary action changes neutral-900 to neutral-700 on hover with a 150ms colour transition. Text links change to neutral-600. All controls show a 2px neutral-900 keyboard-focus outline offset 2px. Password has a 12-character minimum and its hint is linked with aria-describedby. The terms checkbox is required and natively toggleable; its linked legal text remains keyboard accessible. Checks and the badge are static.',
    responsive: 'Below 1024px the form appears first and the benefits panel follows with a 48px gap; from 1024px benefits are on the left and the form on the right. At 640px section padding becomes 96px, benefit padding 40px and both headings 36px. Fields and submit remain full width.',
    usage: 'Use for workspace creation when trial benefits explain the decision. Pick signup-centered-social for provider choices or signup-form-aside for a detailed intake form. Variations: list account inclusions, explain setup support, or replace the trial badge with a short eligibility note.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
