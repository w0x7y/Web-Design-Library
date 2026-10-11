import type { ComponentMeta } from '../../types'

export default {
  slug: "tabs-counted-toolbar",
  name: "Tabs — Counted views beneath a toolbar",
  category: "tabs",
  tags: ["stacked", "row", "numbers", "compact"],
  description: "A collection heading and add control sit above counted view choices and a short item list. Use when a collection needs both view selection and a nearby creation action.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Collection views                              [+]    │
│ [Incoming 8]          [Sent 12]         [Saved 6]    │
│ ──────────────────────────────────────────────       │
│ First incoming item                    Oct 11        │
│ Second incoming item                   Oct 10        │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px root grows to 448px at sm. Its header aligns a 14px heading with a 32px add button. A three-column counted selector starts 12px below with a bottom divider and 40px choices. The panel begins 16px later and contains two 12px-padded bordered rows with 12px gaps.",
    hierarchy: "Read Collection views and Add collection item, then the counted choices and selected list. View labels use one word, counts at most 3 digits, item titles at most 4 words and dates 6 characters. The panel is named by its radio label.",
    states: "Incoming starts selected. Its bottom border and medium text indicate selection, and CSS shows only its panel. Radio focus outlines its label; the add button has a standard offset outline and neutral-50 hover fill. Counts describe supplied collection totals.",
    responsive: "The root grows from 288px to 448px at 640px. All three view choices remain visible, while item titles wrap within flexible list rows if needed.",
    usage: "Use for a small collection with a common add action. Choose counted navigation links when views are separate pages. Variations: change collection labels, replace Add with Refresh, or show one summary row per panel.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
