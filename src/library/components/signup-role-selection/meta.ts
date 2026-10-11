import type { ComponentMeta } from '../../types'

export default {
  slug: "signup-role-selection",
  name: "Sign-up — Purpose rail beside credentials",
  category: "signup",
  tags: [
    "sidebar",
    "list",
    "form"
  ],
  description: "A vertical account-purpose selector sits beside a bordered credential pane. Use to adapt onboarding around the intended account role.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Choose how you will use your account                          │
│Account purpose                 Create your account           │
│(o) Personal use                Email                         │
│    Purpose description         [name@example.com         ]   │
│( ) Team use                    Password                      │
│    Purpose description         [Password                 ]   │
│( ) Organization use            Password hint                 │
│    Purpose description         [Create account]              │
│                                [Already a member?]           │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 1fr/1.4fr grid starts at lg with 40px gaps. The left fieldset has three vertically divided purpose options with 24px vertical padding and 16px input/copy gaps. The p-6 credential card on the right spaces fields by 24px and ends in a full-width primary action.",
    hierarchy: "The 30px h1 leads to account purpose, then the credential card title, email, password and Create account. Purpose titles allow 3 words, descriptions 9, headline 11 and lede 16. Each radio is described by its own purpose hint.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "Below 1024px the vertical purpose selector precedes the credential card. Both stay in one column on mobile; options retain their horizontal radio/copy relationship. Heading and section padding increase at sm.",
    usage: "Use when account purpose affects subsequent onboarding. Choose signup-plan-choice for a horizontal price comparison before registration. Variations: use two purposes, show an organization-access hint, or replace the password with an invitation code."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
