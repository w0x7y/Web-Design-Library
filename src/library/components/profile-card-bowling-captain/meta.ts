import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-bowling-captain',
  name: 'Bowling league captain card',
  category: 'profile-card',
  tags: ['playful', 'light'],
  description:
    'A league captain profile for Tallypin with an illustrated lane, bowling average and a native save-to-roster checkbox. Use it in recreational bowling team directories.',
  preview: { kind: 'element' },
  fonts: ['Familjen Grotesk:wght@400..700'],
  brief: {
    layout:
      'A 288px article with 20px radius and 20px padding. A 12px brand label and 32px lane illustration lead into a split identity row, with a 24px name at left and a 40px jersey number at right. A white two-column score panel with 12px padding sits 20px below; a labelled native checkbox follows.',
    style:
      'Familjen Grotesk on cyan-100 with cyan-950 text. Lane illustration has orange-500 gutters and cyan-950 pin marks; number is orange-800. The name is bold with 30px line height, supporting text 12px, score values 20px semibold and score labels 10px uppercase. Score panel has 8px radius, no border or shadow. Checkbox is 16px with cyan-950 accent.',
    states:
      'The Save Remy to my roster checkbox toggles its native checkmark by click or Space. It has a 2px cyan-950 keyboard focus outline offset 2px that remains visible in forced-colors mode. The label underlines on hover-capable devices. No animation.',
    responsive:
      'Card is 288px wide below 640px and 320px wide from 640px. The 32px-high lane stretches horizontally; type, 20px padding and checkbox size stay fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
