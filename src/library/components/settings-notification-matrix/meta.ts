import type { ComponentMeta } from '../../types'

export default {
  slug: "settings-notification-matrix",
  name: "Settings — Notification channel matrix",
  category: "settings",
  tags: [
    "split",
    "table",
    "form"
  ],
  description: "Notification topics cross two delivery channels in a compact table, with guidance beside it. Use when each topic can be enabled independently by channel.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Notification preferences                                      │
│Delivery channels                         Delivery guidance   │
│Topic                    Email   Push    Routine messages     │
│Account activity          [x]    [ ]     Essential notices    │
│Team updates              [x]    [ ]     [Quiet hours]        │
│Weekly summary            [x]    [ ]                          │
│[Save preferences]                                            │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. At lg, a 2fr/1fr grid uses 40px gaps. The table assigns half its width to topics and splits the rest between channels. Cells use 12px side and 16px vertical padding. The p-6 guidance panel sits beside it.",
    hierarchy: "The 30px h1 leads to a table caption, channel headings and individually labelled toggles. Topic names allow 3 words; guidance title 3 and explanation 18. Save preferences is the only filled action.",
    states: "Native checkboxes toggle each topic/channel independently and retain a checked glyph in forced colors. Every toggle, save action and link has a 2px keyboard-focus outline. Saving and quiet-hour navigation need host application integration.",
    responsive: "Below 1024px guidance follows the table. Fixed table layout and two short channel headings keep the matrix within 272px of content width at a 320px viewport. Heading increases at sm.",
    usage: "Use when users configure several notification types across channels. Choose settings-described-rows for one switch per preference. Variations: replace Push with SMS, add a topic group header, or place a frequency select below the table."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
