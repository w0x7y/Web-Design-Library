import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-podcast-episode',
  name: 'Blog cards — Podcast episode with play action',
  category: 'blog-card',
  tags: ['asymmetric', 'media', 'compact'],
  description: 'A square show cover beside the show name, episode number and title, with a show-notes excerpt and a play button above the duration and date. Use it for podcast, video or audio episodes in a feed.',
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌──────────┐  Show name / Episode 42                         │
│ │          │  [Episode title that names the                  │
│ │  Image   │   conversation topic]                           │
│ │          │                                                 │
│ └──────────┘                                                 │
│ Show-notes excerpt that names the guest and the main         │
│ questions the episode covers                                 │
│                                                              │
│ [> Play episode]                                   42 min    │
│                                              Oct 10, 2026    │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A bordered white article, 288px wide (w-72) and 352px from 640px (sm:w-[22rem]), with 20px padding (p-5) and an 8px radius (rounded-lg). The header is a flex row with a 16px gap (gap-4): an 80px square cover placeholder (size-20, rounded-lg, neutral-100) and a min-w-0 text column with a 12px show line and the title 4px below. The excerpt sits 16px below the header. A footer 20px below is a flex row, justify-between with a 12px gap: a 44px-tall primary play button (h-11, px-5, 8px icon gap) on the left and a right-aligned two-line duration and date on the right.',
    hierarchy: 'The cover and 16px semibold title lead, then the 14px neutral-600 excerpt, then the play button and its 12px duration (medium, neutral-900) over the neutral-500 date. Slots: show name up to 3 words with the episode number, title up to 8 words across two or three lines, excerpt up to 16 words naming the guest and topics, duration as 42 min and date as Oct 10, 2026 in a time element. The cover placeholder carries an image label; the play glyph is decorative.',
    states: 'The title link underlines on hover with a 4px offset. The play button darkens from neutral-900 to neutral-700 on hover. Both controls show a 2px neutral-900 keyboard outline offset 2px. The play button names its episode through aria-label (Play episode 42). Swap the play glyph for a pause glyph and the label for Pause while the episode plays; show a short progress bar under the footer for a partly played episode.',
    responsive: 'The card is 288px wide below 640px and 352px from 640px. The cover stays 80px square and the header stays a row at every width; the title wraps to three lines on mobile and two on wider cards. The footer keeps the button and meta on one row.',
    usage: 'Use for podcast, video or audio episodes on a blog, show page or feed, where listening starts from the card. Pick blog-card-cover-stacked for articles with a wide cover, or blog-card-series-index for a numbered reading list. Variations: replace the button label with Watch for video, add a played or remaining-time label beside the duration, or list two guest names under the title.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
