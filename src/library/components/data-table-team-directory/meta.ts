import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-team-directory',
  name: 'Workspace members table',
  category: 'data-table',
  tags: ['corporate', 'light'],
  description:
    'A member directory with clear role and access columns. Use it for workspace administration and invitations.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A 1024px workspace members table with context header, summary, four-column native table and record-count footer. All three records are visible. The wrapping header has 20px gaps, a 30px semibold title with tight tracking and a 14px description at 24px line height. The summary has 28px top/bottom margins. Rows have 14px text and 16px desktop padding; the 12px count/date footer follows after 20px.',
    style:
      'White background, teal-950 type, teal-100 rules and teal-700 metadata. Capacity is a wrapping row with 12px gaps: a teal-50/teal-800 member-count pill with 12px horizontal and 4px vertical padding, then 12px available-seat text. Joining dates use semantic time elements with full ISO dates. Desktop table cells have 16px horizontal padding; mobile record cards have 12px padding, 8px radii and 12px gaps.',
    states:
      'Native controls retain their browser behavior. The header link shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Below 768px table rows become stacked record cards. Every cell gains a visible column label; explicit table roles and visually hidden column headings preserve table semantics on mobile; repeated visual labels are aria-hidden. At 768px restore table display and four columns. Outer padding is 40px vertically and 24px horizontally, rising to 48px horizontally at 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
