import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-seismic-stations',
  name: 'Seismic station reports',
  category: 'testimonials',
  tags: ['brutalist', 'editorial', 'light'],
  description:
    'Four operator accounts in a station-record grid for Faultline Network. Use it for an earthquake-monitoring network with community and research partners.',
  preview: { kind: 'section' },
  fonts: ['DM Mono:wght@400;500'],
  brief: {
    layout:
      '1280px container with heading and station count above a 2px bordered four-cell station grid. Cells have 24px padding, station identifier, site name, quote and operator attribution. 64px section padding, 96px at 1024px.',
    style:
      'DM Mono throughout. Green-50 paper and green-950 ink with green-300 cell rules and a yellow-200 count stamp. 30px heading, 48px at 640px; 20px site names and 16px quotes at 1.625 leading. Square corners, no shadows.',
    states:
      'Links underline on hover on devices with hover. Every link has a 2px current-colour focus-visible outline offset 4px. No animation or automatic movement.',
    responsive:
      'The station grid is one column below 768px and two-by-two at 768px. Header becomes a horizontal row at 640px; gutters increase to 40px and cells to 32px padding at 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
