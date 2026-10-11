import type { ComponentMeta } from '../../types'

export default {
  slug: "buttons-item-row-actions",
  name: "Buttons — Inline actions below item rows",
  category: "buttons",
  tags: ["list", "stacked", "compact"],
  description: "Two divided item summaries each carry a row of text actions below the title and update date. Use when item commands should remain visible without a menu.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Item title                         Updated Mar 14    │
│ [Edit]       [Duplicate]       [Remove]              │
├──────────────────────────────────────────────────────┤
│ Another item title                 Updated Mar 14    │
│ [Edit]       [Duplicate]       [Remove]              │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px list grows to 416px at sm with 16px padding, 1px row dividers and 12px vertical row padding. Each title/date summary uses a justified flex row; three underlined actions follow by 8px with 16px gaps.",
    hierarchy: "Read each item title, update date and its three actions before moving to the next row. Titles use at most 4 words, metadata 3 words and action labels one word. Repeated button labels name their item through aria-label.",
    states: "All text buttons hover neutral-600 and show a 2px focus outline offset 2px. No selected or disabled items are shown. Edit, Duplicate and Remove are commands for the host to implement.",
    responsive: "The root is 288px below 640px and 416px from 640px. Action rows wrap as needed while title and date retain their aligned reading order. Keep item titles short enough to fit the mobile summary.",
    usage: "Use for a short collection with a few frequently used item commands. Choose an overflow disclosure for many secondary actions. Variations: replace Duplicate with Share, omit the date, or display a single item row.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
