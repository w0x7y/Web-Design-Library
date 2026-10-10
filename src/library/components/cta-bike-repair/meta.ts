import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-bike-repair',
  name: 'Bike repair service sheet',
  category: 'cta',
  description:
    'A bold bike-repair CTA laid out as a numbered workshop service sheet with transparent starting prices.',
  tags: ['brutalist', 'light'],
  preview: { kind: 'section' },
  fonts: ['Archivo:wght@400..900'],
  brief: {
    layout:
      '1280px maximum-width orange section with 24px side and 48px vertical padding. A 2px ruled masthead, stacked issue number, headline and two-row price list, followed by a ruled booking footer. Gaps are 32px; service rows have 16px vertical padding.',
    style:
      'Archivo throughout, zinc-950 ink on orange-400. Issue number is 80px black with -0.06em tracking. Uppercase headline is 40px black, leading 1 and -0.025em tracking. Square zinc-950 button with white 14px semibold text, 48px minimum height; no shadows.',
    states:
      'Booking action becomes zinc-800 on hover-capable devices and shows a 2px zinc-950 keyboard outline offset 4px. No motion.',
    responsive:
      'At 640px padding is 64px vertical and 32px horizontal, heading is 56px, footer forms a row. At 1024px body becomes .5:1.5:1 columns. All smaller widths stack.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
