import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-rink-pass',
  name: 'Skating lesson pass quote',
  category: 'testimonial-card',
  tags: ['playful', 'dark'],
  description:
    'A skating pupil endorsement for Glidehour, arranged as a pass with a vertical rink rail and an illustrated blade. Use it for sports instruction and rink memberships.',
  preview: { kind: 'element' },
  fonts: ['Syne:wght@400..700'],
  brief: {
    layout:
      'A 288px figure, 352px from 640px, split into a 32px vertical rail and the remaining body. The body has 20px padding, a brand and skate illustration, a 20px quote 20px below and a direct-child author footer beneath a dashed rule.',
    style:
      'Syne on sky-950 with cyan-100 text and a cyan-200 rail. 16px corners, a 1px cyan-700 border. The rail uses vertical writing at 10px; the quote uses 20px/28px and bold emphasis on the final sentence. The dashed rule is cyan-700.',
    states:
      'No controls, motion or hover effects. The rail says ADULT BEGINNER in text, and the inline skate illustration is decorative and aria-hidden.',
    responsive:
      'Below 640px width is 288px; from 640px it is 352px. The 32px rail and 20px body padding stay fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
