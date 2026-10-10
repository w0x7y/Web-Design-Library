import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-goalball-blocks',
  name: 'Goalball defensive record',
  category: 'stat-card',
  tags: ['minimal', 'light'],
  description:
    'A quiet goalball training card for Quietcourt with blocked-shot coverage and a simple court diagram. Use it in adaptive-sport coaching and match summaries.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide article, 352px from 640px, with 24px padding and a 1px stone-300 border. A brand/session header precedes a 56px blocks figure with a 20px denominator. A 80px decorative goalball court SVG follows, then a ruled two-column facts row and a match-notes link.',
    style:
      'Default sans font on white, stone-950 primary and stone-600 secondary text. Main figure has tight tracking and 1 line height. Heading is 14px medium; metadata and facts are 10px to 12px. Court uses a stone-100 fill with 1px stone-600 lines and three stone-950 player markers. Square corners and no shadow.',
    states:
      'Match-notes link underlines on hover and has a 2px stone-950 focus outline offset 2px. Court diagram and 12px link arrow are aria-hidden; adjacent text gives the complete blocked-shot and concession totals. No motion.',
    responsive:
      'Width increases from 288px to 352px at 640px. Court stretches horizontally within the padding but stays 80px high. Type, spacing and facts layout remain fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
