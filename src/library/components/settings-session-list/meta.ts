import type { ComponentMeta } from '../../types'

export default {
  slug: "settings-session-list",
  name: "Settings — Active sessions with security footer",
  category: "settings",
  tags: [
    "stacked",
    "list",
    "compact"
  ],
  description: "A divided device-session list ends in a security action band. Use for reviewing current access and revoking old sessions.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Signed-in devices                                             │
│Desktop browser [Current session]         [Review session]    │
│Device summary  Last active: Now                              │
│Mobile browser                           [Revoke session]     │
│Device summary  Last active: 2 hours ago                      │
│Tablet browser                           [Revoke session]     │
│Device summary  Last active: Mar 14                           │
│Account security                         [Review security]    │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A divided list begins 32px below the introduction. Rows use 24px vertical padding, 16px gaps and minmax(0,1fr)/auto columns at sm. A p-6 wrapping security band follows after 32px.",
    hierarchy: "The h1 leads into device names, current-session badge, environment notes and last-active timestamps. Each repeated action names its device. H1 up to 5 words, lede 14, device label 4, detail 10.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "Under 640px each session action sits below its device copy. The security band wraps at all widths. Badges wrap beside the heading; no row uses a fixed content width.",
    usage: "Use to review account sessions without a full audit table. Choose a data table for many sessions with filtering. Variations: add a location slot, show authentication method, or include an all-other-sessions action."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
