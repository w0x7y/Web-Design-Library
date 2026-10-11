import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-permission-matrix",
  name: "Toggles — Permission checkbox matrix",
  category: "toggles",
  tags: ["table", "form", "compact"],
  description: "A permission table places native checkboxes at the intersections of three groups and three capabilities. Use when each capability can be enabled independently.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Permissions                                          │
│ Group             View       Edit       Share        │
│ Group name        [x]        [x]        [x]          │
│ Another group     [x]        [ ]        [ ]          │
│ Final group       [x]        [ ]        [ ]          │
│ Choose permissions for each group.                   │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px bordered card grows to 448px at sm with 16px padding. A full-width native table uses 12px headers, 12px vertical row padding and 1px top dividers. Three capability columns center 16px checkboxes. The shared hint follows by 12px.",
    hierarchy: "Read Permissions, column headings, then each group across View, Edit and Share. Each checkbox names its capability and group through aria-label and references the shared hint. Group names use at most 2 words and capabilities one word.",
    states: "Native checkboxes use accent-neutral-900 and standard 2px offset focus outlines. The first group starts with every permission; other groups start with View only. Each checkbox toggles independently and keeps a native checkmark in forced colors.",
    responsive: "The root grows from 288px to 448px at 640px. The four table columns remain together; short row labels can wrap without widening the checkbox columns.",
    usage: "Use to edit a small independent permission matrix. Choose a switch list for settings that need descriptions. Variations: change the group names, show two capability columns, or disable a managed permission.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
