import type { ComponentMeta } from '../../types'

export default {
  slug: "badges-milestone-strip",
  name: "Badges — Milestone status strip",
  category: "badges",
  tags: ["row", "numbers", "compact"],
  description: "Three milestone columns pair a status badge with a short title and date beneath a continuous rule. Use to summarize progress across a small sequence.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Milestones                                           │
│ ──────────────────────────────────────────────       │
│ [Complete]         [Current]         [Pending]       │
│ First milestone    Next milestone   Final milestone  │
│ Oct 08             Oct 11           Oct 18           │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px root grows to 448px at sm. A 14px heading leads a three-column list by 12px. Each column shares a 1px top rule and 12px top padding, with a centered status pill, 8px title gap and 4px date gap.",
    hierarchy: "Scan the milestones from left to right. Each column reads status, title and date. Current uses dark fill and medium text, while Complete adds a check icon. Titles use at most 2 words, statuses one word and dates 6 characters.",
    states: "The strip is informational and has no focusable controls, hover or selected input states. Words and the check icon explain progress without relying on fill alone. Replace the status and date values as the surrounding data changes.",
    responsive: "The three columns remain in one row. The root grows from 288px to 448px at 640px; titles may wrap to two lines on mobile while dates and badges stay compact.",
    usage: "Use for a short sequence with one current milestone. Choose a status list when item updates are independent. Variations: omit dates, mark all milestones complete, or replace dates with short duration values.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
