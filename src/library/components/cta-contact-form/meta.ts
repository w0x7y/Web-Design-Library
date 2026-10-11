import type { ComponentMeta } from '../../types'

export default {
  slug: "cta-contact-form",
  name: "Call to action — Contact form",
  category: "cta",
  tags: ["split", "form"],
  description: "A contact invitation and alternate email beside a compact form card. Use it when readers need to send a short enquiry.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Status dot + availability       ┌──────────────────────────┐ │
│ Heading for the next step       │Email                     │ │
│ Supporting lede                 │[Email address          ] │ │
│                                 │Message                   │ │
│ Alternative contact             │[Message                ] │ │
│ [name@example.com]              │[                       ] │ │
│                                 │Reply hint  [Send]        │ │
│                                 └──────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 1152px max-w-6xl container has 24px horizontal padding and 64px vertical padding, increasing to 96px at 640px. At 768px two equal columns use a 64px gap. The left status line combines an 8px dot with 14px text and an 8px gap, followed by heading after 16px, lede after 24px and alternate contact after 32px. A rounded-lg bordered white form card has 24px padding and 24px field gaps. Its textarea is at least 128px tall. The reply hint and submit row follows by 24px.",
    hierarchy: "The section headline is 30px, increasing to 36px at 640px, semibold with tracking-tight and balanced wrapping. Read visible availability text, h2, 18px lede, alternate email link, then labelled Email and Message controls and submit. Slots: availability 5 words, title 8, lede 25, alternate contact 10, reply hint 10, submit 3. The status dot is decorative and the textarea references the hint.",
    states: "Actions are 44px tall with 20px horizontal padding and rounded-md 6px radii. Primary hover changes neutral-900 to neutral-700. Colour transitions take 150ms. Every enabled control shows a 2px neutral-900 focus-visible outline offset 2px. The email link changes neutral-900 to neutral-600 on hover. Email input is 40px tall; textarea uses 12px padding, rounded-md and neutral-300 border, with vertical resizing. Both are required and use native validation. The status has visible text and a forced-colors border.",
    responsive: "Below 768px the card follows the copy with a 48px gap and submit is full width. At 768px columns begin. Below 1024px hint and button stack with 16px gaps; from 1024px they share a justified row. Heading and vertical section padding step at 640px.",
    usage: "Use for a short enquiry with an alternative contact path. Choose cta-email-signup for a one-field subscription. Variations: add a name field, replace the status with reply hours, or link to a scheduling page beside the form.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
