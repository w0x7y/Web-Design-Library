import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-fossil-trays',
  name: 'Tabs — Fossil preparation trays',
  category: 'tabs',
  tags: ['minimal', 'light'],
  description:
    'A Stratum Desk fossil preparation selector with specimen drawings, accession references and bench notes. Use it in palaeontology collection workflows.',
  preview: { kind: 'element' },
  fonts: ['DM Sans:wght@400..700'],
  brief: {
    layout:
      'A square, 20px-padded card with 1px border. A 10px lab name precedes a 20px heading. Two 32px shelf-label tabs sit 16px below with 8px gap. The selected specimen pairs a 72px line drawing with an accession, name and period in a two-column grid, separated by 16px. A ruled preparation note follows 20px below.',
    style:
      'DM Sans, white canvas, stone-900 headings, stone-600 metadata and notes. Stone-300 outer frame and stone-200 note rule. Unselected tabs use 1px stone-400 borders; selected labels use stone-800 fill with white text. Specimen names are 14px semibold, accessions 10px, notes 12px with 20px line height. No corner rounding or shadows.',
    states:
      'Two native radios swap specimens and notes with CSS :has(). Hover fills stone-100; selection inverts stone-800 and white. Labels show 2px stone-900 keyboard outlines offset 2px. High contrast retains radio focus and selection underline. Decorative drawings accompany named specimens. No motion.',
    responsive:
      '288px wide below 640px; 352px from 640px. The arrangement and type sizes stay the same; the wider frame adds room for the content.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
