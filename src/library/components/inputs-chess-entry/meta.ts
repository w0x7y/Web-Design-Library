import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-chess-entry',
  name: 'Inputs — Chess entry',
  category: 'inputs',
  tags: ['brutalist', 'light'],
  description:
    'A tournament-entry input set for Rooklane chess, with federation ID and a large rapid-rating field. Use it when pairing players by rating.',
  preview: { kind: 'element' },
  fonts: ['Space Grotesk:wght@400..700'],
  brief: {
    layout:
      '288px-wide panel, 352px from 640px, with a 2px border. A 16px-padded masthead precedes a 20px-padded body. The body has a 44px federation-ID input and a rating row with a 96px label column and remaining 56px-high number field, separated by 20px.',
    style:
      'Space Grotesk, red-100 background and red-950 ink. Square corners, 2px borders, 24px bold heading with 32px line height. White ID field and red-950 rating label with red-100 text. Rating digits are 30px bold and tabular. No shadow.',
    states:
      'Both controls show 2px current-color keyboard outlines offset 2px. Rapid rating accepts whole numbers from 100 to 3500. The unrated-player hint is associated with the rating. No animation or authored hover states.',
    responsive:
      'Width changes from 288px to 352px at 640px. The 96px rating label stays fixed and the number field grows.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
