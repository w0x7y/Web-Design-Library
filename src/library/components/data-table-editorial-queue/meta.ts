import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-editorial-queue',
  name: 'Editorial submissions queue',
  category: 'data-table',
  tags: ['editorial', 'light'],
  description:
    'A publication’s submissions queue framed with editorial rules and serif type. Use it for a magazine or content studio.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1024px editorial submissions queue with context header, summary, four-column native table and record-count footer. The header wraps with 20px gaps; its description is 14px with 24px line height. The summary has 28px top/bottom margins. Rows have 14px text, 16px desktop cell padding, and a footer with 12px count/date text 20px below.',
    style:
      'Cream #f6f2e9 background, #3b3329 ink, ink rules at 20% opacity and #786c5c metadata. The 36px normal-weight heading uses the system serif stack with 40px line height. An edition/count strip has top/bottom rules, 12px vertical padding and 12px system monospace labels. Desktop table cells have 16px horizontal padding; mobile record cards have 12px padding, 8px radii and 12px gaps. Stage names are plain text.',
    states:
      'Native controls retain their browser behavior. The header link shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Below 768px table rows become stacked record cards. Every cell gains a visible column label; explicit table roles and visually hidden column headings preserve table semantics on mobile; repeated visual labels are aria-hidden. At 768px restore table display and four columns. Outer padding is 40px vertically and 24px horizontally, rising to 48px horizontally at 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
