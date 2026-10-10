import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-chess-evenings',
  name: 'Chess club membership',
  category: 'signup',
  tags: ['playful', 'light'],
  description:
    'A welcoming Rookery Nine chess-club registration with a checkerboard illustration and native experience choices. Fits local clubs that welcome beginners.',
  preview: { kind: 'section' },
  fonts: ['Bricolage Grotesque:wght@400..700'],
  brief: {
    layout:
      'A 1152px container padded 24px horizontally and 64px vertically. Left introduction and a 448px four-by-four board, right an outlined membership sheet. Sheet padding 24px, gaps 20px, 44px fields and two stacked radio cards.',
    style:
      'Bricolage Grotesque, emerald-100 backdrop, stone-950 ink, emerald-50 and emerald-800 board cells. Orange-300 rook and submit button. Heading 36px, 48px from 640px. White form with 2px ink border. Square field corners and no shadows.',
    states:
      'Controls use 2px stone-950 keyboard focus outlines offset 2px, including forced-colors mode. Submit button brightens on hover-capable devices. Native fields retain browser validation. No animation. Native radio cards change from 40% ink borders to solid ink and add a 5% ink fill when checked; words describe both options.',
    responsive:
      'Stacks below 768px with 40px gap. At 640px form padding grows to 32px, rook to 96px and heading to 48px. At 768px uses 1.15:1 columns with 64px gap.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
