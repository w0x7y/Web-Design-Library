import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-row-selection',
  name: 'Data table — Row selection with bulk actions',
  category: 'data-table',
  tags: ['stacked', 'table', 'form', 'compact'],
  description:
    'Native row checkboxes reveal a shared bulk-action bar. Use when records need selection for operations that apply to several items.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌─────────────────────────────────────────────────────────┐
│ Items for review                                        │
│ Description                                             │
│ ┌────────────────────────────────────────────────────┐  │
│ │ Bulk actions          [Archive] [Assign] [Delete]  │  │
│ ├────────────────────────────────────────────────────┤  │
│ │ Select Name         Owner   Status  Date    Amount │  │
│ │ [x]    Item 001     Alex    Active  Mar 14  $240   │  │
│ │ [ ]    Item 002     Jordan  Pending Mar 13  $160   │  │
│ │ [ ]    Item 003     Sam     Active  Mar 12  $200   │  │
│ │ ...    Six rows                                    │  │
│ └────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 1280px max-w-7xl shell with 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A bordered rounded-lg group container begins 32px below the heading and description. Its action bar reserves space with invisible, has 16px p-4 padding and flex-wrapped controls. A focusable inner scroll region holds six native table rows with 16px horizontal and body vertical padding, and 12px header padding. The table has a 448px minimum below 768px and a 768px minimum from md.',
    hierarchy:
      'A 30px heading, 36px at 640px, precedes a 16px description of selection. The revealed 14px bar label introduces Archive, Assign and Delete. Each row has a named checkbox, item reference, owner, worded status badge, date and right-aligned 14px tabular amount. Slots: description 18 words, item references 8 characters, owner names 24, statuses 1 word, dates 12. There is no select-all or live selected count.',
    states:
      'Primary actions fill neutral-700 on hover; secondary actions fill neutral-50. Controls have 2px neutral-900 focus-visible outlines offset 2px. Buttons are 44px tall with 6px rounded-md corners; inputs and selects are 40px tall. Colour transitions take 150ms. Table headers and status badges are static. Links underline and turn neutral-600 on hover. Focusable scroll regions and all enabled controls show 2px neutral-900 outlines offset 2px. No JavaScript filtering, sorting, pagination or persistence is included. The first row starts checked to show the bulk-action bar on entry. group-has-[:checked]:visible reveals the action bar only while any checkbox is checked; invisible keeps its buttons out of keyboard navigation. has-[:checked] fills selected rows neutral-50 and native checkbox marks remain visible in forced colours. Bulk actions name selected rows and are static buttons. No scripted count or selection synchronization.',
    responsive:
      'Below 768px Owner and Date headers and cells are hidden, leaving Selection, Name, Status and Amount. The table can scroll only inside its focusable labelled region. The action bar wraps into multiple lines without moving the table on selection because its space is reserved. The section fits 320px; section padding and headline size increase at 640px.',
    usage:
      'Use when bulk operations are a central table task. Pick data-table-toolbar-pagination for browsing without selection or data-table-expandable-rows for detail inspection. Variations: replace Archive with Export, use a role assignment action, or show pending records with approval actions.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
