import type { ComponentMeta } from '../../types'

export default {
  slug: "login-verification-code",
  name: "Login — Verification code with delivery rail",
  category: "login",
  tags: [
    "split",
    "row",
    "form"
  ],
  description: "Six code inputs sit beside delivery details and recovery links. Use as an explicit second verification step after account identification.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Enter verification code                  Delivery details     │
│Code delivery explanation                name@example.com     │
│Verification code                        Delivery hint        │
│[0] [0] [0] [0] [0] [0]                  [Send again]         │
│Code expiration hint                     [Change email]       │
│[Verify account]                         [Use recovery]       │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 2fr/1fr grid with 48px gaps starts at lg. The wider form holds a six-column code row with 8px gaps and 48px-high fields. The delivery rail uses neutral-50 and p-6.",
    hierarchy: "The 30px h1 leads to a 14px code legend, six single-character inputs and Verify account. The delivery rail contains one email, a 10-word note and three recovery actions. Heading up to 6 words; lede up to 16.",
    states: "Each input accepts one numeric character and has a visible keyboard-focus outline; native validation enforces the pattern. Users tab between fields. Resend and verification require application integration; no automatic advance or countdown is included.",
    responsive: "Below 1024px the delivery panel moves below the form. Six min-w-0 inputs share the available width at 320px. The title and section padding increase at 640px.",
    usage: "Use for a second factor or email access code. Choose login-magic-link when users follow an email link instead. Variations: use four digits, add a masked phone destination, or show a recovery-key option."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
