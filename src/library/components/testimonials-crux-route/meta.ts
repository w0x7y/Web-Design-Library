import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-crux-route',
  name: 'Climbers on the route',
  category: 'testimonials',
  tags: ['brutalist', 'dark'],
  description:
    'A bold vertical route of numbered climber accounts. Use it for climbing gyms, sports clubs and practical training programmes.',
  preview: { kind: 'section' },
  fonts: ['Archivo:wght@400..900'],
  brief: {
    layout:
      '1280px container with a 4px orange left route rail. At 768px a 280px heading column sits alongside three numbered quote rows. Rows use 40px numbers beside flexible quotes and 32px vertical spacing. 24px phone gutters, 40px at 640px, 64px vertical padding and 96px at 1024px.',
    style:
      'Neutral-950 background, neutral-100 text, orange-400 rail and numbers. Archivo 36px heavy uppercase title increasing to 60px at 640px; 24px medium quotes with 1.5 leading. Neutral-700 dividers, square edges, no shadows.',
    states:
      'Links underline on hover on devices with hover. Every link has a 2px current-colour focus-visible outline offset 4px. No animation or automatic movement.',
    responsive:
      'All content stacks below 768px; heading and routes form 280px / flexible columns at 768px with 64px gap. At 640px the title grows to 60px and gutters to 40px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
