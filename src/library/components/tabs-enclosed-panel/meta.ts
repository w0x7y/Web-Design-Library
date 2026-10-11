import type { ComponentMeta } from '../../types'

export default {
  slug: "tabs-enclosed-panel",
  name: "Tabs — Enclosed tabs on a bordered panel",
  category: "tabs",
  tags: ["row", "layered", "compact"],
  description: "Folder-shaped radio choices merge into a bordered content panel. Use to group a short explanation and action within one framed record view.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│ ┌──────────┬──────────┬──────────┐                   │
│ │ Overview │ Details  │ Notes    │                   │
│ ├──────────┴──────────┴──────────┴───────────────┐   │
│ │ Panel heading                                  │   │
│ │ Two lines that explain this content group.     │   │
│ │                                                │   │
│ │ [Secondary action]                             │   │
│ └────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) root expands to 448px (sm:w-[28rem]) at 640px. Three 40px folder labels have 16px horizontal padding, rounded-t-md corners and neutral-200 borders overlapping by 1px. Their row overlaps a rounded-b-lg rounded-tr-lg bordered panel by 1px. The panel has 16px padding, a 16px semibold heading, 8px to 14px body and 24px to a 44px outlined action.",
    hierarchy: "The checked folder visually joins its matching section. Read a one-word view label, a heading up to 4 words, body up to 18 words and one action up to 3 words. A labelled radiogroup supplies native choice semantics and aria-controls identifies each matching section.",
    states: "Overview is checked on entry. Unchecked folders are neutral-50 with neutral-600 text; hover makes them white with neutral-900 text. The checked folder has medium neutral-900 text, white fill and a white bottom border, raised to z-10. Focus raises a label to z-20 with a 2px outline offset 2px. Canvas keeps the joined bottom edge in forced colors. Arrow keys switch radios. Actions hover neutral-50 and show the standard focus outline.",
    responsive: "Below 640px the root is 288px and all three folder labels fit without wrapping. At 640px it becomes 448px. The panel remains stacked and its body text reflows; label heights and padding stay fixed.",
    usage: "Use for related content groups that benefit from a shared visible frame. Choose tabs-underline-panels for an unframed presentation or tabs-vertical-rail for more category labels. Variations: put notes first, replace the action with a compact definition list, or show a different view initially.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
