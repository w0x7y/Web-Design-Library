import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-first-dental-visit',
  name: 'First dental visit parent quote',
  category: 'testimonial-card',
  tags: ['playful', 'dark'],
  description:
    'A Little Molar children\'s dentist endorsement with a vertical first-visit rail and decorative tooth. Use it on family dental practice and appointment pages.',
  preview: { kind: 'element' },
  fonts: ['Syne:wght@400..700'],
  brief: {
    layout:
      'A 288px figure, 352px from 640px, with a 32px full-height vertical rail. The body and direct-child author footer have a 32px left margin and 20px side padding. A flex header pairs the 20px brand with a 48px by 32px tooth SVG. A 10px visit label follows after 8px; a quote follows after 20px. Footer has 16px vertical padding.',
    style:
      'Syne on sky-950 with cyan-100 text, cyan-200 emphasis and rail, 16px corners and a 1px cyan-700 border. The rail uses vertical writing, 10px semibold type and 0.12em tracking. Quote is 20px/28px with its final sentence bold on a new line 4px below. The footer has a cyan-700 dashed top rule and 12px/16px type. No shadow.',
    states:
      'No controls, motion or hover effects. The duplicated vertical rail and decorative tooth SVG are aria-hidden. The visit type appears in readable body text.',
    responsive:
      'Width is 288px below 640px and 352px from 640px. The 32px rail and 20px body padding stay fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
