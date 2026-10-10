import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-stacked-cards',
  name: 'Data table — Rows become cards on mobile',
  category: 'data-table',
  tags: ['stacked', 'table', 'list'],
  description:
    'A member table that becomes labelled cards on small screens. Use when each row has an identity and several attributes that must remain readable on mobile.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌───────────────────────────────────────────────────────────┐
│ Members                                 [Manage access]   │
│ Description                                               │
│ 5 members          3 active          2 roles              │
│ ──────────────────────────────────────────────────────    │
│ Name / email        Role     Status   Last active  Edit   │
│ Avatar Alex Rivera  Admin    Active   Mar 14       [Edit] │
│        Email                                              │
│ Avatar Jordan Lee   Member   Invited  Mar 13       [Edit] │
│        Email                                              │
│ Avatar Sam Taylor   Member   Active   Mar 12       [Edit] │
│        Email                                              │
│ ...    Five rows                                          │
│ 5 members                                                 │
└───────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 1024px max-w-5xl shell with 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A header and right-aligned text link are followed by a three-fact flex strip with a bottom hairline, 24px top/bottom spacing and 32px gaps. A five-column native table follows by 24px. Desktop cells use 16px horizontal padding and 12px/16px header/body vertical padding. Below 768px each row is a rounded-lg bordered card with 16px padding, 12px gap-3 and 16px separation; its identity leads four 96px/value grid pairs.',
    hierarchy:
      'A 30px heading, 36px at 640px, precedes a 16px description and Manage access link. Inline counts summarize 5 members, 3 active and 2 roles. Five identities have 40px avatars, 14px names and 12px emails; Role, worded Status badge, Last active and Edit follow. Each Edit names its member. Slots: description 20 words, names 24 characters, emails 32, roles/statuses 1 word, dates 6 characters.',
    states:
      'Table headers and status badges are static. Links underline and turn neutral-600 on hover. Focusable scroll regions and all enabled controls show 2px neutral-900 outlines offset 2px. No JavaScript filtering, sorting, pagination or persistence is included. Manage access and Edit are underlined links with visible focus. There are no selected rows, expansion or disabled actions. Native table, rowgroup, row, columnheader, rowheader and cell roles remain explicit when display changes.',
    responsive:
      'At 768px the table, row groups, rows and cells return to native table display, with column headers visible and card radii and horizontal/bottom borders removed. Below 768px rows and cells use grid/block layouts; each value gains a visible aria-hidden column label and the header stays available to assistive technology via sr-only. Below 640px the header stacks. Email can break and cards fit 320px without horizontal scrolling.',
    usage:
      'Use for directories or ledgers where every attribute must remain visible on mobile. Pick data-table-priority-columns when a dense numeric table must retain rows, or data-table-toolbar-pagination for longer lists. Variations: use invoice identities, replace roles with record types, or show a secondary phone line.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
