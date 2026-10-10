import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-dive-inspection',
  name: 'Buttons — Dive inspection',
  category: 'buttons',
  tags: ['brutalist', 'dark'],
  description:
    'Stepped permit, hull-scan and report buttons for Keelmark commercial dive inspections. Use it alongside a berth inspection record.',
  preview: { kind: 'element' },
  fonts: ['Space Grotesk:wght@400;500;600;700'],
  brief: {
    layout:
      '288px-wide panel with a 4px left rule and 20px padding. A split 12px masthead precedes a 24px title after 20px and a berth hint after 8px. Three left-aligned actions follow after 20px with 12px gaps: full-width 48px permit, five-sixths-width 40px upload and two-thirds-width 36px report.',
    style:
      'Space Grotesk; slate-950 panel, slate-100 text, slate-300 hint and cyan-200 rule/masthead. Square primary cyan-200 button has slate-950 14px bold text and 16px arrow. Upload has a 1px slate-400 border; report has a 1px slate-400 bottom rule. Secondary labels are 12px. No rounding or shadows.',
    states:
      'Permit turns white on hover; upload fills slate-800; report text becomes cyan-200. All buttons show 2px cyan-200 keyboard outlines offset 2px. Icons are decorative and every action is named. No animation.',
    responsive:
      '288px below 640px; 368px from 640px. Action widths remain 100%, five-sixths and two-thirds of the expanding content width. Fixed typography and spacing.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
