import type { ComponentMeta } from '../../types'

export default {
  slug: "tabs-segmented-pills",
  name: "Tabs — Segmented pills with panel",
  category: "tabs",
  tags: ["row", "list", "compact"],
  description: "A three-segment radio track switches between compact avatar lists. Use for inbox views, saved items or another short collection.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│ ┌──────────────────────────────────────────────┐     │
│ │ [All]         [Unread]         [Saved]       │     │
│ └──────────────────────────────────────────────┘     │
│ AR  Item title                             9:41      │
│     Supporting detail                                │
│ JL  Sender name                            8:20      │
│     Message preview                                  │
│ SK  Saved item title                       7:05      │
│     Context for the item                             │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) root grows to 320px (sm:w-80) at 640px. A rounded-lg neutral-100 track with 4px padding contains three equal 32px-high rounded-md segments. The list starts 16px below and contains three 56px rows with 12px gaps, 40px initials avatars, a flexible two-line text column and right-aligned 12px times. Rows have neutral-200 dividers.",
    hierarchy: "The checked segment identifies the current collection. Each list row reads from avatar to 14px medium title, 12px neutral-500 context and time. Segment labels use one word; titles up to 4 words; context up to 4 words; times use short clock or date formats. Long text truncates inside its flexible column.",
    states: "All is selected initially. Checked segments have a white fill, neutral-200 border, small shadow and neutral-900 medium text; unchecked segments have neutral-600 text and hover to neutral-900. Native radios support arrow keys and display only their matching list. Label focus has a 2px neutral-900 outline offset 2px. A Highlight border preserves the checked segment in forced colors. No disabled choices are shown.",
    responsive: "The root changes from 288px to 320px at 640px. Track columns, row heights and typography remain constant. The middle text column shrinks and truncates so avatars and times retain their widths.",
    usage: "Use for related short collections whose row anatomy is identical. Pick tabs-underline-panels for prose and metadata or tabs-link-overflow for page navigation. Variations: use counts instead of times, swap initials for a permitted icon placeholder, or show a different collection by default.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
