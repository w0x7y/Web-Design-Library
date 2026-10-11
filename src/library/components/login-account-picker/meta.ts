import type { ComponentMeta } from '../../types'

export default {
  slug: "login-account-picker",
  name: "Login — Account picker with credential pane",
  category: "login",
  tags: [
    "split",
    "list",
    "form"
  ],
  description: "Saved accounts form a selection column beside the password pane. Use when people return to one of several accounts.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Choose an account                                             │
│Saved accounts                   Confirm your identity        │
│(o) AR Alex Rivera               Password                     │
│( ) JL Jordan Lee                [Password              ]     │
│[Use another account]            [Sign in]                    │
│                                 [Forgot password?]           │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 32px-gap two-column grid begins 40px below the heading at md. The left fieldset lists two 80px identity rows; the right bordered p-6 card contains a password field and full-width 44px action.",
    hierarchy: "A 30px h1 leads to saved names, then the password and Sign in. Names are at most 24 characters and email addresses one truncated line. The supporting headline allows 6 words and the password hint 12 words.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "Below 768px the account list precedes the credential card; columns become equal at md. Account emails truncate while labels and actions remain visible. The h1 increases to 36px at sm.",
    usage: "Use for returning users with several remembered identities. Choose a regular email/password form for first-time access. Variations: add an organization under each identity, show only one saved account, or replace the password with an access key."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
