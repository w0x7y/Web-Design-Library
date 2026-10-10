import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-firefighter-intake',
  name: 'Volunteer firefighter interest',
  category: 'signup',
  tags: ['brutalist', 'dark'],
  description:
    'A Station Seven volunteer-firefighter introduction signup with contact fields, role interest and a prominent station-night panel.',
  preview: { kind: 'section' },
  fonts: ['Archivo:wght@400..700'],
  brief: {
    layout:
      '1152px maximum-width recruitment board, 24px side and 64px vertical padding. Ruled header followed 40px later by a red station rail and contact form. Station rail padding 24px, 96px number and 18px date copy. Form has 20px gaps and 44px fields.',
    style:
      'Archivo, stone-950 backdrop, stone-100 ink, red-800 rail and amber-200 focus outlines. Heading 36px/1 bold, 60px at 640px. Stone-900 input fill, square corners, 2px rules and a white submit button. No shadows.',
    states:
      'Controls use 2px amber-200 keyboard focus outlines offset 2px, including forced-colors mode. Submit button brightens on hover-capable devices. Native fields retain browser validation. No animation. ',
    responsive:
      'Stacks below 768px. At 640px heading grows to 60px and name/email and phone/postcode rows become paired. At 768px station rail and form use 1:2 columns with 32px gap.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
