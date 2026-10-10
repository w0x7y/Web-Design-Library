import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-insect-survey',
  name: 'Insect survey count',
  category: 'stat-card',
  tags: ['playful', 'light'],
  description:
    'A friendly field-survey card for Sixfoot, an insect monitoring program, with a moth count and six sampled habitat plots. Use it in citizen-science summaries.',
  preview: { kind: 'element' },
  fonts: ['Bricolage Grotesque:wght@400..700'],
  brief: {
    layout:
      'A 288px-wide article, 320px from 640px, with 20px padding and a 28px radius. A flex header precedes a two-column region containing a 64px count and a 96px decorative six-cell habitat grid. A white inset note and survey link finish the card.',
    style:
      'Bricolage Grotesque, green-100 panel, green-950 text, green-800 secondary text. Each habitat cell has an 8px radius, using green-300, yellow-200 or white. A small native-looking square 2px outlined brand mark replaces an icon badge. The inset has a 12px radius and 16px padding. No shadow.',
    states:
      'The survey link underlines on hover and shows a 2px green-950 focus outline offset 2px. The decorative habitat grid is aria-hidden; the note states all six plots were sampled. No motion.',
    responsive:
      'Root width changes from 288px to 320px at 640px. The count/grid layout stays side by side and all sizes remain fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
