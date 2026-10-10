import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-contact-hours',
  name: 'Footer — Contact, hours and directory',
  category: 'footer',
  tags: ['grid', 'list', 'compact'],
  description:
    'A phone and visit action lead into identity, a seven-day schedule and a two-column directory. Use it for visiting information.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Phone  +1 (555) 010-2000                      [Book a visit] │
│ ──────────────────────────────────────────────────────────   │
│ Logo              Opening hours             Directory        │
│ Street address    Mon          09:00-17:00   About  Guides   │
│ Access note       Tue          09:00-17:00   Visit  Events   │
│                   Seven day/time rows       Help   Contact   │
│ ──────────────────────────────────────────────────────────   │
│ Copyright                                   Privacy Terms    │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A neutral-50 contact strip between hairlines uses a 1152px max-w-6xl container, 24px side and 24px vertical padding. It pairs a phone label and number link with a 44px action. The white main grid uses 64px vertical padding, 96px from 640px and 48px gaps. Three equal columns at 1024px hold identity and address, a max-w-xs 320px definition list with seven justified 14px day/time rows and hairlines, and a six-link directory in two equal columns. Legal bar has a top hairline and 24px vertical padding.',
    hierarchy:
      'Phone and Book a visit lead, then identity, schedule and directory. Address is semantic address with upright 14px text. Each day is a dt paired to a dd. Limit access note to 16 words, address to 3 lines and directory labels to 1 word.',
    states:
      'Text links hover from neutral-900 to neutral-600. Primary actions are 44px tall with a 6px radius, neutral-900 fill, neutral-700 hover fill and 150ms colour transition. Phone uses a tel link. Hours are static, including a Closed Sunday value. Every enabled control has a 2px neutral-900 focus outline offset 2px. There are no disabled controls.',
    responsive:
      'Contact strip stacks below 768px and is justified above. Main grid has one column below 640px, two below 1024px with directory under them, and three above. Legal bar stacks below 768px.',
    usage:
      'Use when phone contact, hours and access matter at page end. Choose footer-link-columns when visiting details are unnecessary. Variations: show appointment-only hours, add an accessibility contact, or change action to Get directions.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
