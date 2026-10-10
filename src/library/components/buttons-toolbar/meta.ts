import type { ComponentMeta } from '../../types'

export default {
  slug: "buttons-toolbar",
  name: "Buttons — Icon toolbar with primary action",
  category: "buttons",
  tags: ["row","icons","compact"],
  description: "A compact toolbar groups icon actions beside a primary save action. Use it when frequent editing tools need short accessible names and hover or focus tooltips.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│ ┌──────────────────────────────────────────────────┐ │
│ │ [Undo][Redo] | [Bold][Italic][Underline] [Save]  │ │
│ └──────────────────────────────────────────────────┘ │
│      Tooltip below focused or hovered icon           │
└──────────────────────────────────────────────────────┘`,
  brief: {
  "layout": "A 288px-wide (w-72) root widens to 448px (sm:w-[28rem]) and reserves 96px (h-24) for tooltips. One 46px-high white strip uses rounded-lg, a 1px neutral-200 border, p-1 and gap-1. Groups contain two and three 36px (size-9) ghost buttons with 20px icons, separated by 1px-wide, 20px-high dividers. A 36px compact primary action sits at ml-auto with px-3. Tooltips are absolute, top-full plus 8px, rounded-md, px-2 py-1, text-xs and nowrap.",
  "hierarchy": "History actions precede formatting actions, with a filled Save button last. Icons are named Undo, Redo, Bold, Italic and Underline through aria-label; matching tooltip text is aria-hidden. Primary text is Save below 640px and Save changes from 640px. Tooltips use one word each.",
  "states": "Enabled ghost buttons fill neutral-100 on hover; Save fills neutral-700. Focus-visible outlines are 2px neutral-900 with a 2px offset. Tooltips reveal on group-hover and group-focus-visible through a 150ms opacity transition, removed by reduced-motion preference. Redo is native disabled with 50% opacity and a not-allowed cursor, without a button hover fill.",
  "responsive": "Below 640px the strip fits 288px and the primary reads Save; at 640px it widens to 448px and adds changes. Icon groups remain on one row at every width. First and last tooltip alignments keep captions within the frame.",
  "usage": "Use for frequent editing actions with one distinct save action. Pick buttons-joined-group for labelled alternatives or counters. Variations: replace formatting tools with item actions, remove the disabled example, or rename the primary to Apply. Toolbar controls are 36px high."
},
  addedAt: '2026-10-10',
} satisfies ComponentMeta

