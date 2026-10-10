import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-spice-dispatch',
  name: 'Buttons — Spice dispatch',
  category: 'buttons',
  tags: ['minimal', 'dark', 'has-image'],
  description: 'Unequal packing and sack-label buttons with a spice photograph for Saffron Lane spice merchants. Use it beside a wholesale order record.',
  preview: { kind: 'element' },
  fonts: ['Archivo:wght@400;500;600;700'],
  brief: {
    layout:
      '288px panel with 20px padding. Header pairs a 64px-wide, 80px-tall spice photo with a brand and 20px title, separated by 16px. Actions follow 20px below: a full-width 48px packing button with a 16px arrow, then an intrinsic-width 40px sack-label button with an 18-sack count after an 8px gap. A dispatch-time note follows after 16px.',
    style:
      'Archivo on stone-950 with orange-100 text, orange-200 uppercase brand and primary fill, and a stone-300 12px note. Card has 12px corners; photo and buttons have 8px corners. Title 20px medium at 1.25 leading; primary 14px semibold, secondary 12px. Secondary has a 1px stone-500 border and orange-200 tabular count. No shadow.',
    states:
      'On hover-capable devices packing fills orange-100 and label printing fills stone-800. Both have 2px orange-200 keyboard outlines offset 2px. Photo has descriptive alt text; count is named 18 sacks. No animation.',
    responsive:
      '288px below 640px and 352px from 640px. Photo and button heights stay fixed; primary stretches with the panel.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
