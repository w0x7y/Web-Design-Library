import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-grouped-label-column',
  name: 'Team — Groups with label column',
  category: 'team',
  tags: ['sidebar','grid','media'],
  description: "Two labelled groups of portraits beneath a split header and open-roles link. Use it when readers need to understand the teams within an organisation.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Heading about the people         Lede [Open roles]        │
│──────────────────────────────────────────────────────────│
│Leadership       ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│Group note       │  Image   │ │  Image   │ │  Image   │   │
│                 └──────────┘ └──────────┘ └──────────┘   │
│                 Name / Role  Name / Role  Name / Role    │
│──────────────────────────────────────────────────────────│
│Engineering      ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│Group note       │  Image   │ │  Image   │ │  Image   │   │
│                 └──────────┘ └──────────┘ └──────────┘   │
│                 Name / Role  Name / Role  Name / Role    │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section with a 1152px max-w-6xl container, 24px side padding and 64px vertical padding, 96px from 640px. At 1024px the header uses a 12-column grid with 32px gaps, a seven-column headline and a five-column lede/action region aligned to the bottom. Groups start 48px below. Each group has 48px vertical padding between 1px hairlines, a 32px label-to-people gap, and at 1024px a 12-column grid with a three-column label and nine-column people region. Each people grid has three 4:5 portraits, two columns below 640px and three from 640px with 24px gaps. Names follow portraits by 16px and roles by 4px.",
    hierarchy: "Read the 30px section headline (36px from 640px), 18px lede and Open roles link. Each 18px semibold group name and 14px note introduces 16px semibold member names and 14px roles. Slots: headline up to 8 words, lede up to 20, group label up to 3, group note up to 8, member name up to 22 characters and role up to 24.",
    states: "Open roles changes from neutral-900 to neutral-600 on hover and shows a 2px neutral-900 focus-visible outline offset 2px. Group labels, portraits and identity text are static. No open, selected or disabled states.",
    responsive: "Below 1024px the header regions and each group label stack above their content. At 640px portrait grids move from two to three columns, vertical section padding becomes 96px and the headline becomes 36px. At 1024px header and group regions use the specified 7/5 and 3/9 column splits. Text wraps inside every column without horizontal scrolling.",
    usage: "Use for a team divided into named groups. Pick team-portrait-grid for an undivided team or team-tile-directory for compact contact information. Variations: add a third group, show six people per group for full rows at both breakpoints, or replace group notes with short responsibility descriptions.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

