import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-keeper-training',
  name: 'Toggles — Zoo-keeper training',
  category: 'toggles',
  tags: ['corporate', 'light'],
  description:
    'A KeeperSchool zoo-keeper training matrix with four practical-module opt-ins. Use it when assembling a supervised trainee learning plan.',
  preview: { kind: 'element' },
  fonts: ['Manrope:wght@400;500;600;700'],
  brief: {
    layout:
      'A 288px card. A header with 16px horizontal and 12px vertical padding contains a 10px eyebrow, 18px title and 12px cohort summary. Four module cells form a two-column grid with 12px gaps and 16px outer padding. Each cell has 12px padding, a 10px unit ID opposite a 20px checkbox, and a 12px label 12px below. A ruled footer has 16px horizontal and 12px vertical padding.',
    style:
      'Manrope on white with slate-900 main text and slate-600 secondary copy. A 1px slate-300 outer border and 12px radius. Module cells have 8px radii, 1px slate-300 borders and slate-50 fills; selected cells have sky-700 borders and sky-50 fills. Native checkboxes use sky-700 accents. Labels and title are semibold; the footer is 11px at 16px leading. No shadow.',
    states:
      'Feeding, Enrichment and Safe entry start checked; Care records starts unchecked. Native checkboxes support pointer and Space input. Each references its unit ID through aria-describedby. Native check marks convey state beside the cell highlight. Focus-visible draws a 2px sky-800 outline offset 2px, including forced colours. No hover changes or animation.',
    responsive:
      'Fixed 288px width below 640px and 320px from 640px. The two-column grid, control dimensions, padding and type remain unchanged. The card stays within the 384px-high element frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
