import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-textile-audit',
  name: 'Buttons — Textile audit',
  category: 'buttons',
  tags: ['corporate', 'dark'],
  description:
    'A supplier-audit button with a native supporting-document disclosure for Selvedge Check textile certification. The disclosure opens without JavaScript.',
  preview: { kind: 'element' },
  fonts: ['DM Sans:wght@400;500;600;700'],
  brief: {
    layout:
      '288px panel with 20px padding. A 12px brand sits above a 24px title after 12px. A ruled 12px status strip follows after 16px with 8px vertical padding. Full-width 44px audit button follows after 16px. Native details starts 12px below with a 40px summary and count. Opening it reveals a two-item list with 8px gaps, 12px top padding, 4px bottom padding and a top rule.',
    style:
      'DM Sans; neutral-900 background with 12px radius, neutral-100 heading, neutral-300 status, emerald-200 brand, ready label and primary fill. Primary has 6px radius, neutral-950 14px semibold text and a 16px arrow. Status/documents rules are 1px neutral-500; summary count has a 1px neutral-500 border and 4px corners. Document links are 12px emerald-200 with 4px underline offsets. No shadow.',
    states:
      'Audit fills emerald-100 on hover, summary fills neutral-800 and document links turn white. All interactive elements show 2px emerald-200 keyboard outlines offset 2px. Summary natively opens with Enter or Space; styled document list has role=list. No animation.',
    responsive:
      '288px below 640px; 384px from 640px. Status strip remains a single row and actions stretch; both closed and expanded disclosure fit within a 384px height budget.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
