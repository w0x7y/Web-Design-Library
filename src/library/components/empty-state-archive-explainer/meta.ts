import type { ComponentMeta } from '../../types'

export default {
  slug: "empty-state-archive-explainer",
  name: "Empty state — Empty archive with retention summary",
  category: "empty-state",
  tags: [
    "split",
    "compact",
    "list"
  ],
  description: "An empty archive message sits opposite a retention-policy summary. Use to distinguish intentionally empty archived content from missing active content.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│[Archive]                        Retention overview           │
│No archived items                Archive period               │
│Archive explanation              30 days                      │
│[Browse active items]            Restore access               │
│[Learn about archiving]           Role description            │
│                                 Permanent removal            │
│                                 Final deletion note          │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. Two equal columns at md use 48px gaps and vertical centering. The empty-message column starts with a badge, then headline and action row. A p-6 neutral-50 retention panel holds three divided rows.",
    hierarchy: "The archive badge gives context before the 30px h1 and active-items action. Retention uses 16px panel title and 14px labels. Heading up to 5 words, lede 18 and retention descriptions 10 each.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "Below 768px the retention summary stacks under the message. Actions wrap and definition descriptions use the card width. Title and section padding grow at sm.",
    usage: "Use for an empty archive where retention rules deserve context. Choose empty-state-no-results for an unsuccessful search. Variations: add an administrator contact, use a restore deadline, or replace retention details with archive instructions."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
