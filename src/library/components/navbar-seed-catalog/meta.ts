import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-seed-catalog',
  name: 'Seed bank catalog navigation',
  category: 'navbar',
  tags: ['minimal', 'light'],
  description:
    'A seed bank header with a quiet collection identity, browsing links and a downloadable seasonal catalog. Use it for community growers and specialist collections.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      '1280px maximum grid with 24px padding and 24px gaps. Brand is 24px medium beside a 24px seed SVG, with 12px collection statistics below. Content column has wrapping 14px navigation links with 24px horizontal and 12px vertical gaps. Catalog row sits 20px below, with a 1px border, 12px padding and wrapping text/action groups 12px apart. The PDF format label has 8px left margin and 12px type.',
    style:
      'Default sans stack, green-50 background, green-950 text, green-200 bottom border and green-700 catalog border. White catalog fill, 14px catalog title, 12px green-800 seed provenance note. Square corners, no shadows.',
    states:
      'Brand, browse links and download link underline on hover with 4px underline offset. All controls have 2px currentColor focus outlines offset 2px, including forced colours.',
    responsive:
      'Brand and content stack below 768px. From 768px use 15rem 1fr columns and give the brand a green-200 right border with 24px right padding. Navigation and catalog groups wrap at all widths.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
