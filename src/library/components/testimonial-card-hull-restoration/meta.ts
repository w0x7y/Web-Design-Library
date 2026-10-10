import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-hull-restoration',
  name: 'Shipwright restoration endorsement',
  category: 'testimonial-card',
  tags: ['brutalist', 'dark'],
  description:
    'A black and yellow owner endorsement for Oak & Keel shipwrights, with a divided vessel footer. Use it on wooden-boat restoration and refit pages.',
  preview: { kind: 'element' },
  fonts: ['Archivo:wght@400..700'],
  brief: {
    layout:
      'A 288px figure, 352px from 640px, with a 2px outer border. A masthead with 16px side and 12px vertical padding precedes a 20px padded body. A 10px uppercase owner-report label sits 16px above the quote. A two-column footer has 20px side and 16px vertical padding, with a divider and 12px left padding in the vessel column.',
    style:
      'Archivo on neutral-950, yellow-300 masthead, white quote, neutral-300 supporting text and neutral-700 footer borders. Square corners and no shadow. Quote is 22px medium with 30px leading; masthead and footer use 12px/16px type.',
    states:
      'Static endorsement with no controls, animation or hover state. The refit reference and vessel details are written as text.',
    responsive:
      'Width changes from 288px to 352px at 640px. The two-column footer, quote, padding and type sizes stay unchanged.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
