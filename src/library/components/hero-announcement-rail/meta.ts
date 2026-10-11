import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-announcement-rail',
  name: 'Hero — Announcement rail and wide pitch',
  category: 'hero',
  tags: ['sidebar', 'numbers', 'spacious'],
  description:
    'A narrow announcement rail anchors the side of a wide text-only hero with two supporting facts.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Announcement      Main introduction                       │
│Release note      Headline for the main outcome           │
│[Read update]     Supporting lede                         │
│                  [Primary action] [Secondary]            │
│                                                          │
│                  5 min              No commitment        │
│                  Setup time         Access               │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'At 1024px, a 192px announcement rail sits beside a flexible pitch with a 32px gap and 1px divider. The max-w-6xl section has 24px side padding and 64px to 96px vertical padding. A two-column definition list follows the actions after 40px.',
    hierarchy:
      'The headline owns the main column; the muted announcement remains secondary. Limit the announcement to 15 words, headline to 10, lede to 25 and fact values to 3.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'Below 1024px the announcement becomes a horizontal block above the pitch with a bottom border. The fact row stays two columns and actions wrap. Display type steps at 640px and 1024px.',
    usage:
      'Use when a timely update needs a persistent place beside an evergreen pitch. Pick a centered hero without an update. Variations: show an event date, link to a release note, or replace the facts with brief access requirements.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
