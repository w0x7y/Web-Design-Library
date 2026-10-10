import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-card-on-media',
  name: 'Login — Card over full-bleed media',
  category: 'login',
  tags: ['layered', 'media', 'form'],
  description: 'A floating credential card over a full-width image placeholder, aligned right on desktop. Use when media should fill the sign-in view.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│                                                          │
│                              ┌────────────────────────┐  │
│                              │ Logo / Sign-in title   │  │
│         Image                │ Email                  │  │
│                              │ Password               │  │
│                              │ [Sign in]              │  │
│                              │ [Sign up]              │  │
│                              └────────────────────────┘  │
│                                                          │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A relative section has a 640px minimum height. From 640px an absolute inset-0 neutral-200 image placeholder fills the background, behind a relative 1152px max-w-6xl container with 24px gutters and 64px vertical padding, 96px from 640px. A white max-w-sm card uses 32px padding, 8px radius and shadow-lg. It centres until 1024px, then aligns to the right.',
    hierarchy: 'The full-bleed media provides context while a logo, 30px h1, Email and Password fields, full-width Sign in and a sign-up link form the foreground. Form spacing is 20px. Slots: heading up to 4 words, sign-up prompt up to 8, image label describes the intended visual.',
    states: 'Inputs are 40px high with a 1px neutral-300 border, 6px radius and 14px text. The 44px primary action changes neutral-900 to neutral-700 on hover with a 150ms colour transition. Text links change to neutral-600. All controls show a 2px neutral-900 keyboard-focus outline offset 2px. The elevated card is static and does not change on hover; the media is a decorative placeholder with an accessible description.',
    responsive: 'Below 640px the image becomes a 160px band above the card and no longer sits behind it. The card fills the 24px gutters and loses its shadow. From 640px the card floats over the background, the heading grows to 36px, and from 1024px the container pushes it right.',
    usage: 'Use when a sign-in visual should occupy the whole view. Choose login-split-media for separate media and form columns. Variations: align the card left, use a video placeholder, or add a short account hint below the heading.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
