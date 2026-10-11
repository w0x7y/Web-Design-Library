import type { ComponentMeta } from '../../types'

export default {
  slug: "empty-state-offline-cache",
  name: "Empty state — Offline notice with saved-content rail",
  category: "empty-state",
  tags: [
    "split",
    "list",
    "compact"
  ],
  description: "An unavailable live view offers reconnect actions beside locally saved content. Use when people can still open a small set of cached records.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│[Offline]                         Saved content               │
│Live content is unavailable       Offline access note         │
│Connection explanation            Record label                │
│[Try reconnecting]                Saved 09:20 [Open copy]     │
│Last synced 09:20                 Collection label            │
│                                  Saved 08:45 [Open copy]     │
│                                  Offline editing note        │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. Equal columns at lg use 48px gaps. The notice is unboxed while the p-6 saved-content card holds two divided rows with 16px vertical padding. Each row pairs a name/timestamp with an underlined action.",
    hierarchy: "The Offline badge precedes the h1 and reconnect action. Saved content is secondary but actionable. Each repeated Open action names its item. Heading up to 6 words, lede 18, saved labels 4 and final note 10.",
    states: "The reconnect and saved-copy actions expose 2px keyboard-focus outlines. Offline is written text, so state does not rely on color. Cache lookup and connection detection require application integration; the example shows a fixed offline state.",
    responsive: "Below 1024px saved content follows the notice. Row actions wrap beneath copy when needed. Heading size and padding increase at sm.",
    usage: "Use when offline operation can expose saved copies. Choose empty-state-error-retry for an error without cached content. Variations: list a saved report, include cache age, or add a help link."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
