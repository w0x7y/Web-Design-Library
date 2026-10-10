import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-split-context',
  name: 'Login — Context column beside form',
  category: 'login',
  tags: ['asymmetric', 'list', 'form'],
  description: 'An account-context column with three icon rows beside a bordered credential form. Use to explain access, protection or availability before users sign in.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow                          ┌─────────────────────┐  │
│Context headline                 │ Sign-in title       │  │
│Lede                             │ Email               │  │
│                                 │ Password            │  │
│Icon  Access summary             │ [Forgot password?]  │  │
│──────────────────────────       │ [Sign in          ] │  │
│Icon  Account benefit            ├─────────────────────┤  │
│──────────────────────────       │ Account hint        │  │
│Icon  Availability note          └─────────────────────┘  │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A 1152px max-w-6xl container with 24px gutters and 64px vertical padding, 96px from 640px. From 1024px the grid is 1.4fr/1fr with a 64px gap and centred alignment. The left column has an eyebrow, heading, lede and three hairline-separated rows with 40px icon tiles and 16px gaps. The right card uses 24px padding, 32px from 640px, and 20px form gaps.',
    hierarchy: 'Context leads with a 30px semibold section heading, 18px lede and three 16px item titles. The card title is 24px, followed by Email and Password, a recovery link and full-width Sign in. A 14px hint sits below a top hairline. Slots: eyebrow up to 5 words, headline up to 8, lede up to 20, item descriptions up to 14.',
    states: 'Inputs are 40px high with a 1px neutral-300 border, 6px radius and 14px text. The 44px primary action changes neutral-900 to neutral-700 on hover with a 150ms colour transition. Text links change to neutral-600. All controls show a 2px neutral-900 keyboard-focus outline offset 2px. Icon tiles are decorative. No selected or disabled states are shown.',
    responsive: 'Below 1024px the context stacks above the form with a 48px gap; rows remain one column. At 640px vertical padding increases to 96px, card padding to 32px and context heading to 36px. The card stays full width within its grid column.',
    usage: 'Use when users need context about their account before entering credentials. Pick login-centered-card when sign-in needs no explanation. Variations: turn rows into access benefits, service status notes, or support instructions.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
