import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-marsh-restoration',
  name: 'Badges — Marsh restoration',
  category: 'badges',
  tags: ['minimal', 'editorial', 'light'],
  description: 'Brackhaven salt-marsh conservation badges pair restored-area figures with habitat labels and a survey window. Use them on reserve monitoring records.',
  preview: { kind: 'element' },
  fonts: ['Instrument Serif'],
  brief: {
    layout:
      '288px panel with 24px padding and a 1px border. A 12px trust/plot label precedes a 36px 12 ha-to-18 ha area row by 20px, with a 20px arrow and 12px gaps. A wrapping badge row follows after 24px, with 8px gaps, 10px horizontal and 4px vertical padding. Survey strip follows after 20px with a top rule and 12px top padding.',
    style:
      'Stone-50 background, stone-950 text and 1px stone-300 boundaries, square corners and no shadow. Instrument Serif on the 36px area row at 40px leading; default sans elsewhere. Restored badge is emerald-100 with emerald-950 12px medium text; habitat badges use 12px text and stone-300 borders. Arrow and survey text are stone-600.',
    states:
      'Static habitat badges with no controls, hover effects or animation. Area change has an accessible name in hectares; the decorative arrow is hidden. Every status is written in words.',
    responsive:
      '288px below 640px and 352px from 640px. Badge dimensions stay fixed and wrap within available width; no other breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
