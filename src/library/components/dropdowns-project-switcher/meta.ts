import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-project-switcher',
  name: 'Dropdowns — Project switcher',
  category: 'dropdowns',
  tags: ['minimal', 'light'],
  description:
    'A native disclosure workspace switcher with workspace identities, membership details and a create-workspace action.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide native details disclosure with 16px padding, initially open. The 40px summary pairs a 40px monogram tile with workspace name and membership text, 12px gaps and a 16px chevron aligned right. A navigation region begins 16px later with a divider and 12px top padding. A 9px eyebrow precedes two workspace links by 8px; links have 8px padding, 32px monogram tiles and 12px gaps, with 4px between rows. A full-width 36px create action follows after 12px.',
    style:
      'Default sans font on white with slate-900 text, a 1px slate-200 border and 16px outer radius. The summary tile has 12px radius, indigo-100 fill and 14px bold indigo-800 initials. Name is 14px semibold with 20px line height, membership is 10px slate-500. Workspace links have 8px radii, 12px medium names and 9px slate-500 details; their tiles have 8px radii and 10px bold initials. The personal tile uses amber-100 and amber-800. The current link uses slate-50 plus written Current text and aria-current=true. The create action has a 1px slate-300 border, 8px radius, 12px medium text and a 16px plus icon. No shadows.',
    states:
      'Native summary toggles with pointer, Enter or Space. Its chevron rotates 180 degrees over 150ms with the standard ease; reduced motion removes the transition. Workspace links and the create action fill slate-100 on hover. Each control has a 2px slate-900 focus outline offset 2px, retained in forced colours. role=list preserves navigation-list semantics.',
    responsive:
      'The disclosure stays 288px wide at 320px, 390px, 768px and 1440px. Keep the same stacked layout; there are no breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
