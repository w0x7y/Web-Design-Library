import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-fencing-strip',
  name: 'Buttons — Piste booking',
  category: 'buttons',
  tags: ['minimal', 'light'],
  description:
    'A split booking button, icon timetable control and quiet guest action for Piste Nine fencing club.',
  preview: { kind: 'element' },
  fonts: ['Manrope:wght@400;500;600;700'],
  brief: {
    layout:
      '288px-wide open strip with a 4px top rule and 20px padding. A 12px uppercase club label precedes a 24px heading after 20px, then a 12px hint. After 24px a 48px-tall reservation button shares a row with a 48px square timetable button. A guest action sits right-aligned 12px below.',
    style:
      'Manrope; white surface, stone-800 headings, stone-600 hint, red-900 top rule and primary fill. Square buttons with white 14px semibold primary text; timetable has a 1px red-900 border and 20px calendar SVG. Guest action is stone-700, 12px and underlined at 4px offset. No radii or shadows.',
    states:
      'Hover fills primary red-800 and timetable red-50; guest text turns red-900. All controls show a 2px red-900 outline offset 2px on keyboard focus. The icon-only button has a timetable name. No animation.',
    responsive:
      '288px below 640px; 400px from 640px. Only the root width changes; reservation stretches beside the fixed 48px calendar button.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
