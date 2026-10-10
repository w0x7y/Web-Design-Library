import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-peat-fieldwork',
  name: 'Buttons — Peat fieldwork',
  category: 'buttons',
  tags: ['corporate', 'light'],
  description: 'A peat-restoration visit button and joined plot-map/contact toolbar for Moorback Project. Use it beside a fieldwork plot reference.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Sans:wght@400;500;600;700'],
  brief: {
    layout:
      '288px panel with 1px border. A 20px-horizontal, 12px-vertical masthead pairs the project name and a 20px peat-layer sprout icon. Body has 20px padding; plot title is 24px with 4px margins to its 12px category and survey hint. A full-width 44px visit button follows 20px below, two equal 40px toolbar buttons 12px later and a 12px equipment note after 12px.',
    style:
      'IBM Plex Sans; white panel, slate-900 headings, slate-600 metadata, emerald-900 brand and primary fill. Card has 8px corners, button corners 6px. Primary has white 14px semibold text. Toolbar has 1px slate-500 borders, 12px medium labels and complementary outside corners. No shadow.',
    states:
      'On hover-capable devices visit fills emerald-800 and toolbar fills slate-100. Every button shows a 2px emerald-900 keyboard outline offset 2px. Peat and sprout mark is decorative. No animation.',
    responsive:
      '288px below 640px and 384px from 640px. Primary and equal toolbar halves stretch; type, height and padding remain fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
