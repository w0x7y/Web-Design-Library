import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-pest-monitor',
  name: 'Pest monitoring log quote',
  category: 'testimonial-card',
  tags: ['brutalist', 'light'],
  description:
    'A sharply ruled customer log for Tracepin pest monitoring, with numbered station cells and a practical hotel endorsement. Use it for prevention and inspection services.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Mono:wght@400;500;600'],
  brief: {
    layout:
      'A 288px figure, 352px from 640px, with a 2px outer border and a 4px hard offset shadow. A 16px-padded masthead precedes four equal station cells. The quote has 20px padding; an author footer has 16px side and 12px vertical padding.',
    style:
      'IBM Plex Mono, red-950 text on white, red-100 masthead and red-950 borders. Station cells alternate white and red-100 and show explicit OK text. The 18px quote has 28px leading. Square corners and a #450a0a hard shadow.',
    states:
      'No controls, hover or animation. The station list has role=list, and each item names its monitor and status without relying on fill color.',
    responsive:
      'Width grows from 288px to 352px at 640px. Four station cells remain in a row and keep 12px type, with unchanged quote and footer padding.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
