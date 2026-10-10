import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-court-reservations',
  name: 'Dropdowns — Badminton court booking',
  category: 'dropdowns',
  tags: ['corporate', 'dark'],
  description:
    'A court-and-time dropdown for Shuttlegrid badminton bookings, with three court radios, a native time selector and a dated venue header.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Sans:wght@400;500;600;700'],
  brief: {
    layout:
      'A 288px card with 16px padding. A brand and venue sit opposite a small bordered date tile. A 44px padded booking summary opens court choices in three columns with 8px gaps, followed by a time row with label left and 160x40px native select right. A 12px booking-policy note sits below a divider.',
    style:
      'IBM Plex Sans, blue-950 background, blue-50 text, blue-700 1px border and 12px outer radius. Summary and selected court use blue-800; summary radius 8px, court/date/select radii 6px. Court boundaries blue-500, hints blue-200, and radios use blue-200 accent in dark colour scheme. Titles and court numbers are 14px, labels and option text 12px.',
    states:
      'Court 02 starts selected; native radio arrow keys switch the court. Native select starts with 18:00–19:00 and offers two later hourly slots. Each court radio has an explicit court name; the time field has a linked label. No hover changes. All controls show a 2px current-colour focus-visible outline offset 2px, including in forced-colors mode. Native summary supports Enter and Space; the chevron rotates 180 degrees when open. No animations or transitions.',
    responsive:
      'Root width is 288px below 640px and 320px from 640px. The internal arrangement, type sizes and padding remain unchanged; all content fits the 384px-high element budget.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
