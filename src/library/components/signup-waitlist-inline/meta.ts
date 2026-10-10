import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-waitlist-inline',
  name: 'Sign-up — Waitlist with inline email',
  category: 'signup',
  tags: ['centered', 'row', 'form', 'spacious'],
  description: 'A centred waitlist pitch with an inline email action, usage hint and overlapping member initials. Use to collect interest before access opens.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│                      [Opens Mar 14]                      │
│                  Waitlist headline                       │
│                  Short introduction                      │
│                  Email                                   │
│                  [name@example.com] [Join the waitlist]  │
│                  Email-use hint                          │
│                  AR JL MK   1,284 people have joined     │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A white section has a max-w-3xl 768px shell, 24px gutters and 96px vertical padding. A centred max-w-2xl 672px column stacks a badge, heading, lede and a form 32px below. From 640px the email block flexes beside a 44px auto-width submit with a 12px gap, aligned at the bottom. A hint sits 12px below and a social-proof row 32px below; its 40px avatars overlap by 12px.',
    hierarchy: 'An Opens Mar 14 badge leads to a centred 30px semibold h1 and 18px lede. A visible Email label and Join the waitlist action are followed by a 14px email-use hint linked with aria-describedby. Three decorative initials sit beside the 1,284 people have joined count. Slots: heading up to 8 words, lede up to 25, email-use hint up to 15.',
    states: 'Inputs are 40px high with a 1px neutral-300 border, 6px radius and 14px text. The 44px primary action changes neutral-900 to neutral-700 on hover with a 150ms colour transition. Text links change to neutral-600. All controls show a 2px neutral-900 keyboard-focus outline offset 2px. The avatars, badge and count are static. The required email field uses email autocomplete. No confirmation or disabled state is shown.',
    responsive: 'Below 640px Email and submit stack at full width; above they share a row. The h1 grows from 30px to 36px at 640px, while 96px vertical padding and 24px gutters remain. The proof row wraps to avoid crowding on narrow screens.',
    usage: 'Use for collecting interest before access is available. Pick signup-centered-social when accounts can be created immediately. Variations: replace the opening date with capacity, show an invite count, or add a short eligibility hint below the field.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
