import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-water-survey',
  name: 'Water survey glass endorsement',
  category: 'testimonial-card',
  tags: ['glass', 'dark'],
  description:
    'A translucent resident endorsement for Pipehalo underground leak surveys, over decorative pipe contours. Use it for infrastructure diagnostics and water services.',
  preview: { kind: 'element' },
  fonts: ['Space Grotesk:wght@400..600'],
  brief: {
    layout:
      'A 288px figure, 352px from 640px, with 16px padding, 20px corners and an absolute full-size decorative pipe SVG. A relative glass pane has 20px padding, 12px corners, a small service label and a 20px quote. A direct-child credit sits 16px below the pane.',
    style:
      'Space Grotesk; cyan-950 outer field, white text, teal-100 credit and cyan-200 labels. The pane is white at 10% opacity, with a 1px white 30% border and 12px backdrop blur. Teal-300 pipe contours are decorative at 30% opacity.',
    states:
      'No controls, hover or animation. The background SVG is aria-hidden. Opaque text remains legible over the dark glass field.',
    responsive:
      'Width is 288px below 640px and 352px above. The glass pane, type and padding keep their sizes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
