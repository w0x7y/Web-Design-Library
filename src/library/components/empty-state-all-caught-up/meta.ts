import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-all-caught-up',
  name: 'Empty state — All caught up with recent completions',
  category: 'empty-state',
  tags: ['centered', 'list', 'icons'],
  description: 'A centered completion message above a list of recently finished items and links to other queues. Use when an inbox or task queue has been cleared and people need proof of progress and a next place to go.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│                          Check icon                          │
│                        All caught up                         │
│                 One-line completion message                  │
│    ┌────────────────────────────────────────────────────┐    │
│    │ Recently completed          [View all completed]   │    │
│    ├────────────────────────────────────────────────────┤    │
│    │ Check  Most recent completed item          09:40   │    │
│    │        Done by you                                 │    │
│    │ Check  Earlier completed item              09:12   │    │
│    │        Done by teammate name                       │    │
│    │ Check  Oldest completed item shown         08:55   │    │
│    │        Closed by a rule                            │    │
│    └────────────────────────────────────────────────────┘    │
│    Other queues                                              │
│    [Assigned to me 4] [Mentions 2] [Waiting on others 7]     │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'White section with a 768px max-w-3xl container, 24px px-6 side gutters and 64px py-16 vertical padding, 96px sm:py-24 from 640px. A centered header holds a 40px check icon tile, the headline 24px below it and a 576px max-w-xl lede 16px below that. A full-width rounded-lg card with a neutral-200 border follows after 40px: a header row with 24px by 16px padding and a bottom border, then three divided rows with the same padding. Each row is a flex row with 12px gaps: a 20px check-circle glyph, a flexible title and meta column, and a right-aligned time. The Other queues navigation follows after 40px as a three-column grid with 12px gaps; each queue is a full-width rounded-md bordered link with 16px by 12px padding, name left and open count right.',
    hierarchy: 'Read the check tile, the 30px headline (36px from 640px), the lede, then the 16px Recently completed heading and its rows, newest first. Row titles are 14px medium, the actor line is 12px neutral-500 and times are 14px tabular figures. Other queues is a 14px neutral-500 label above three 14px medium links. Slots: headline up to 4 words, lede 20, item titles 8, actor line 5, queue names 3. Show three to five completed items.',
    states: 'The View all completed link and the queue links show a 2px neutral-900 focus-visible outline offset 2px. The text link hovers to neutral-600; queue links hover to a neutral-50 fill with the default 150ms transition. Completed rows are static. The page has no selected or disabled state; a queue with nothing open can show 0 open or be left out.',
    responsive: 'At every width the header stays centered and the card keeps one row per item, with titles wrapping beside the fixed check glyph and time. Below 640px the three queue links stack in one full-width column and the card header wraps the View all link under its heading when space runs out. From 640px the queue links sit three across, the headline grows to 36px and vertical padding grows to 96px.',
    usage: 'Use when a queue someone works through (an inbox, review queue or task list) is empty because the work is finished. Pick empty-state-centered-icon when nothing has been created yet, and empty-state-no-results when a filter hides existing items. Variations: replace times with relative dates for older items, add an Undo link to the newest row, or swap the queue grid for a single primary action such as Start next batch.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
