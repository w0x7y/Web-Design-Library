import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-scent-consultation',
  name: 'Buttons — Scent atelier',
  category: 'buttons',
  tags: ['editorial', 'dark', 'has-image'],
  description:
    'An oval consultation button with note and sample actions for Oris Vale bespoke perfumery, paired with a perfume photograph.',
  preview: { kind: 'element' },
  fonts: ['Instrument Serif:wght@400'],
  brief: {
    layout:
      '288px panel with 24px horizontal padding, 32px top padding and 24px bottom padding. A centered 14px masthead leads into a 64px by 96px portrait photograph beside a 30px heading with 16px gap, 20px below. Oval 56px consultation button follows after 24px. Two underlined text actions share a footer 12px below.',
    style:
      'Instrument Serif on rose-950 with rose-100 text. Root top corners have 80px radii; photo top corners are fully rounded. Heading has line-height 1. Consultation uses a 50% elliptical radius, a 1px rose-300 border and 18px text. Footer labels are 14px. No shadow.',
    states:
      'Consultation fills rose-900 on hover; footer labels turn white. All controls show 2px rose-200 keyboard outlines offset 2px. Perfume image has descriptive alt text. No animation.',
    responsive:
      '288px below 640px; 336px from 640px. Portrait dimensions and all spacing remain fixed; consultation and footer expand with the root.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
