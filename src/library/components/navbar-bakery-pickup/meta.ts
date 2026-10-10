import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-bakery-pickup',
  name: 'Bakery collection navigation',
  category: 'navbar',
  tags: ['playful', 'light'],
  description:
    'A co-op bakery header with a tilted wordmark, soft capsule links and a collection notice. Use it for neighbourhood food shops taking advance orders.',
  preview: { kind: 'section' },
  fonts: ['Fraunces:wght@400;600;700'],
  brief: {
    layout:
      '1280px maximum flex layout with 24px padding and 32px gaps. Brand stamp has 20px horizontal and 12px vertical padding, 30px bold wordmark and 12px sublabel. Navigation wraps 14px semibold pill links with 8px gaps and 12px horizontal padding. Collection panel has a 12px label above an 18px semibold action, separated by 8px.',
    style:
      'Fraunces throughout, rose-100 canvas and rose-950 ink. White brand stamp rotated -3deg has a 2px rose-950 border and 16px corners. Links have rose-50 fills, 1px rose-300 borders and fully rounded ends. Pickup note has a 2px rose-950 left rule. No shadows.',
    states:
      'Brand and collection action underline on hover. Menu pills fill rose-200. All controls have 2px currentColor focus outlines offset 2px, including forced colours.',
    responsive:
      'Regions stack below 768px, with brand aligned to start. At 768px switch to a wrapping horizontal row. Collection panel moves to the far right with auto left margin. Menu pills always wrap.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
