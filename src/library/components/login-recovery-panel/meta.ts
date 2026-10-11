import type { ComponentMeta } from '../../types'

export default {
  slug: "login-recovery-panel",
  name: "Login — Recovery steps beside email form",
  category: "login",
  tags: [
    "split",
    "list",
    "form"
  ],
  description: "A recovery explanation and numbered steps sit beside an email request form. Use to make the reset process clear before requesting a link.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Recover account access           Request recovery link        │
│Recovery explanation             Email                        │
│01 Enter account email           [name@example.com      ]     │
│02 Check your inbox              Email delivery hint          │
│                                 [Send recovery link]         │
│                                 [Back to sign in]            │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. Two equal columns with a 48px gap begin at lg. The left column holds an introduction and two numbered rows 24px apart. The right p-6 card contains one email field and a full-width submit.",
    hierarchy: "A 30px h1 precedes two 16px step titles, followed by a smaller form heading, email and submit. Heading up to 6 words, explanation up to 18, step titles up to 4, and hints up to 12.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "Under 1024px the explanation stacks above the form. Body copy wraps freely; the input and submit use the available card width. At sm the title and section padding increase.",
    usage: "Use for a dedicated password recovery step. Choose an inline recovery link for a simple sign-in screen. Variations: add a link-expiry note, explain administrator recovery, or use a username field."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
