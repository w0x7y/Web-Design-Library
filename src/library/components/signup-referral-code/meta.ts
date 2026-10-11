import type { ComponentMeta } from '../../types'

export default {
  slug: "signup-referral-code",
  name: "Sign-up — Referral entry with benefit summary",
  category: "signup",
  tags: [
    "split",
    "form",
    "compact"
  ],
  description: "An invitation-code field and email form sit opposite a concise referral summary. Use when a code unlocks a specific account offer.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Join with a referral            Referral overview             │
│Lede                            Account benefit title         │
│Referral code                   Benefit description           │
│[ABCD-1234                   ]  Offer duration   30 days      │
│Email                           Account type  Individual      │
│[name@example.com            ]  [Offer terms]                 │
│[Continue] [Without a code]                                   │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 48px-gap two-column layout starts at md. The left form uses 24px-separated fields and a primary action. The right p-6 card contains offer copy and two definition rows.",
    hierarchy: "The h1 explains referral access, then code and email precede Continue. The referral summary confirms eligibility context. Limit h1 to 6 words, lede 16, benefit title 5 and explanation 18.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "Below 768px the benefit summary follows the entry form. Label/value pairs can wrap without forcing the column wider. Heading grows at 640px.",
    usage: "Use when a referral code changes registration eligibility or terms. Choose signup-invite-accept for an invitation already identified by a link. Variations: show a referrer name, replace duration with credit, or add an optional organization field."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
