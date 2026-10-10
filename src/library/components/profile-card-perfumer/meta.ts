import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-perfumer',
  name: 'Perfume composer profile',
  category: 'profile-card',
  tags: ['editorial', 'light', 'has-image'],
  description:
    'A portrait-led profile for an independent perfume composer at Orris House, with a current fragrance study and consultation link. Use it in fragrance atelier directories.',
  preview: { kind: 'element' },
  fonts: ['Instrument Serif:ital@0;1'],
  brief: {
    layout:
      'A 288px article with a two-column 112px portrait and flexible text region. The upper region is 232px tall. Text has 16px padding. A lower study strip has 16px padding and a link 12px below its copy.',
    style:
      'Rose-100 paper, rose-950 text, rose-800 metadata and white study strip. Instrument Serif 30px regular name with 1 line height; other text uses default sans. Eyebrows are 10px uppercase with 0.1em tracking; body is 12px with 20px line height. Portrait is cropped to fill its column. Square corners and no shadow.',
    states:
      'Links have a 2px rose-950 keyboard focus outline offset 2px, including forced-colors mode. On devices with hover, the consultation link underlines. No animation or transitions.',
    responsive:
      'At 640px the card widens to 336px and the portrait column to 128px. All spacing and type sizes remain the same.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
