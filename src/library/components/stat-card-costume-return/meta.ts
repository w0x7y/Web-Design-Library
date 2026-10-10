import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-costume-return',
  name: 'Costume return ticket',
  category: 'stat-card',
  tags: ['playful', 'dark'],
  description:
    'A costume-hire return ticket for Cuecup with an illustrated shirt, current checked-out count and the current return deadline. Use it in theatre wardrobe and rental operations.',
  preview: { kind: 'element' },
  fonts: ['Syne:wght@400..700'],
  brief: {
    layout:
      'A 288px-wide card, 320px from 640px, with 20px padding and a 24px radius. A brand header precedes a 56px count alongside a decorative 64px shirt. A 16px-padded peach return stub has a dashed top rule and a full-width log link.',
    style:
      'Syne, pink-950 panel and pink-200 type. A 1px pink-800 outer border, orange-100 stub with pink-950 text and 12px bottom radii. The shirt is pink-200 with a pink-950 outline. Heading is 14px, metadata 10px, return figure 24px bold. No shadow.',
    states:
      'Return-log link has a pink-950 fill with orange-100 text, becomes pink-900 on hover, and has a 2px pink-950 focus outline offset 2px. Decorative shirt is aria-hidden. Return deadline and quantities are words and numbers. No animation.',
    responsive:
      'Root width grows from 288px to 320px at 640px. The shirt/count row and return stub keep their sizes and padding.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
