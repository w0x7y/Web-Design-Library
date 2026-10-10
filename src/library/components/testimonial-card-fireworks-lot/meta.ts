import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-fireworks-lot',
  name: 'Fireworks maker show log',
  category: 'testimonial-card',
  tags: ['brutalist', 'light'],
  description:
    'A ruled show log endorsement for Emberlot fireworks, with four numbered lot checks. Use it on pyrotechnic manufacturing and professional display pages.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Mono:wght@400;500;600'],
  brief: {
    layout:
      'A 288px figure, 352px from 640px, with a 2px outer border and 4px hard offset shadow. A 16px-padded masthead precedes four equal lot cells with 8px vertical padding. The quote has 20px padding; the author footer has 16px side and 12px vertical padding.',
    style:
      'IBM Plex Mono, red-950 text on white, red-100 masthead and red-950 borders. Lot cells alternate white and red-100, with 12px lot numbers and 10px medium CHECKED labels. Quote is 18px/28px; footer is 11px. Square corners and a #450a0a hard shadow.',
    states:
      'No controls, hover or animation. The lot list has role="list" and each item names its lot and checked status; color is never the only status cue.',
    responsive:
      'Width grows from 288px to 352px at 640px. Four lot cells remain in one row; type and padding do not change.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
