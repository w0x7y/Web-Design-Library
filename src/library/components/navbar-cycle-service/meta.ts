import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-cycle-service',
  name: 'Cycle workshop navigation',
  category: 'navbar',
  tags: ['brutalist', 'light'],
  description:
    'A bicycle workshop header divided into brand, service index and a solid booking panel. Use it for repair shops and practical local services.',
  preview: { kind: 'section' },
  fonts: ['Space Mono:wght@400;700'],
  brief: {
    layout:
      '1280px maximum grid with 2px black outer side borders. Brand panel has 24px padding and a 40px checkerboard emblem, 24px bold name and 12px location label. Service index is a two-column grid with 16px gaps and 14px links in a 24px-padded panel. Booking panel has 24px padding, 12px capacity label and 18px bold action 16px below.',
    style:
      'Space Mono, yellow-100 canvas with black text and 2px black top and bottom rules. Checker emblem has black and orange-600 squares. Booking panel is black with yellow-100 ink. Square corners, no shadows.',
    states:
      'Brand underlines on hover. Service links underline with 4px underline offset. Booking panel fills neutral-800. All controls have 2px currentColor focus outlines offset 2px, including forced colours.',
    responsive:
      'Panels stack below 768px with 2px bottom dividers. From 768px they use 1fr 1fr auto columns; brand and service bottom dividers become right dividers. Main container is capped at 1280px. Every panel retains 24px padding.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
