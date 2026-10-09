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
      'A 1024px editorial submissions queue with context header, summary, four-column native table and record-count footer. All three records are fully visible.',
    style:
      'Use [#f6f2e9] [#3b3329] surfaces and type, border-[#3b3329]/20 rules and text-[#786c5c] metadata. Desktop table cells have 16px horizontal padding; mobile record cards have 12px padding.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Below 768px table rows become stacked record cards. Every cell gains a visible column label; semantic table headings remain available on desktop. At 768px restore table display and four columns.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
