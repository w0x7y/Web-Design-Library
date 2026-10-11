import type { ComponentMeta } from '../../types'

export default {
  slug: 'product-card-included-download-list',
  name: 'Product cards — Digital product with included files',
  category: 'product-card',
  tags: ['stacked', 'list', 'icons'],
  description:
    'A small icon-led identity block lists three included digital files above its price and action.',
  preview: {
    kind: 'element',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Icon  Digital product name                                │
│      Three files included                                │
│                                                          │
│Main document                                       PDF   │
│Editable source                                     ZIP   │
│Reference guide                                     PDF   │
│                                                          │
│$48                                       [View files]    │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 288px card widens to 320px at 640px with 16px padding. A 40px icon tile sits beside product identity with a 12px gap. Included files follow in a bordered list with 12px row padding; the footer aligns an 18px price and 44px outlined action.',
    hierarchy:
      'Read the product name and file count before included file names and formats, then price. Keep product names under 4 words and file labels under 3. Formats use concise conventional extensions.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The file list remains single-column at both widths. File names wrap beside fixed short format labels, and the footer accommodates its short action label.',
    usage:
      'Use for a digital deliverable where included files matter more than an image. Pick a media card for visual products. Variations: list format and size together, include two files, or replace the price with a license label.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
