import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-rewilding-survey',
  name: 'Buttons — Rewilding survey',
  category: 'buttons',
  tags: ['corporate', 'dark'],
  description: 'A habitat-survey action with a native field-document disclosure for Wildreach rewilding trust. Use it beside a restoration site record.',
  preview: { kind: 'element' },
  fonts: ['DM Sans:wght@400;500;600;700'],
  brief: {
    layout:
      '288px panel with 20px padding. A 12px brand precedes a 24px title by 12px. A ruled 12px site/status strip follows after 16px with 8px vertical padding. Full-width 44px survey button follows after 16px. Native details follows after 12px with a 40px summary and document count. Opening reveals two links with 8px gaps, 12px top padding, 4px bottom padding and a top rule.',
    style:
      'DM Sans, neutral-900 canvas with 12px corners, neutral-100 title, neutral-300 site text and emerald-200 brand, Mapped status and primary fill. Primary has 6px corners, neutral-950 14px semibold text and a 16px arrow. Rules and count border are 1px neutral-500; count has 4px corners. Document links are 12px emerald-200 with 4px underline offset. No shadow.',
    states:
      'On hover-capable devices survey fills emerald-100, summary fills neutral-800 and document links turn white. Every control has a 2px emerald-200 keyboard outline offset 2px. Summary opens natively with Enter or Space; document list has role=list. Mapped status is conveyed in text. No animation.',
    responsive:
      '288px below 640px and 384px from 640px. Status strip remains a single row and primary fills the width. Both closed and expanded disclosure fit the 384px capture height.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
