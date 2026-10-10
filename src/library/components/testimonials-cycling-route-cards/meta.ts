import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-cycling-route-cards',
  name: 'Cycling route reviews',
  category: 'testimonials',
  tags: ['corporate', 'minimal', 'light'],
  description:
    'Two rider accounts on route cards for Spoke & Path cycling tours. Use it for guided and self-guided holidays with practical trip details.',
  preview: { kind: 'section' },
  fonts: ['IBM Plex Sans:wght@400..600'],
  brief: {
    layout:
      '1280px container with heading above two white route cards. 24px gaps separate the cards. Each has a route header, quote and dashed-rule rider footer with 24px padding. Section padding is 64px then 96px from 1024px.',
    style:
      'Emerald-50 section, emerald-950 ink, emerald-700 accents and emerald-200 borders. IBM Plex Sans, 36px heading stepping to 48px, 24px quotes at 1.5 leading. Square panels with no shadows.',
    states:
      'Links underline on hover on devices with hover. Every link has a 2px current-colour focus-visible outline offset 4px. No animation or automatic movement.',
    responsive:
      'Route cards stack below 768px and become two equal columns at 768px. Header aligns horizontally at 640px; gutters increase from 24px to 40px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
