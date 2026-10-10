import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-rowing-split',
  name: 'Rowing 500-metre split',
  category: 'stat-card',
  tags: ['minimal', 'dark'],
  description:
    'A precise rowing-performance card for Oarlog with a stopwatch-style average split and four 500-metre checkpoints. Use it in a rowing club or athlete training log.',
  preview: { kind: 'element' },
  fonts: ['DM Mono:wght@400;500'],
  brief: {
    layout:
      'A 288px-wide article, 352px from 640px, with 24px padding. Brand and distance appear on one row, followed by a 12px heading, a 44px stopwatch figure and an orange comparison line. Four bordered checkpoint cells form a two-by-two grid with 8px gaps. Session metadata sits below.',
    style:
      'DM Mono on neutral-950 with neutral-100 type, neutral-300 secondary text and orange-300 comparison text. A 1px neutral-700 outer border and 1px cell borders, square corners, no shadow. Stopwatch tracking is -0.025em with 1 line height; remaining text ranges from 10px to 14px.',
    states:
      'A static training record, with no controls or hover states. Every checkpoint and comparison is readable text; improvement is written as 2.1 seconds faster rather than relying on color. No motion.',
    responsive:
      'Root width increases from 288px to 352px at 640px. The checkpoint grid remains two columns and all type and padding remain unchanged.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
