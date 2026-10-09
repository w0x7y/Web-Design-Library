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
      'A 1024px inventory stock table with context header, three summary metrics, four-column native table and record-count footer. The header wraps with 20px gaps; its description is 14px with 24px line height. The summary has 28px top/bottom margins. Rows have 14px text, 16px desktop cell padding, and a footer with 12px count/date text 20px below.',
    style:
      'Slate-50 background, slate-950 type, slate-200 rules and slate-600 metadata. The title is 30px semibold with tight tracking. Summary metrics have 30px semibold tabular figures, 12px labels/hints at 70% opacity, 8px internal gaps and 20px between metrics. Available units also use tabular figures. In stock is emerald-100 with emerald-900 text; Reorder is orange-100 with orange-900 text. Status pills have 8px horizontal and 4px vertical padding. Desktop table cells have 16px horizontal padding; mobile record cards have 12px padding, 8px radii and 12px gaps. The footer identifies the 3 displayed records as a subset of 24 items.',
    states:
      'Native controls retain their browser behavior. The header link shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Metrics stack below 640px and form three columns from 640px. Below 768px table rows become stacked record cards. Every cell gains a visible column label; explicit table roles and visually hidden column headings preserve table semantics on mobile; repeated visual labels are aria-hidden. At 768px restore table display and four columns. Outer padding is 40px vertically and 24px horizontally, rising to 48px horizontally at 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
