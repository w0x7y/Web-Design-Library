import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-mushroom-harvest',
  name: 'Mushroom harvest quote',
  category: 'testimonial-card',
  tags: ['playful', 'light'],
  description:
    'A mushroom grower endorsement for Mycel Yard, with an illustrated harvest tray and a native crop-note disclosure. Use it for small agricultural suppliers.',
  preview: { kind: 'element' },
  fonts: ['Bricolage Grotesque:wght@400..700'],
  brief: {
    layout:
      'A 288px figure, 336px from 640px, with a rounded 24px shell. A 64px illustrated masthead sits above a 20px padded body containing an 18px quote and crop-note details disclosure. The author figcaption is the final child, with 20px side and bottom padding.',
    style:
      'Bricolage Grotesque, rose-950 text on amber-50, rose-100 masthead and rose-200 rule. Mushroom illustration is rose-800 linework. Quote has 26px leading; labels and credit are 12px. No shadow.',
    states:
      'The crop note opens with native details. Its summary becomes rose-800 on hover and gets a 2px rose-800 outline with 2px offset on keyboard focus, including forced colors. No animation.',
    responsive:
      'Width is 288px below 640px and 336px above it. All other dimensions remain fixed; the open note stays inside the capture frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
