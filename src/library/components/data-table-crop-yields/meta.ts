import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-crop-yields',
  name: 'Harvest yield ledger',
  category: 'data-table',
  tags: ['editorial', 'light', 'has-image'],
  description:
    'An editorial crop-yield ledger for Acrefolio with field photography, per-hectare measurements and a harvest total. Use it for agricultural reporting and seasonal comparisons.',
  preview: { kind: 'section' },
  fonts: ['Fraunces:wght@400;500;600;700'],
  brief: {
    layout:
      '1280px section with a 56px serif headline beside a 448px, 2:1 crop photograph at 1024px. A season strip with export link sits above a five-column field table. Four field rows show crop, area, harvested tonnes, yield and percentage against plan. A double-weight rule introduces two harvest totals.',
    style:
      'Fraunces, lime-50 ground, green-950 main text, green-800 annotations and green-300 hairlines. Headline is 40px with 1.1 line height, increasing to 56px at 768px. Yield figures are 24px with tabular numerals. Square photo edges, no cards, no shadows.',
    states:
      'Field-ledger link removes its underline on hover and has a 2px currentColor keyboard focus outline offset 2px. Positive and negative comparisons use written signs. Photograph has descriptive alt text; no animation.',
    responsive:
      'Below 1024px the photograph follows the masthead copy. Below 768px each field becomes a two-column labelled record, with field and crop spanning both columns. Totals stack below 640px and split into two columns above it. Section horizontal padding grows from 20px to 40px at 768px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
