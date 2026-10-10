import type { ComponentMeta } from '../../types'

export default {
  slug: 'product-card-ceramic',
  name: 'Handmade ceramic product',
  category: 'product-card',
  tags: ['editorial', 'light'],
  description:
    'A quiet ceramics card with a custom vase illustration, material details and price. Use it in independent craft stores and curated homeware listings.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px product card, 320px from 640px, with a 144px illustration panel and 16px-padded information body. The panel contains a labeled SVG with a 160×130 viewBox displayed at 160×128px. A collection eyebrow, 20px name and material line lead to a ruled price and link row.',
    style:
      'Square stone-300 border, warm #f7f4ec body and stone-200 artwork panel. Vase uses terracotta #aa6445 with a darker rim and pale highlight. System-serif product name and price are 20px with 28px line height. The 9px batch label is monospace with 0.1em uppercase tracking; the 10px collection label has 0.15em uppercase tracking. Material and link are 12px with 16px line height. The purchase row has a 16px top margin and gap, a stone-300 top rule and 12px top padding. Its 14px arrow sits inline with a -0.125em vertical offset; the link has 4px corners and a 4px underline offset.',
    states:
      'The view-object link is named "View object: The Sunday vase" for assistive technology, stays underlined and changes to stone-600 on hover, with a 2px stone-900 keyboard outline offset by 2px. The illustration has an accessible description. There is no animation.',
    responsive:
      'Fixed width changes from 288px to 320px at 640px. The 144px illustration height and 16px body padding are unchanged; the price and link remain on one row.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
