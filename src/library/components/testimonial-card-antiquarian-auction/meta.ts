import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-antiquarian-auction',
  name: 'Auction seller quote',
  category: 'testimonial-card',
  tags: ['minimal', 'dark'],
  description:
    'A quiet seller endorsement for Lotwell antique-watch auctions, with an inset lot reference and a small attribution. Use it for appraisal and specialist auction services.',
  preview: { kind: 'element' },
  fonts: ['Newsreader:wght@400..500'],
  brief: {
    layout:
      'A 288px figure, 352px from 640px, with 24px padding. A small brand row precedes a 22px quote after 20px. A lot-reference row with a 40px watch drawing sits 20px below; the author caption follows after 20px.',
    style:
      'Neutral-800 background, neutral-100 quote and neutral-300 labels. Newsreader quote uses 22px type and 30px line height; supporting labels inherit the default sans stack. Lot panel is neutral-900 with 12px padding. Square corners, no border or shadow.',
    states:
      'No controls, hover or animation. The watch drawing is decorative and aria-hidden; the lot is identified in visible text.',
    responsive:
      'Width is 288px below 640px and 352px from 640px. Text sizes, gaps and inset panel padding remain constant.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
