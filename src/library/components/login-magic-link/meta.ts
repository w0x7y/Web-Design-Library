import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-magic-link',
  name: 'Login — Passwordless email link',
  category: 'login',
  tags: ['centered', 'form', 'icons', 'spacious'],
  description: 'An open passwordless sign-in column with one email field, delivery tips and a password alternative. Use when access begins with an emailed link.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│                     Envelope icon                        │
│                  Passwordless headline                   │
│                  Sign-in link explanation                │
│                  Email                                   │
│                  [Email me a sign-in link]               │
│                  Link-expiry note                        │
│                  [Didn't get the email? v]               │
│                  ─────────────────────────               │
│                  [Use a password instead]                │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A white section has a max-w-3xl 768px shell with 24px gutters and 96px vertical padding. Inside, a centred max-w-md 448px column has a 48px envelope tile, h1, lede, a 32px-separated form and full-width submit. A 24px-separated details row precedes a top-ruled footer, with 24px padding above its password link.',
    hierarchy: 'A decorative envelope leads to a 30px h1 and 18px explanation, then a labelled Email field and Email me a sign-in link action. An expiry note is a 14px hint tied to the field. Three delivery tips appear in the disclosure. Slots: headline up to 7 words, lede up to 20, expiry hint up to 12, each tip up to 14.',
    states: 'Inputs are 40px high with a 1px neutral-300 border, 6px radius and 14px text. The 44px primary action changes neutral-900 to neutral-700 on hover with a 150ms colour transition. Text links change to neutral-600. All controls show a 2px neutral-900 keyboard-focus outline offset 2px. Native details starts closed; opening it reveals three list items and rotates the 20px chevron 180 degrees over 150ms. Its summary has the same visible focus outline as the form controls. No sent or error state is simulated.',
    responsive: 'One column at every width. The content uses 24px side gutters and a maximum width of 448px; h1 grows from 30px to 36px at 640px. The primary action remains full width, and long disclosure labels wrap beside a non-shrinking chevron.',
    usage: 'Use for email-link authentication and explain delivery or expiry constraints. Pick login-centered-card when users must enter a password. Variations: add a security note, show a sent confirmation in a separate layout, or point the alternate link to provider sign-in.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
