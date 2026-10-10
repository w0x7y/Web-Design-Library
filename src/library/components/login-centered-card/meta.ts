import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-centered-card',
  name: 'Login — Centred card',
  category: 'login',
  tags: ['centered', 'form', 'compact'],
  description: 'A compact credential card with a logo, password recovery and remember-me row. Use it for a familiar sign-in page with no supporting content.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│        ┌──────────────────────────────┐                  │
│        │ Logo                         │                  │
│        │ Sign-in headline / Lede      │                  │
│        │ Email                        │                  │
│        │ Password         [Forgot?]   │                  │
│        │ [ ] Remember me              │                  │
│        │ [Sign in                   ] │                  │
│        └──────────────────────────────┘                  │
│               No account? [Sign up]                      │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A neutral-50 section with a 1152px max-w-6xl container, 24px gutters and 64px vertical padding, increasing to 96px at 640px. A white max-w-sm card is 384px wide with a 1px neutral-200 border, 8px radius and 24px padding, increasing to 32px at 640px. The form uses 20px gaps; the account link sits 24px below the card.',
    hierarchy: 'Logo first, then a 30px semibold h1, a 14px one-line lede and the credential form. Email and Password have visible 14px labels; password recovery shares the label row. Remember me precedes the full-width Sign in action. Slots: heading up to 4 words, lede up to 10, field labels 1–3 words.',
    states: 'Inputs are 40px high with a 1px neutral-300 border, 6px radius and 14px text. The 44px primary action changes neutral-900 to neutral-700 on hover with a 150ms colour transition. Text links change to neutral-600. All controls show a 2px neutral-900 keyboard-focus outline offset 2px. The native remember-me checkbox can be checked and unchecked; there are no disabled fields.',
    responsive: 'One column at every width. Below 640px the card fills the space between the 24px gutters, uses 24px padding and a 30px heading; from 640px padding is 32px and the heading 36px. The password label row wraps if necessary.',
    usage: 'Use for returning users who need email and password. Pick login-magic-link for passwordless entry or login-sso-first for providers. Variations: omit remember-me, add an account hint, or replace the lede with a short security note.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
