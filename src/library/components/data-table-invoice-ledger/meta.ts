import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-invoice-ledger',
  name: 'Invoice ledger',
  category: 'data-table',
  tags: ['minimal', 'light'],
  description:
    'An invoice table with payment status and an outstanding balance. Use it in a billing or freelance administration workspace.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A 1024px invoice ledger with context header, summary, four-column native table and record-count footer. All three records are visible. The wrapping header has 20px gaps, a 30px semibold title with tight tracking and a 14px description at 24px line height. The summary has 28px top/bottom margins. Rows have 14px text and 16px desktop padding; the 12px count/date footer follows after 20px.',
    style:
      'White background, zinc-950 type, zinc-200 rules and zinc-600 metadata. Outstanding balance uses 30px semibold tabular figures with 12px labels/hints at 70% opacity. Invoice amounts use tabular figures. Paid pills use emerald-100/emerald-900; due pills use amber-100/amber-900; Draft uses stone-100/stone-700 with 12px medium text. Pills have 4px vertical and 8px horizontal padding, 12px horizontally for Draft. Desktop table cells have 16px horizontal padding; mobile record cards have 12px padding, 8px radii and 12px gaps.',
    states:
      'Native controls retain their browser behavior. The header link shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Below 768px table rows become stacked record cards. Every cell gains a visible column label; explicit table roles and visually hidden column headings preserve table semantics on mobile; repeated visual labels are aria-hidden. At 768px restore table display and four columns. Outer padding is 40px vertically and 24px horizontally, rising to 48px horizontally at 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
