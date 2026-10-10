import type { ComponentMeta } from '../../types'

export default {
  slug: "hero-centered-form",
  name: "Hero — Centred with email form",
  category: "hero",
  tags: ["centered", "form", "spacious"],
  description: "A narrow centred hero with an inline email form, a hint and overlapping avatars. Use it to lead with one signup task without a large image.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│                           Eyebrow                            │
│                Headline for the main outcome                 │
│                       Supporting lede                        │
│                                                              │
│            [Email address       ] [Join waitlist]            │
│                       Email form hint                        │
│                                                              │
│               (AR)(JC)(MP)(SK)(TL)  Proof line               │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 1152px max-w-6xl container has 24px horizontal padding and 64px vertical padding, increasing to 96px at 640px. The content is max-w-2xl 672px and centered. A max-w-xl 576px form follows the lede by 40px, with a 12px row gap and 12px to its hint. Five 32px avatars overlap by 8px in a flex row, 32px below the form, beside a proof line.",
    hierarchy: "The display headline is 36px, 48px at 640px and 60px at 1024px, semibold with tracking-tight and balanced wrapping. Read eyebrow, h1, 18px lede, email form and social proof. Slots: eyebrow 6 words, title 10, lede 25, hint 15, proof line 10. The Email label is visually hidden and the input is connected to the hint. Avatar initials are decorative; the proof sentence supplies context.",
    states: "Actions are 44px tall with 20px horizontal padding and rounded-md 6px radii. Primary hover changes neutral-900 to neutral-700. Colour transitions take 150ms. Every enabled control shows a 2px neutral-900 focus-visible outline offset 2px. The 44px email input has a neutral-300 border and rounded-md radius. The native required email field supplies browser validation. No open, selected or disabled states are shown.",
    responsive: "Below 640px email and submit stack full width; at 640px they share a row and avatars sit beside the proof text. The proof group wraps centrally if needed. At 640px and 1024px the display headline increases to 48px and 60px.",
    usage: "Use for a waitlist or an early-access opening. Choose cta-email-signup for a shorter signup band later in the page. Variations: remove the avatar group, use a subscriber count, or replace the hint with a privacy link.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
