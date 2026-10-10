import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-olive-first-press',
  name: 'Olive mill first-press card',
  category: 'blog-card',
  tags: ['gradient', 'editorial', 'light'],
  description:
    'An olive-oil mill story with a branch illustration, warm harvest gradient and oil-lot footer. Use it for harvest journals and producer stories.',
  preview: { kind: 'element' },
  fonts: ['Instrument Serif'],
  brief: {
    layout:
      '288px card with 20px padding. Two-part brand and issue header has 8px top padding. A 72px-tall olive branch SVG follows after 20px; eyebrow after 16px, headline after 8px and summary after 12px. Footer starts after 16px with a top rule, 12px top padding and oil variety and lot beside reading time.',
    style:
      'Orange-100 through rose-100 to amber-50 gradient to bottom right in oklab. Amber-950 ink, amber-900 summary and amber-800 metadata. Top corners 48px, bottom corners 8px, no shadow. Instrument Serif 32px heading at 1.05 leading and -0.02em tracking; other text default sans. Summary 12px at 20px leading; header and uppercase eyebrow 9px; oil label 10px at 16px leading. Footer rule amber-950 at 20%. Olive drawing uses muted green leaves, dark green fruit and brown stems.',
    states:
      'Headline turns amber-800 on hover-capable devices and has a 2px amber-950 focus outline offset 2px. Branch illustration is decorative and static.',
    responsive:
      '288px below 640px and 320px from 640px. Illustration fills the inner width at fixed 72px height; typography and spacing remain unchanged.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
