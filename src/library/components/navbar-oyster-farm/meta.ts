import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-oyster-farm',
  name: "Oyster farm ordering navigation",
  category: 'navbar',
  tags: ['corporate', 'light'],
  description: "An oyster-farm header for Tidemark, with a shell emblem, numbered farm links and a separate dozen-order panel. Use it for growers selling fresh shellfish directly.",
  preview: { kind: 'section' },
  fonts: ['IBM Plex Sans:wght@400;500;600'],
  brief: {
    layout: "A 1280px maximum grid with 24px padding and gaps. Brand has a 32px shell emblem and 24px semibold wordmark above a 12px location line spaced 8px below. A two-column list has 24px horizontal and 12px vertical gaps, 14px medium links with 12px numbers 8px before them. The order panel has 16px padding, a 14px note, 12px spacing to a 44px-minimum order link with 16px side padding and a 16px arrow.",
    style: "IBM Plex Sans on sky-50 with blue-950 ink and a blue-200 bottom border. Navigation numbers are blue-700. The blue-950 order panel has white text and 8px corners; the white order button has blue-950 text and 4px corners. Shell emblem uses a 2px currentColor outline. No shadows.",
    states: "Brand and farm links underline on hover. Order button fills sky-100. All links show 2px currentColor focus outlines offset 2px; the order button uses a white outline against its dark panel. Forced-colours focus remains visible. Shell and arrow are decorative. No motion.",
    responsive: "Regions stack below 768px. At 768px use two columns, with the order panel spanning both. At 1024px use 1fr 1.4fr 1fr columns, with orders in the final column. Farm navigation keeps two columns at 320px.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
