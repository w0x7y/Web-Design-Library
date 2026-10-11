import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-split-media',
  name: 'Login — Split with media panel',
  category: 'login',
  tags: ['split', 'media', 'form'],
  description: 'An inset media panel beside a vertically centred credential form, with a logo above and legal links below. Use when a large visual should accompany account access.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│┌──────────────────────┐  Logo                            │
││                      │                                  │
││                      │  Sign-in headline                │
││        Image         │  Lede                            │
││                      │  Email                           │
││                      │  Password                        │
││                      │  [ ] Remember   [Forgot?]        │
││                      │  [Sign in               ]        │
││                      │  No account? [Sign up]           │
│└──────────────────────┘  Copyright [Privacy] [Terms]     │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A full-width white section has a 720px minimum height. From 1024px it is two equal columns. The media is inset 16px and stretches to the column height; the right side has 40px padding, a top logo, a flexible centred max-w-sm form and a bottom footer. The form uses 20px gaps and a full-width 44px submit.',
    hierarchy: 'A large image placeholder balances the 30px sign-in h1, 18px lede and Email and Password fields. The remember-me and recovery controls share a wrapping row. A sign-up link follows the submit; copyright and Privacy and Terms links anchor the footer. Slots: lede up to 15 words, copyright one short line.',
    states: 'Inputs are 40px high with a 1px neutral-300 border, 6px radius and 14px text. The 44px primary action changes neutral-900 to neutral-700 on hover with a 150ms colour transition. Text links change to neutral-600. All controls show a 2px neutral-900 keyboard-focus outline offset 2px. The remember-me checkbox is native and toggleable. The media and logo are static placeholders.',
    responsive: 'Below 1024px the media becomes a band above the right column, 192px high below 640px and 288px from 640px. The right column uses 24px padding below 640px and 40px above. Logo, form and footer stack with 48px gaps; from 1024px the form expands into the available vertical space. Heading increases to 36px at 640px.',
    usage: 'Use when sign-in needs a prominent screenshot or visual. Choose login-card-on-media when the form should float over media. Variations: reverse desktop columns, use a video placeholder, or replace the footer copyright with a help link.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
