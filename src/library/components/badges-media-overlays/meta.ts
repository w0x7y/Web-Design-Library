import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-media-overlays',
  name: 'Badges — Overlays on media thumbnails',
  category: 'badges',
  tags: ['grid', 'layered', 'media', 'compact'],
  description: 'A two-column grid of video thumbnails places badges in fixed corners: status at top left, access at top right, duration and schedule along the bottom. Use for media libraries and feeds where state and length must read on the image.',
  preview: { kind: 'element' },
  wireframe: `┌─────────────────────────────────────────────────────────┐
│ ┌─────────────────────────┐ ┌─────────────────────────┐ │
│ │ (Dot Live)              │ │ (New)                   │ │
│ │          Video          │ │          Video          │ │
│ │                         │ │                 (12:48) │ │
│ └─────────────────────────┘ └─────────────────────────┘ │
│ Stream title                Video title                 │
│ 1,204 watching              3.4k views                  │
│ ┌─────────────────────────┐ ┌─────────────────────────┐ │
│ │          (Lock Members) │ │                         │ │
│ │          Video          │ │          Video          │ │
│ │                 (24:10) │ │ (Clock Upcoming)        │ │
│ └─────────────────────────┘ └─────────────────────────┘ │
│ Episode title               Premiere title              │
│ Season 2, episode 4         Starts Nov 12, 18:00        │
└─────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A 288px (w-72) list grows to 416px (sm:w-[26rem]) at 640px as a two-column grid with 16px column and 20px row gaps. Each item is a relative 16:9 neutral-100 placeholder with an 8px radius and a centered play glyph, then a 14px medium title 8px below and a 12px meta line. Badges sit absolutely 8px from the corners: status top left, access top right, duration bottom right and schedule bottom left. Status, access and schedule badges are 12px medium pills with 8px side padding; the duration is a rounded-md tag with 6px side padding on neutral-900/75 with white tabular figures.',
    hierarchy: 'Read each thumbnail, its corner badges, then title and meta. Live is the strongest badge: solid neutral-900 with a white dot. New, Members (with a lock) and Upcoming (with a clock) are white pills with neutral-300 borders. Durations include visually hidden "Duration" wording. Keep badge text to one word or a time, titles to one line (they truncate) and meta under 5 words. Put at most one badge in each corner.',
    states: 'Badges are static. When a thumbnail is wrapped in a link, give the link a 2px neutral-900 focus-visible outline offset 2px and keep the badges inside it. Pill badges keep 1px borders in forced-colors mode, and badge words stay readable when the translucent fill is removed.',
    responsive: 'At 640px the list grows from 288px to 416px. Thumbnails grow from 136px to 200px wide and the play glyph from 24px to 32px, while badges keep their size and 8px corner offsets. On a full page, add a third or fourth column from 1024px.',
    usage: 'Use for video libraries, course lists, live streams and photo galleries. Pick product-card-overlay-actions when the image also needs buttons. Variations: a photo count with an image icon at bottom right, a thin progress bar along the bottom edge for partly watched items, or a Sale badge on product images.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
