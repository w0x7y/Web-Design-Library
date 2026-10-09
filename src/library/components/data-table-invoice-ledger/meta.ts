import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-invoice-ledger',
  name: 'Invoice ledger',
  category: 'data-table',
  tags: ['minimal', 'light'],
  description:
    'An invoice table with payment status and an outstanding balance. Use it in a billing or freelance administration workspace.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1024px invoice ledger with context header, summary, four-column native table and record-count footer. All three records are fully visible.',
    style:
      'Use white zinc-950 surfaces and type, border-zinc-200 rules and text-zinc-500 metadata. Desktop table cells have 16px horizontal padding; mobile record cards have 12px padding.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Below 768px table rows become stacked record cards. Every cell gains a visible column label; semantic table headings remain available on desktop. At 768px restore table display and four columns.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
