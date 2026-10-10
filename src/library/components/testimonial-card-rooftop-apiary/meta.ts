import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-rooftop-apiary',
  name: 'Rooftop apiary endorsement',
  category: 'testimonial-card',
  tags: ['gradient', 'light'],
  description:
    'A honey-toned endorsement for Hexstead rooftop hive care, with a honeycomb drawing and a native service-note disclosure. Use it for urban beekeeping services.',
  preview: { kind: 'element' },
  fonts: ['DM Sans:wght@400..700'],
  brief: {
    layout:
      'A 288px figure, 336px from 640px, with 20px padding and 20px corners. A wordmark and 56×40px honeycomb drawing lead into an 18px quote after 16px, a hive-visit disclosure after 16px and a two-line author figcaption after 16px.',
    style:
      'DM Sans, amber-950 text over an amber-100 to amber-50 to orange-200 diagonal gradient interpolated in oklab. Amber-800 honeycomb linework, amber-700 disclosure rule. Quote uses 18px/26px; author and summary are 12px. No shadow.',
    states:
      'Native details reveals the visit note. Summary underlines on hover, and keyboard focus has a 2px amber-950 outline with 2px offset that remains visible in forced colors. No animation.',
    responsive:
      'Width steps from 288px to 336px at 640px. The padding, typography and illustration keep their sizes. The opened note fits the capture frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
