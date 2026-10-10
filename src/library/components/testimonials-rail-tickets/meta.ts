import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-rail-tickets',
  name: 'Passenger tickets',
  category: 'testimonials',
  tags: ['corporate', 'minimal', 'light'],
  description:
    'Two journey-specific passenger accounts in a rail-ticket layout. Use it for transport services with concrete customer experiences.',
  preview: { kind: 'section' },
  fonts: ['IBM Plex Sans:wght@400..600'],
  brief: {
    layout:
      '1280px container with heading above two white ticket panels. 24px gaps separate the tickets. Each has a route header, quote and dashed-rule passenger footer with 24px padding. Section padding is 64px then 96px from 1024px.',
    style:
      'Emerald-50 section, emerald-950 ink, emerald-700 accents and emerald-200 borders. IBM Plex Sans, 36px heading stepping to 48px, 24px quotes at 1.5 leading. Square panels with no shadows.',
    states:
      'Links underline on hover on devices with hover. Every link has a 2px current-colour focus-visible outline offset 4px. No animation or automatic movement.',
    responsive:
      'Tickets stack below 768px and become two equal columns at 768px. Header aligns horizontally at 640px; gutters increase from 24px to 40px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
