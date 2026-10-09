import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-team-directory',
  name: 'Workspace members table',
  category: 'data-table',
  tags: ['corporate', 'light'],
  description:
    'A member directory with clear role and access columns. Use it for workspace administration and invitations.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1024px workspace members table with context header, summary, four-column native table and record-count footer. All three records are fully visible.',
    style:
      'Use white teal-950 surfaces and type, border-teal-100 rules and text-teal-700 metadata. Desktop table cells have 16px horizontal padding; mobile record cards have 12px padding.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Below 768px table rows become stacked record cards. Every cell gains a visible column label; semantic table headings remain available on desktop. At 768px restore table display and four columns.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
