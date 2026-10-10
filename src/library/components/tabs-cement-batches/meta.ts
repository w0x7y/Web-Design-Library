import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-cement-batches',
  name: 'Tabs — Concrete batch docket',
  category: 'tabs',
  tags: ['brutalist', 'dark'],
  description:
    'A Castline concrete-lab docket with numbered batch tabs and compression-test results. Use it in construction materials QA interfaces.',
  preview: { kind: 'element' },
  fonts: ['Archivo:wght@400..900'],
  brief: {
    layout:
      'A square 16px-padded docket with 2px border and yellow masthead rule. Two stacked, numbered batch selectors have 8px gaps and 8px vertical padding. The result grid shows a 36px compression value beside its MPa unit, followed by cube reference and textual pass status.',
    style:
      'Archivo on zinc-950, zinc-100 ink, zinc-300 secondary copy, zinc-400 units, zinc-700 separators and yellow-300 emphasis. Bold uppercase 18px wordmark. Unselected controls have 1px zinc-500 boundaries; selection inverts to zinc-950 text on yellow-300. No radii or shadows.',
    states:
      'Batch radios switch result sections with CSS. Checked strips have yellow-300 fill and border; hover uses zinc-800. Labels show 2px yellow-300 keyboard outlines offset by 2px. Forced colors retain radio focus and underline the selected strip. Pass status is written in words. No animation.',
    responsive:
      '288px wide below 640px; 352px from 640px. The arrangement and type sizes stay the same; the wider frame adds room for the content.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
