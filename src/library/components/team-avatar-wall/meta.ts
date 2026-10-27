import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-avatar-wall',
  name: 'Team — Avatar wall with headcount',
  category: 'team',
  tags: ['split', 'grid', 'numbers', 'compact'],
  description: "An introduction with two actions beside a dense wall of round avatars that ends in a \"+25\" tile, with headcount figures underneath. Use it to show the size of a whole team at a glance when individual profiles live elsewhere.",
  preview: { kind: 'section' },
  wireframe: `┌───────────────────────────────────────────────────────────┐
│ Eyebrow                                                   │
│ Heading that introduces   AR JQ MC TB SP RM CP DB         │
│ the whole team            EL HC RH AS JE QF PG SW         │
│ Short introduction        LP RK DO BT CS FM HV +25        │
│                           ────────────────────────────    │
│ [View open roles]         People    Countries  Open roles │
│ [Meet the leadership]     48        12         6          │
└───────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section with a 1152px max-w-6xl container, 24px side padding and 64px vertical padding, 96px from 640px. From 1024px two equal columns with a 64px gap, vertically centered. The left column holds an eyebrow, headline, lede capped at 576px (max-w-xl) and, 32px below, a wrapping row of a primary and a secondary action with 12px gaps. The right column, capped at 512px (max-w-lg) until 1024px, holds the avatar wall: a grid of 24 round tiles, six columns with 8px gaps below 640px and eight columns with 12px gaps from 640px, each tile a full-width aspect-square neutral-200 circle with 14px initials. The last tile is a dashed neutral-300 circle reading \"+25\". A three-column definition list sits 32px below the wall, above a 24px-padded top hairline, with 16px gaps.",
    hierarchy: "Read the headline and lede, then the actions, then the wall as a single shape, then the figures. Each figure is a 14px neutral-500 label over a 30px semibold number. Slots: eyebrow up to 3 words, headline up to 8 words, lede up to 25 words, two action labels up to 3 words, 23 people plus a remainder tile, three figures with labels up to 2 words. Names are visually hidden next to each avatar so screen readers list the team; the remainder tile reads \"and 25 more people\". The tiles plus the remainder add up to the People figure.",
    states: "The primary action lightens from neutral-900 to neutral-700 on hover and the secondary action fills neutral-50; both show a 2px neutral-900 focus-visible outline offset by 2px. Avatar tiles and figures are static.",
    responsive: "Below 1024px the columns stack, introduction first, with 48px between them, and the wall plus figures stay within 512px. The wall has six columns (four rows) below 640px and eight columns (three rows) from 640px, so the 24 tiles always fill complete rows; tiles scale with the column, about 39px wide at 320px and 55px at 1440px. The figures stay in three columns at every width. At 640px section padding grows to 96px and the headline from 30px to 36px.",
    usage: "Use on about and careers pages to show headcount and spread when names and roles are not the point. Pick team-portrait-grid or team-tile-directory when each person needs a name, role and contact link. Variations: replace initials with photos, link the remainder tile to the full directory, or swap the figures for locations and open roles only.",
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
