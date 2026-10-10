import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-portrait-grid',
  name: 'Team — Centred header with portrait grid',
  category: 'team',
  tags: ['centered','grid','media'],
  description: "A centred introduction above eight portraits with names, roles and contact links. Use it for an equally weighted overview of a team.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│                        Eyebrow                           │
│                Heading about the people                  │
│                   Short introduction                     │
│┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐   │
││   Image   │ │   Image   │ │   Image   │ │   Image   │   │
│└───────────┘ └───────────┘ └───────────┘ └───────────┘   │
│ Name / Role   Name / Role  Name / Role   Name / Role     │
│ [Email] [Profile] repeated for each person               │
│┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐   │
││   Image   │ │   Image   │ │   Image   │ │   Image   │   │
│└───────────┘ └───────────┘ └───────────┘ └───────────┘   │
│ Name / Role   Name / Role  Name / Role   Name / Role     │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section with a 1152px max-w-6xl container, 24px px-6 side padding and 64px py-16 vertical padding, rising to 96px at 640px. The centred header has an eyebrow, headline 12px below it and a lede 16px later capped at 672px (max-w-2xl). Eight people begin 64px below in a two-column grid with 16px column and 40px row gaps. From 640px the grid has four columns and 24px column gaps; from 1024px column gaps are 32px. Each 4:5 portrait has 8px corners, with the name 16px below, the role 4px later and two 20px icon links 12px later with a 16px gap.",
    hierarchy: "Read the 14px eyebrow, 30px headline (36px from 640px), 18px lede, then equal-weight 16px semibold names and 14px roles. Slots: eyebrow up to 4 words, heading up to 8, lede up to 22, each name up to 22 characters and role up to 24. Every person has accessible Email and Profile icon links naming the person.",
    states: "Icon links change from neutral-600 to neutral-900 on hover and show a 2px neutral-900 focus-visible outline offset 2px. Portraits and identities remain static. No open, selected or disabled states.",
    responsive: "Below 640px eight people fill four complete rows of two. At 640px they form two complete rows of four and the heading grows to 36px. At 1024px only the column gap grows from 24px to 32px. Names and roles wrap within their columns; the header stays centred.",
    usage: "Use for an equal-weight introduction to a small team. Pick team-grouped-label-column when departments matter, or team-bio-rows for long biographies. Variations: show four or twelve people, replace profile links with another contact channel, or reorder members alphabetically.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

