import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-rail-platform',
  name: 'Regional rail navigation',
  category: 'navbar',
  tags: ['corporate', 'light'],
  description:
    'A station-style header with numbered travel links and a separate ticket action. Use it for regional rail and public transport operators.',
  preview: { kind: 'section' },
  fonts: ['IBM Plex Sans:wght@400;500;600'],
  brief: {
    layout:
      '1280px maximum grid, 24px padding and gaps. Brand has a 32px emblem and 24px semibold wordmark above a 12px service area. Two-column numbered navigation has 24px horizontal and 12px vertical gaps. Ticket panel has 16px padding and a 44px minimum-height booking link.',
    style:
      'IBM Plex Sans, sky-50 canvas, blue-950 ink, blue-200 bottom border. Menu is 14px medium, numbers 12px blue-700. Blue-950 ticket panel has 8px corners and white text. White button has 4px corners and blue-950 ink. No shadows.',
    states:
      'Brand and navigation underline on hover. Ticket button fills sky-100. All links show a 2px currentColor focus outline offset 2px, including forced colours.',
    responsive:
      'Regions stack below 768px. At 768px use two columns with tickets spanning both. At 1024px use 1fr 1.4fr 1fr columns and one-column tickets. The menu keeps two columns at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
