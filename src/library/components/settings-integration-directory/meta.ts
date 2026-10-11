import type { ComponentMeta } from '../../types'

export default {
  slug: "settings-integration-directory",
  name: "Settings — Integration directory with access scopes",
  category: "settings",
  tags: [
    "grid",
    "form",
    "compact"
  ],
  description: "Three connection cards expose status, permissions and a per-provider action. Use to compare and manage available account connections.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Connected services                                            │
│Calendar provider    Storage provider    Messaging provider   │
│[Connected]          [Available]         [Available]          │
│Connection summary   Connection summary  Connection summary   │
│Access scope         Access scope        Access scope         │
│Read events          Read files          Send updates         │
│[Manage connection]  [Connect]           [Connect]            │
│Revocation note                                               │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. Three equal cards at md use 24px gaps, 24px padding and status badges in a wrapping top row. Access-scope definitions sit 24px beneath descriptive copy, followed by outlined actions after 24px.",
    hierarchy: "The h1 precedes provider names, status, description, access scope and action. Provider titles allow 3 words, descriptions 12 and access scope 5. The final note uses at most 16 words.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "Below 768px all provider cards stack. Within each card the status wraps beside its heading without forcing width. At 640px the title and section padding increase.",
    usage: "Use for a small directory of independently managed integrations. Choose settings-session-list for account devices. Variations: add a last-sync date, group by connection purpose, or show a required-access notice."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
