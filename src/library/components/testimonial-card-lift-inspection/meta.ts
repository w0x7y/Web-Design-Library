import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-lift-inspection',
  name: 'Lift inspection endorsement',
  category: 'testimonial-card',
  tags: ['brutalist', 'dark'],
  description:
    'A black and yellow inspection docket for Axlemark lift certification, with an inset endorsement and signed inspection footer. Use it for industrial service credentials.',
  preview: { kind: 'element' },
  fonts: ['Archivo:wght@400..700'],
  brief: {
    layout:
      'A 288px figure, 352px from 640px. A yellow masthead with 16px horizontal and 12px vertical padding precedes a 20px padded quote and a ruled two-column inspector footer.',
    style:
      'Archivo on a neutral-950 body, yellow-300 masthead, white quote, neutral-300 details and neutral-700 borders. Square corners and a 2px neutral-950 outer border. Quote is 22px with 30px leading; masthead has 12px uppercase type.',
    states:
      'Static endorsement with no controls, animation or hover state. The inspection status is written as text rather than conveyed only by yellow.',
    responsive:
      'Width changes from 288px to 352px at 640px. The quote and footer retain the same spacing and type size.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
