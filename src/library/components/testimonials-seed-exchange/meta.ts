import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-seed-exchange',
  name: 'Seed exchange field reports',
  category: 'testimonials',
  tags: ['brutalist', 'editorial', 'light'],
  description:
    'An accession catalogue of growers’ reports, with one seed variety per quadrant. Use it for seed exchanges and community gardens.',
  preview: { kind: 'section' },
  fonts: ['DM Mono:wght@400;500'],
  brief: {
    layout:
      '1280px container with heading and accession count above a 2px bordered four-cell catalogue. Cells have 24px padding, accession label, crop name, quote and grower attribution. 64px section padding, 96px at 1024px.',
    style:
      'DM Mono throughout. Green-50 paper and green-950 ink with green-300 cell rules and a yellow-200 count stamp. 30px heading, 48px at 640px; 20px crop names and 16px quotes at 1.625 leading. Square corners, no shadows.',
    states:
      'Links underline on hover on devices with hover. Every link has a 2px current-colour focus-visible outline offset 4px. No animation or automatic movement.',
    responsive:
      'The catalogue is one column below 768px and two-by-two at 768px. Header becomes a horizontal row at 640px; gutters increase to 40px and cells to 32px padding at 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
