import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-deployments-console',
  name: 'Deployment activity table',
  category: 'data-table',
  tags: ['dark', 'corporate'],
  description:
    'A monospace deployment log with environments, commit hashes and outcomes. Use it for an infrastructure console.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1024px deployment activity table with context header, summary, four-column native table and record-count footer. All three records are fully visible.',
    style:
      'Use neutral-950 font-mono neutral-100 surfaces and type, border-neutral-700 rules and text-neutral-400 metadata. Desktop table cells have 16px horizontal padding; mobile record cards have 12px padding.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Below 768px table rows become stacked record cards. Every cell gains a visible column label; semantic table headings remain available on desktop. At 768px restore table display and four columns.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
