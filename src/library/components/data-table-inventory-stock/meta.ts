import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-inventory-stock',
  name: 'Inventory stock table',
  category: 'data-table',
  tags: ['corporate', 'light'],
  description:
    'A stock-management table with a summary row and explicit reorder labels. Use it for a small store’s operations dashboard.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1024px inventory stock table with context header, summary, four-column native table and record-count footer. All three records are fully visible.',
    style:
      'Use slate-50 slate-950 surfaces and type, border-slate-200 rules and text-slate-500 metadata. Desktop table cells have 16px horizontal padding; mobile record cards have 12px padding.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Below 768px table rows become stacked record cards. Every cell gains a visible column label; semantic table headings remain available on desktop. At 768px restore table display and four columns.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
