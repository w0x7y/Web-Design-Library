import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-interpreter',
  name: 'Interpreter feedback card',
  category: 'testimonial-card',
  tags: ['minimal', 'light', 'has-image'],
  description:
    'A portrait-first endorsement for Palava conference interpreting, with an understated language-pair footer. Use it on specialist language service pages.',
  preview: { kind: 'element' },
  fonts: ['Manrope:wght@400..700'],
  brief: {
    layout:
      'A 288px figure, 352px from 640px, with 24px padding and a 1px border. A 48px square portrait sits beside the author, followed by a quote 24px below and a compact language-pair row after another 24px.',
    style:
      'Manrope, white background, teal-950 text and teal-800 supporting text, teal-100 border, 8px corners. The 20px quote has 28px line height; author and footer use 12px type. A 2px teal-700 rule sits above the footer.',
    states:
      'An informational figure with no controls, hover states or animation. The portrait has empty alt because the adjacent text names the person.',
    responsive:
      'Below 640px the width is 288px; from 640px it is 352px. Padding, type and portrait dimensions remain unchanged.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
