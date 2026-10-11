import type { ComponentMeta } from '../../types'

export default {
  slug: "empty-state-maintenance-window",
  name: "Empty state — Maintenance notice with time window",
  category: "empty-state",
  tags: [
    "centered",
    "row",
    "numbers"
  ],
  description: "A centered maintenance notice is followed by a three-part service window. Use when temporarily unavailable content has an announced return time.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│                 [Scheduled maintenance]                      │
│               Content will return shortly                    │
│               Affected-feature explanation                   │
│            [Service status] [Contact support]                │
│Started              Expected return       Affected area      │
│09:00 UTC            10:00 UTC             Account content    │
│                 Saved information note                       │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. The notice uses a centered max-w-3xl introduction and centered wrapping actions. A three-column sm definition band sits 48px below, with top/bottom borders, 32px vertical padding and 24px gaps.",
    hierarchy: "The maintenance badge gives status before the 30px h1. The primary status link precedes support. Times and affected area use 20px semibold values. Heading up to 6 words, lede 14 and final note 14.",
    states: "Links and controls have a 2px neutral-900 keyboard-focus outline offset by 2px. Filled actions change to neutral-700 on hover, outlined actions to neutral-50, and underlined links to neutral-600. Native form fields retain browser validation; controls describe structure and need application integration for persistence or navigation.",
    responsive: "The service window becomes one column below 640px. Actions wrap centrally, and the heading grows at sm. No fixed-height notice constrains longer copy.",
    usage: "Use for planned downtime with an expected return. Choose an error/retry state when no return time is known. Variations: show a date spanning midnight, include partial availability, or add a read-only access link."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
