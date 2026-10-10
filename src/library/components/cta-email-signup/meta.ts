import type { ComponentMeta } from '../../types'

export default {
  slug: "cta-email-signup",
  name: "Call to action — Email sign-up",
  category: "cta",
  tags: ["split", "form"],
  description: "A top-divided signup band with copy beside a labelled email form. Use it for a newsletter or update subscription after other page content.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
├──────────────────────────────────────────────────────────────┤
│ Heading for email updates       Email                        │
│ Supporting lede                 [Email address] [Sign up]    │
│                                 Email hint                   │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 1152px max-w-6xl container has 24px horizontal padding and 64px vertical padding, increasing to 96px at 640px. The section has a 1px neutral-200 top border. At 1024px two equal columns are bottom-aligned with a 64px gap. The copy has 16px between title and lede. A visible 14px Email label precedes a 44px input/button row by 8px, with 12px gaps, then a 12px hint follows after 12px.",
    hierarchy: "The section headline is 30px, increasing to 36px at 640px, semibold with tracking-tight and balanced wrapping. Read h2 and 18px lede, then Email, submit and the hint linked with aria-describedby. Slots: title 8 words, lede 25, submit 3, hint 15. The form has no avatars or opening display headline.",
    states: "Actions are 44px tall with 20px horizontal padding and rounded-md 6px radii. Primary hover changes neutral-900 to neutral-700. Colour transitions take 150ms. Every enabled control shows a 2px neutral-900 focus-visible outline offset 2px. The required 44px email input uses native validation, neutral-300 border and rounded-md. The hint is static.",
    responsive: "Below 1024px the form follows the copy with a 40px gap. Below 640px input and button stack full width. From 640px the form row is horizontal and the heading grows to 36px. At 1024px the two-column band begins.",
    usage: "Use for a subscription invitation after readers understand the topic. Choose hero-centered-form for a signup-led opening. Variations: use a privacy link in the hint, add a frequency note, or change the submit label to a waitlist action.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
