import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-date-picker',
  name: 'Dropdowns — Date picker with month grid',
  category: 'dropdowns',
  tags: ['layered', 'grid', 'form', 'compact'],
  description: 'A field-shaped trigger opens one calendar month with previous and next buttons, a weekday header and day buttons that mark today, the selected date and unavailable dates. Use to pick one date when the weekday and nearby days matter.',
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Date                                                 │
│ [Icon Oct 28, 2026                            ^]     │
│ ┌──────────────────────────────────────────────┐     │
│ │ [<]             October 2026             [>] │     │
│ │   Su    Mo    Tu    We    Th    Fr    Sa     │     │
│ │                            1     2     3     │     │
│ │    4     5     6     7     8     9    10     │     │
│ │   11    12    13    14    15    16    17     │     │
│ │   18    19   -20-  -21-   22    23    24     │     │
│ │   25   (26)   27   [28]   29   -30-   31     │     │
│ └──────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A relative 288px (w-72) by 352px (h-[22rem]) root grows to 320px (sm:w-80) wide at 640px. A 14px medium Date label sits 8px above a 40px rounded-md outlined summary with 12px horizontal padding, a 16px calendar icon, the selected value and a 16px chevron. The full-width panel starts 4px below the trigger, with a rounded-md neutral-200 border, 12px padding and shadow-lg. A header row places 32px previous and next month buttons either side of the centered month title. A fixed-layout table follows 8px below: a 32px weekday row, then five week rows of 36px (size-9) rounded-md day buttons centered in seven equal columns.',
    hierarchy: 'Read Date and its value, the month title, the weekday initials and the days. The selected day is a filled neutral-900 square with white medium text; today has a neutral-300 border and a semibold figure; unavailable days are struck through at 50% opacity. Days use tabular figures and full-date labels such as "October 28, 2026". Weekday headers show two letters, with the full name in hidden text. Empty cells pad the first week; the table is labelled by the month title.',
    states: 'The disclosure is open initially and its chevron rotates 180 degrees while open. The summary hovers neutral-50; month buttons and enabled days hover neutral-100, and the selected day hovers neutral-700. Every control shows a 2px neutral-900 outline offset 2px on keyboard focus. The selected day has aria-pressed=true and paints Highlight with HighlightText in forced colors; today has aria-current=date; unavailable days are natively disabled with a not-allowed cursor. Host script changes the month, moves aria-pressed, updates the trigger value and can add arrow-key movement across the grid.',
    responsive: 'The root and panel grow from 288px to 320px at 640px. Columns widen from about 37px to 42px while day buttons stay 36px square and centered. The header, five week rows and 352px reserve stay the same at both widths.',
    usage: 'Use for one date when the weekday or neighboring days help the choice, such as a booking or a due date. Choose inputs-date-range for typed start and end dates, or dropdowns-tile-picker for a few time slots. Variations: start weeks on Monday, show the days of neighboring months muted, or add Today and Clear actions under the grid.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
