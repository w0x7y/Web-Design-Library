import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-error-retry',
  name: "Empty state — Error with retry",
  category: 'empty-state',
  tags: ["stacked", "icons", "compact"],
  description: "A retry panel with paired actions and optional technical details. Use it when content could not load and a retry may recover it.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│Alert icon   Could not load                           │
│Title for the load error                              │
│Two-line recovery explanation                         │
│[Try again]          [Status page]                    │
│[Technical details v]                                 │
│  Error code and timestamp when open                  │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72), 384px from 640px (sm:w-96), rounded-lg card with a 1px neutral-200 border and p-6. A 20px alert glyph and status label lead the stack. The heading has 16px top spacing, explanation 8px, and a two-column action grid 20px with an 8px gap. A details control follows by 16px; its neutral-50 diagnostic box has p-3 and 8px top spacing.",
    hierarchy: "Status first, then a 16px semibold error heading, 14px two-line explanation, 44px retry and status actions, and a 14px disclosure. Heading up to 6 words, explanation up to 12. Diagnostic text is 12px monospace with an error code and semantic timestamp.",
    states: "All links and buttons show a 2px neutral-900 focus-visible outline offset 2px. Primary actions hover to neutral-700, secondary actions to neutral-50, and underlined links to neutral-600. Transitions use the default 150ms timing. Technical details is closed initially. Native summary toggles the diagnostic box and also shows the standard keyboard outline. There are no loading or disabled variants.",
    responsive: "The panel remains stacked and actions remain two equal columns at every width. Only width changes at 640px. Explanation stays short so the expanded diagnostics also fit within the 384px-high element frame.",
    usage: "Use for a recoverable loading failure. Pick empty-state-permission when access is the cause. Variations: replace the code with a request ID, link to support instead of status, or add a last-attempt timestamp.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
