import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-water-sampling',
  name: 'Buttons — Water sampling',
  category: 'buttons',
  tags: ['corporate', 'light'],
  description:
    'A water-test request button and joined label/email toolbar for Clearwell analytical laboratory. Use it beside a sample reference.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Sans:wght@400;500;600;700'],
  brief: {
    layout:
      '288px report panel with 1px border. A 12px-vertical/20px-horizontal masthead pairs the lab name with a 20px flask. Body has 20px padding; sample title is 24px with 4px margins to its 12px category and test hint. A full-width 44px request button starts 20px below. Two equal 40px toolbar buttons follow after 12px, with a 12px courier note 12px below.',
    style:
      'IBM Plex Sans; white panel, slate-900 headings, slate-600 metadata and cyan-900 branding and primary. Root has 8px radius, button corners 6px. Primary uses white 14px semibold text. Toolbar uses a 1px slate-500 border, 12px medium labels and complementary outer corners. No shadows.',
    states:
      'Request fills cyan-800 on hover; toolbar fills slate-100. Every button has a 2px cyan-900 keyboard outline offset 2px. Flask is decorative. No animation.',
    responsive:
      '288px below 640px; 384px from 640px. Request and equal toolbar halves stretch; typography, heights and padding remain fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
