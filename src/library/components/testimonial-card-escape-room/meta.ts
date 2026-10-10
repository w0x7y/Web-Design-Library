import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-escape-room',
  name: 'Escape room glass endorsement',
  category: 'testimonial-card',
  tags: ['glass', 'dark'],
  description:
    'A translucent player endorsement for Lock & Lantern escape rooms, over decorative maze paths. Use it on puzzle venue and group booking pages.',
  preview: { kind: 'element' },
  fonts: ['Space Grotesk:wght@400..600'],
  brief: {
    layout:
      'A 288px figure, 352px from 640px, with 16px padding, 20px corners and an absolute full-size maze SVG. A relative glass pane has 20px padding, 12px corners, a 10px service label and a quote 20px below it. A session label follows after 20px; a direct-child credit sits 16px below the pane with 4px side padding.',
    style:
      'Space Grotesk on cyan-950 with white text, teal-100 credit and cyan-200 label. The pane is white at 10% opacity, with a 1px white border at 30% opacity and 12px backdrop blur. Teal-300 maze paths have 10-unit strokes and 30% opacity. Quote is 20px medium with 28px leading; credit is 12px/16px. No shadow.',
    states:
      'No controls, hover or animation. The decorative maze SVG is aria-hidden. Opaque white text remains legible over the dark glass field.',
    responsive:
      'Width is 288px below 640px and 352px from 640px. The pane, type and padding retain their sizes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
