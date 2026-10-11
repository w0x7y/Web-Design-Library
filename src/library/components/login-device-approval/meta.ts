import type { ComponentMeta } from '../../types'

export default {
  slug: "login-device-approval",
  name: "Login — Pending device approval with session details",
  category: "login",
  tags: [
    "split",
    "list",
    "compact"
  ],
  description: "A waiting message is paired with a session summary and approval steps. Use when access needs confirmation on another device.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Approval pending                 Access request               │
│Confirm this sign-in             Device      Desktop          │
│Approval explanation             Requested   09:41            │
│[Check approval] [Other method]  Code        482 106          │
│Status update note               1. Open security screen      │
│                                 2. Match code  3. Approve    │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A two-column grid at md uses 40px gaps. The message column begins with a bordered badge and ends in a wrapping action row. A p-6 session card uses definition rows with dividers and a three-step list.",
    hierarchy: "The pending badge gives context, then a 30px title and 18px explanation lead to Check approval. Session details use 14px labels and monospace request code. Limit heading to 5 words, lede to 18 and each step to 9.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "Below 768px the pending message precedes the session card; actions wrap. Definition rows preserve label/value grouping at narrow widths. Title size increases at sm.",
    usage: "Use for cross-device approval or administrator access confirmation. Choose login-verification-code when a user must type a code. Variations: show an approval expiry, add a device nickname, or swap the numbered steps for support instructions."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
