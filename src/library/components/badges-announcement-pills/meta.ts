import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-announcement-pills',
  name: 'Badges — Announcement pill links',
  category: 'badges',
  tags: ['centered', 'stacked', 'compact'],
  description: 'Three rounded pill links point to an update, a release note and an event, each with a short message and a trailing arrow. Use one above a hero headline or page title to point readers to news.',
  preview: { kind: 'element' },
  wireframe: `┌────────────────────────────────────────────────────┐
│       [(New) Message naming the update  ->]        │
│                                                    │
│          [Release summary | Read more ->]          │
│                                                    │
│          [Icon  Event name on Nov 12  >]           │
└────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A 288px (w-72) column grows to 416px (sm:w-[26rem]) at 640px and centers three 32px-tall (h-8) pill links with 16px gaps. Each pill is max-w-full with a 1px border and 14px text. The label pill has 4px left and 12px right padding, a 22px solid New label, the message and a 16px arrow, 8px apart. The release pill has a neutral-50 fill, 12px padding and 12px gaps around a 16px vertical divider before Read more and its arrow. The event pill is solid neutral-900 with a 16px calendar icon, white medium text and a 16px chevron.',
    hierarchy: 'Each pill is one link whose accessible name is its visible text, such as "New Message naming the update". In the first pill the New label reads first, the message is neutral-600 and the arrow neutral-900. In the second the summary is neutral-600 and Read more is medium neutral-900. The solid third pill is the strongest. Keep labels to one word and messages to about 4 words; a longer message truncates with an ellipsis while labels and icons keep their width.',
    states: 'Hover darkens each fill: white to neutral-50, neutral-50 to neutral-100, and neutral-900 to neutral-700 with a matching border. Every pill has a 2px neutral-900 focus-visible outline offset 2px. Each pill and the New label keep a 1px border, so their shapes remain in forced-colors mode; the divider, arrows and icons are decorative.',
    responsive: 'At 640px only the column width changes, from 288px to 416px. Pills stay content width and centered. When a pill is wider than the column, its message truncates instead of wrapping, so every pill stays one 32px line.',
    usage: 'Use one pill above a hero headline or page title to point to a launch, release note or event. Pick badges-status-list when badges describe item states rather than link to news. Variations: left-align the pill above a left-aligned headline, replace New with a version number, or drop the arrow when the pill only labels the page it sits on.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
