import type { ComponentMeta } from '../../types'

export default {
  slug: "badges-label-value-tokens",
  name: "Badges — Joined label and value tokens",
  category: "badges",
  tags: ["grid", "row", "compact"],
  description: "Four joined metadata tokens divide a muted field label from its current value. Use for a small attribute summary where each value needs its own label.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Item attributes                                      │
│ [Priority | High]            [Status | Draft]        │
│ [Owner    | Alex]            [Version | 2.4]         │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px root grows to 416px at sm. A 14px heading precedes a two-column token grid by 12px, with 8px gaps. Each rounded-full token has a 1px border, a neutral-50 label segment, a vertical divider and a flexible centered value segment. Both segments use 10px horizontal and 4px vertical padding.",
    hierarchy: "Read the heading, then each field label and its value in row order. Labels use one word and values at most 7 characters. The divider belongs to the visual grouping; each token remains one continuous text pair.",
    states: "These tokens are static metadata with no hover or focus states. Labels and values distinguish every attribute without color. They have no selected or disabled control behavior.",
    responsive: "The root grows from 288px to 416px at 640px. Tokens stay in two columns and keep their shared pill anatomy; values remain short enough to fit the mobile segments.",
    usage: "Use when several compact values need explicit labels. Choose removable filter chips for editable selections. Variations: replace Owner with Team, add a numeric revision, or display two tokens in one row.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
