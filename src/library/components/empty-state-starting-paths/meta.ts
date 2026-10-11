import type { ComponentMeta } from '../../types'

export default {
  slug: "empty-state-starting-paths",
  name: "Empty state — Empty workspace with starting paths",
  category: "empty-state",
  tags: [
    "grid",
    "stacked",
    "spacious"
  ],
  description: "Three equally weighted first-content routes sit under an empty-workspace explanation. Use when manual creation, import and examples are all valid starting choices.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Choose a starting point                                       │
│Workspace explanation                                         │
│01                     02                   03                │
│Create manually        Import a file        Use an example    │
│Route description      Route description    Route description │
│[Create first item]    [Start import]        [Open examples]  │
│                [Getting-started guide]                       │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. Three equal md columns use 24px gaps and p-6 cards below a 40px-separated introduction. Each card places a small route number above its title, description and underlined action. A centered guide link follows after 32px.",
    hierarchy: "The h1 explains the empty workspace; equal card titles present alternative routes rather than required steps. Numbers index choices only. Heading up to 6 words, lede 18, route titles 3 and descriptions 12.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "Below 768px route cards form a vertical list in the same order. Card heights grow naturally with copy. At sm the h1 and padding increase.",
    usage: "Use when there are several meaningful first-content choices. Choose empty-state-first-run-checklist for a mandatory sequence. Variations: replace examples with a template chooser, offer a collaborator invitation, or show two routes."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
