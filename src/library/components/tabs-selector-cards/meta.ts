import type { ComponentMeta } from '../../types'

export default {
  slug: "tabs-selector-cards",
  name: "Tabs — Selector cards above a content panel",
  category: "tabs",
  tags: ["grid", "stacked", "icons", "compact"],
  description: "Two descriptive selector cards switch a bordered panel between a prose preview and key-value summary. Use when the view choices need more context than short tab labels.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ ┌──────────────────────┐  ┌──────────────────────┐   │
│ │ Icon           Check │  │ Icon                 │   │
│ │ [Preview]            │  │ [Summary]            │   │
│ │ Read full explanation│  │ Scan the key values  │   │
│ └──────────────────────┘  └──────────────────────┘   │
│ ┌──────────────────────────────────────────────┐     │
│ │ Preview heading                              │     │
│ │ Describe the selected content and purpose.   │     │
│ └──────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px root grows to 448px at sm. Two equal selector cards use 12px gaps, 12px padding and at least 112px height. Each holds a 20px icon, check marker, 14px title and 12px description. The 16px-padded bordered content panel follows by 12px.",
    hierarchy: "Read Preview and Summary with their descriptions, then the selected panel. Titles use one word, descriptions under 5 words, panel headings under 3 words and body copy under 11 words. Each native radio identifies its controlled section.",
    states: "Preview starts selected. The selected card has a dark border, medium text and a check marker shown with opacity, plus a Highlight border in forced colors. Hover fills neutral-50, focus outlines the label and selecting Summary shows its key-value panel.",
    responsive: "The root grows from 288px to 448px at 640px. Selector cards remain side by side and their short descriptions wrap on mobile. The content region stays underneath both choices.",
    usage: "Use when switching between views whose purpose needs explanation. Choose short underline tabs for familiar view names. Variations: switch between description and details, change the default view, or add a small count to each card title.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
