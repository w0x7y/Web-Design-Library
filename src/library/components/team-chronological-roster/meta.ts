import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-chronological-roster',
  name: 'Team — Chronological roster with avatar ends',
  category: 'team',
  tags: ['list', 'numbers', 'spacious'],
  description:
    'A year rail and aligned biography rows trace when four people joined the group.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow / Heading / Introduction                          │
│                                                          │
│2020  Alex Rivera / Role                            Avatar│
│      Contribution paragraph                              │
│      [View profile]                                      │
│2021  Jamie Quinn / Role                            Avatar│
│      Contribution paragraph                              │
│      [View profile]                                      │
│2023  Morgan Chen / Role                            Avatar│
│      Contribution paragraph                              │
│      [View profile]                                      │
│2024  Taylor Brooks / Role                          Avatar│
│      Contribution paragraph                              │
│      [View profile]                                      │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl section places a chronological ordered list below its introduction. Rows have 24px vertical padding, 1px top borders and 16px gaps. A 48px year column becomes 96px at 768px; biography text fills the middle and a 40px avatar anchors the end.',
    hierarchy:
      'Read the years and names as a sequence, then roles and contribution paragraphs. Limit biographies to 25 words, roles to 4 and names to 3. The profile action follows each biography.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The three-column row remains intact at small widths with a 48px year and 40px avatar. Flexible biography text wraps; the year rail widens at 768px.',
    usage:
      'Use when a team’s growth or sequence of contributions matters. Pick a department roster for organizational grouping. Variations: show project phases instead of years, add five people, or use qualification dates for an advisory group.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
