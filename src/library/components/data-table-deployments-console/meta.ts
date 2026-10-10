import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-deployments-console',
  name: 'Deployment activity table',
  category: 'data-table',
  tags: ['dark', 'corporate'],
  description:
    'A monospace deployment log with environments, commit hashes and outcomes. Use it for an infrastructure console.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A 1024px deployment activity table with context header, summary, four-column native table and record-count footer. All three records are visible. The header wraps with 20px gaps, with a 30px semibold title, 14px description at 24px line height and an underlined build-log link. A region/uptime strip has a bottom rule and 16px gaps, 28px above and below. Desktop cells have 16px padding; column headings and status badges are 12px.',
    style:
      'Use neutral-950 font-mono neutral-100 surfaces and type, border-neutral-700 rules and text-neutral-400 metadata. Desktop table cells have 16px horizontal padding; mobile record cards have 12px padding, 8px radii and 12px gaps. Healthy badges use lime-300 text/borders at 40%; Building uses cyan-300. All outcomes are written in text.',
    states:
      'Native controls retain their browser behavior. The build-log link shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Below 768px table rows become stacked record cards. Every cell gains a visible column label; table roles and visually hidden column headings preserve table semantics on mobile; repeated visual labels are aria-hidden. At 768px restore table display and four columns. Outer padding is 40px vertically and 24px horizontally, rising to 48px horizontally at 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
