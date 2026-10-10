import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-toy-borrowing',
  name: 'Toy library borrower quote',
  category: 'testimonial-card',
  tags: ['playful', 'light'],
  description:
    'A Play Parcel toy library endorsement with illustrated building blocks and a native borrowing-note disclosure. Use it on community lending and family membership pages.',
  preview: { kind: 'element' },
  fonts: ['Bricolage Grotesque:wght@400..700'],
  brief: {
    layout:
      'A 288px figure, 336px from 640px, with a 24px rounded shell. A 64px masthead with 20px side padding pairs the brand with an 80px by 48px building-block SVG. A 20px padded body contains the quote and a disclosure 16px below it with 12px top padding. The author has 20px side and bottom padding.',
    style:
      'Bricolage Grotesque, rose-950 text on amber-50, rose-100 masthead and a 1px rose-200 disclosure rule. Building blocks use rose-800 linework. Quote is 18px medium with 26px leading; summary and credit are 12px/16px. No shadow.',
    states:
      'The borrowing note opens with native details. The 12px semibold summary becomes rose-800 on hover-capable devices and gets a 2px rose-800 outline offset 2px on keyboard focus, including forced colors. The block SVG is aria-hidden. No animation.',
    responsive:
      'Width is 288px below 640px and 336px from 640px. Type, padding and illustration sizes remain fixed; the open note fits the capture frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
