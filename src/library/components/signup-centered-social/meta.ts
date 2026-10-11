import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-centered-social',
  name: 'Sign-up — Centred card with providers',
  category: 'signup',
  tags: ['centered', 'form', 'compact'],
  description: 'A registration card with a logo-and-login header, two side-by-side providers and a three-field form. Use when users can create an account through a provider or email.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│     ┌─────────────────────────────────────────────┐      │
│     │ Logo                 Account? [Log in]      │      │
│     │ Account headline / Lede                     │      │
│     │ [Glyph Provider]  [Glyph Provider]          │      │
│     │ ───────────────── or ────────────────────   │      │
│     │ Name                                        │      │
│     │ Email / Error slot                          │      │
│     │ Password / Rules hint                       │      │
│     │ [Create account                           ] │      │
│     │ Terms note                                  │      │
│     └─────────────────────────────────────────────┘      │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A neutral-50 section has a max-w-6xl 1152px container, 16px gutters below 640px and 24px above, with 64px vertical padding, 96px from 640px. A centred max-w-md 448px white card has an 8px radius, 1px neutral-200 border and 24px padding, 32px from 640px. A wrapping logo/login header precedes the title; two provider actions form equal columns with a 12px gap. A divider separates them from a form with 20px gaps and a full-width submit.',
    hierarchy: 'The logo and login prompt lead to a 30px account h1 and 14px introduction. Two outlined provider choices precede Name, Email with a visible error slot, and Password with a rules hint. A full-width Create account action leads to a centred terms note. Slots: heading up to 5 words, introduction up to 15, error and password hints up to 12.',
    states: 'Inputs are 40px high with a 1px neutral-300 border, 6px radius and 14px text. The 44px primary action changes neutral-900 to neutral-700 on hover with a 150ms colour transition. Text links change to neutral-600. All controls show a 2px neutral-900 keyboard-focus outline offset 2px. Email demonstrates aria-invalid and a linked static error slot. The password is required with a 12-character minimum. Provider buttons fill neutral-50 on hover; both have distinct full accessible names, while visible labels shorten below 640px.',
    responsive: 'One card column at every width; providers remain two-up. Below 640px gutters are 16px, card padding 24px and provider labels shorten to Provider with 12px horizontal padding. From 640px card padding is 32px, the heading is 36px and labels read Continue with provider name. The header wraps rather than squeezing the logo.',
    usage: 'Use when registration has both provider and email routes. Pick signup-invite-accept for an existing invitation or signup-plan-choice when a plan must be selected first. Variations: change provider order, add a username, or replace the error example with an email-use hint.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
