import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-availability-slots',
  name: 'Profile cards — Identity with available time slots',
  category: 'profile-card',
  tags: ['stacked', 'form', 'compact'],
  description:
    'An identity card presents three native time choices and a booking destination.',
  preview: {
    kind: 'element',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Avatar  Alex Rivera / Role                                │
│Conversation context                                      │
│Mar 14, UTC+1                                             │
│(o) 09:00    ( ) 11:30    ( ) 14:00                       │
│[                  Review booking                   ]     │
│Booking note                                              │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 288px card widens to 320px at 640px with 16px padding. A fieldset sits 16px below the biography; three equal time labels use 8px gaps, 12px vertical padding and native radio controls. The booking link is full-width and 44px tall.',
    hierarchy:
      'The name and role lead, followed by conversation context, date, time zone and three slots. Keep context under 10 words and retain explicit date and time zone labels.',
    states:
      'Native radios allow one selected time; 09:00 starts selected. Each radio and the booking link has a 2px focus outline. The link opens the booking destination; its note explains where the choice is confirmed.',
    responsive:
      'All three slots remain equal columns at both fixed widths. Labels use 12px text; the booking note wraps below the action.',
    usage:
      'Use for a small selection of appointment times. Pick a calendar pattern for many dates. Variations: show two slots, change the date, or use time ranges for an office-hours session.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
