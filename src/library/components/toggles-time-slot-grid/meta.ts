import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-time-slot-grid',
  name: "Toggles — Time slot grid",
  category: 'toggles',
  tags: ["grid", "numbers", "form", "compact"],
  description: "Radio time slots for one date are grouped into Morning and Afternoon grids, with taken times disabled and struck through. Use to pick a single appointment or booking time.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Tuesday, March 14                                            │
│ 30-minute slots in UTC+1                                     │
│ Morning                                                      │
│ [09:00] [09:30] [10:00 taken] [10:30] [11:00] [11:30 taken]  │
│ Afternoon                                                    │
│ [13:00] [13:30 *] [14:00] [14:30 taken] [15:00] [15:30]      │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) fieldset widens to 448px (sm:w-[28rem]). A 14px semibold date legend and a 14px neutral-500 hint (mt-1) precede two nested fieldsets, Morning and Afternoon, each 16px (mt-4) below the block before it. Each has a 12px medium neutral-500 legend and, 8px below, a grid of 36px-tall (h-9) rounded-md slots with 8px gaps: three columns below 640px and six from 640px. Slots center 14px medium tabular times inside a 1px neutral-300 border.",
    hierarchy: "Read the date, the time zone hint, then the Morning and Afternoon slots in time order. Times use 24-hour HH:MM; a 12-hour form such as 1:30 PM fits too. All slots are native radios in one named group. Enabled slots take their name from the visible time, and taken slots add unavailable to it through aria-label. The outer fieldset references the hint.",
    states: "13:30 starts selected with a neutral-900 border and fill and white text. Enabled hover fills neutral-50, or neutral-700 when selected. Taken slots are native disabled with neutral-500 struck-through text and a not-allowed cursor, so they read as taken without fading. Keyboard focus draws a 2px neutral-900 outline offset 2px around the slot through has-[:focus-visible], and arrow keys move through both periods, skipping taken times. In forced-colors mode slot borders use ButtonText, the selected slot gets a 2px Highlight border and an underline, and taken slots use GrayText.",
    responsive: "Below 640px each period is two rows of three slots about 91px wide; from 640px each period is one row of six slots about 68px wide. Gaps, slot height and type stay the same, so the element is about 90px taller on mobile (284px against 196px).",
    usage: "Use to choose one appointment, delivery or booking time on a known date. Pick profile-card-availability-slots for a few times inside a person card, or toggles-checkbox-tile-grid when several days can be chosen. Variations: add an Evening period, show 12-hour times, or place a confirm button under the grid.",
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
