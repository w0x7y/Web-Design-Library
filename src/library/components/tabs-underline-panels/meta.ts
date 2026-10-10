import type { ComponentMeta } from '../../types'

export default {
  slug: "tabs-underline-panels",
  name: "Tabs — Underline with panels",
  category: "tabs",
  tags: ["row", "compact"],
  description: "Three underline radio choices switch between a heading, supporting copy and compact label/value rows. Use for related views of one record.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│ [Overview]   [Details]   [Activity]                  │
│ ──────────                                           │
│ Panel heading                                        │
│ Two lines that explain the selected view.            │
│ Label                                          Value │
├──────────────────────────────────────────────────────┤
│ Label                                          Value │
├──────────────────────────────────────────────────────┤
│ Label                                          Value │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) white root expands to 448px (sm:w-[28rem]) at 640px. Three 40px-high labels sit on a 1px neutral-200 bottom border, with a 2px indicator overlapping it by 1px. Panels start 16px below the row. Each has a 16px semibold heading, 8px to 14px body copy and 16px to three definition rows with 8px vertical padding and 1px dividers.",
    hierarchy: "Read the selected view label, panel heading, short explanation and three right-aligned values. Labels are one word; headings up to 4 words; body up to 18 words; row labels and values up to 3 words. A labelled native radiogroup controls sections through aria-controls. This uses radio semantics.",
    states: "The first radio is checked by default. Checked labels show neutral-900 text and an underline; unchecked hover uses neutral-700 text and a neutral-300 underline. Only the checked panel displays. Native arrow keys change the selection. A focused radio draws a 2px neutral-900 outline offset 2px around its label through :has(:focus-visible). No disabled choices are shown.",
    responsive: "Below 640px labels divide the 288px row into equal thirds with centred text. At 640px the root is 448px, labels size to their content and have 24px gaps. Panels and definition rows remain stacked; body copy wraps naturally.",
    usage: "Use for compact record views with comparable metadata. Choose tabs-segmented-pills for lists or tabs-vertical-rail for a longer category rail. Variations: replace values with dates, add a fourth metadata row, or change the default selected view.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
