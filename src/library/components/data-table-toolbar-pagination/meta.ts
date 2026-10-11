import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-toolbar-pagination',
  name: 'Data table — Toolbar, tabs and pagination',
  category: 'data-table',
  tags: ['stacked', 'table', 'compact'],
  description:
    'A status-tabbed table with search, filters, sort links and pagination. Use for a larger record list that needs several ways to find and browse items.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│ Items                              [Export] [New item]   │
│ Summary                                                  │
│ [All 64] [Active 48] [Pending 12] [Archived 4]           │
│ ──────────────────────────────────────────────────────   │
│ [Search items       ] [Status v] [More filters]          │
│ ──────────────────────────────────────────────────────   │
│ ID ^   Name ^         Date ^    Units ^ Amount ^ Status  │
│ 001    Alex Rivera    Mar 14    12      $240     Active  │
│        Secondary line                                    │
│ 002    Jordan Lee     Mar 13    8       $160     Pending │
│ 003    Sam Taylor     Mar 12    10      $200     Active  │
│ ...    Eight rows                                        │
│ ──────────────────────────────────────────────────────   │
│ Showing 1-8 of 64       [<] [1] [2] [3] ... [8] [>]      │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 1280px max-w-7xl section with 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Header actions sit opposite the title from 640px. Four status links follow after 32px over a bottom hairline. A toolbar follows after 24px, then a bordered rounded-lg scroll region after 24px. Its six-column native table has an 832px min-w-[52rem] width, 16px horizontal cell padding and 12px/16px header/body vertical padding. Eight rows precede a 24px-spaced footer and 36px pagination controls.',
    hierarchy:
      'A 30px heading, 36px from 640px, and 16px summary precede Export and New item. Tabs show four statuses with count badges. The table shows ID link, name and email, date, right-aligned units and amount, and a worded status badge. Every header has a named sort link and 16px chevron; Date is initially marked descending. Slots: summary 20 words, names 24 characters, emails 32, dates 12, action labels 2, status labels 1. Footer reports 1–8 of 64 and pages 1, 2, 3, 8.',
    states:
      'Primary actions fill neutral-700 on hover; secondary actions fill neutral-50. Controls have 2px neutral-900 focus-visible outlines offset 2px. Buttons are 44px tall with 6px rounded-md corners; inputs and selects are 40px tall. Colour transitions take 150ms. Table headers and status badges are static. Links underline and turn neutral-600 on hover. Focusable scroll regions and all enabled controls show 2px neutral-900 outlines offset 2px. No JavaScript filtering, sorting, pagination or persistence is included. Rows fill neutral-50 on hover. All and page 1 have aria-current=page; All has a 2px bottom border, and page 1 a filled neutral-900 face with white text. Previous is natively disabled and not focusable. Other page links and sorting links are illustrative anchors.',
    responsive:
      'Below 640px header actions, toolbar fields and footer stack. Tab counts and Previous/Next words become sr-only, retaining accessible names. Pagination wraps if needed. From 640px the search flexes, the select is 160px and the toolbar is horizontal. The table keeps its 832px width and scrolls inside its labelled region, avoiding page overflow at 320px.',
    usage:
      'Use for lists with status destinations, search and many pages. Pick data-table-sidebar-filters for deeper filtering or data-table-stacked-cards when mobile identity details matter more than dense columns. Variations: add a date-range control, replace Units with quantity, or use cursor-based Previous/Next navigation.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
