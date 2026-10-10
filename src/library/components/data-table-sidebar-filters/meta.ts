import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-sidebar-filters',
  name: 'Data table — Filter sidebar',
  category: 'data-table',
  tags: ['sidebar', 'table', 'form'],
  description:
    'Collapsible filter groups beside an applied-filter row and record table. Use when a list needs several filter dimensions visible at once.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│ Items                        24 results         [Export] │
├──────────────────┬───────────────────────────────────────┤
│ [Search]         │ Applied: Active [x] Alex Rivera [x]   │
│ Status v         │ ┌──────────────────────────────────┐  │
│ [x] Active (24)  │ │ Name    Owner Status Date  Amount│  │
│ [ ] Pending (12) │ │ Item001 Alex  Active Mar14 $240  │  │
│ [ ] Archived (4) │ │ Item002 Alex  Active Mar13 $160  │  │
│ Owner >          │ │ Item003 Alex  Active Mar12 $200  │  │
│ Date >           │ │ ... Six rows                     │  │
│ [Clear filters]  │ └──────────────────────────────────┘  │
│                  │ Showing 1-6 of 24                     │
└──────────────────┴───────────────────────────────────────┘`,
  brief: {
    layout:
      'A 1280px max-w-7xl shell with 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A header row has title, result count and Export. After 32px a grid uses a 256px sidebar and flexible main column at 1024px, separated by 32px gap-8. The sidebar has a 40px search field, three rounded-lg details groups with 16px padding and a Clear filters link. Applied filter badges wrap above a bordered rounded-lg focusable table region by 16px. Its five-column six-row table is at least 576px wide; cells use 16px horizontal and 12px/16px header/body vertical padding.',
    hierarchy:
      'A 30px heading, 36px at 640px, is paired with a 14px result count. A visible search label precedes Status, Owner and Date groups, each with three native checkboxes and 12px tabular counts. Active and Alex Rivera applied badges have individually named remove links. Table rows show an item reference, owner, worded Active badge, date and right-aligned tabular amount. Slots: group labels 1 word, owner names 24 characters, item references 8, dates 12, filter names 3 words.',
    states:
      'Primary actions fill neutral-700 on hover; secondary actions fill neutral-50. Controls have 2px neutral-900 focus-visible outlines offset 2px. Buttons are 44px tall with 6px rounded-md corners; inputs and selects are 40px tall. Colour transitions take 150ms. Table headers and status badges are static. Links underline and turn neutral-600 on hover. Focusable scroll regions and all enabled controls show 2px neutral-900 outlines offset 2px. No JavaScript filtering, sorting, pagination or persistence is included. Status starts open, Owner and Date closed; native summaries independently reveal choices and rotate 16px chevrons 180 degrees with 150ms transitions. Active and Alex Rivera start checked. Checkbox marks remain native in forced colours. Remove and Clear filters links and results illustrate the layout without scripted filtering. Every summary, checkbox, remove link and scroll region has visible focus.',
    responsive:
      'Below 1024px the sidebar stacks above the main table. From 640px to 1023px its three filter groups form equal columns; below 640px and above 1024px they stack. The header stacks below 640px. Applied badges wrap and the 576px table scrolls inside its labelled region at narrow widths, with no page overflow at 320px.',
    usage:
      'Use when a list has several independent filter dimensions. Pick data-table-toolbar-pagination for a few compact toolbar controls or data-table-row-selection for bulk operations. Variations: use amount ranges instead of dates, replace Owner with a category, or add a saved-filter selector above the search.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
