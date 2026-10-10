import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-mushroom-harvest',
  name: 'Buttons — Harvest desk',
  category: 'buttons',
  tags: ['minimal', 'dark', 'has-image'],
  description:
    'Unequal harvest and crate-label buttons with a crop photograph for Sporeline mushroom growers. Use it beside a daily picking record.',
  preview: { kind: 'element' },
  fonts: ['Archivo:wght@400;500;600;700'],
  brief: {
    layout:
      '288px-wide panel with 20px padding. Header pairs a 64px by 80px photo and title with a 16px gap. Actions start 20px below: a full-width 48px harvest button, then an intrinsic-width 40px packing button with 8px vertical gap. A packing-time note follows after 16px.',
    style:
      'Archivo on stone-950 with orange-100 text, orange-200 brand and primary button, stone-300 note. Root has 12px radius; photo and buttons have 8px radii. Title is 20px medium with 1.25 leading; action labels are 14px semibold and 12px. Packing button has a 1px stone-500 border and an orange-200 tabular crate count. No shadow.',
    states:
      'Hover makes harvest orange-100 and packing stone-800. Both buttons have 2px orange-200 keyboard outlines offset 2px. Photo has descriptive alt text, and crate quantity is explicitly named. No animation.',
    responsive:
      '288px below 640px and 352px from 640px. Fixed photo size and action heights remain; the harvest button stretches with the panel.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
