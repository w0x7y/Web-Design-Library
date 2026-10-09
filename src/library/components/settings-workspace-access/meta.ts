import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-workspace-access',
  name: 'Workspace access preferences',
  category: 'settings',
  tags: ['dark', 'corporate'],
  description:
    'A workspace security form with native controls for invitations and external sharing. Use it for team administration screens.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 768px administration form with two ruled settings rows: invitations with two checkboxes, and external sharing with a native select. Labels occupy the narrow desktop column.',
    style:
      'Slate-950 background, slate-100 headings, slate-400 descriptions, slate-700 rules and a cyan-200 save button. Sans 30px title and 14px control copy.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Rows stack below 768px and split 1fr/1.4fr above it. Native select uses a solid slate-900 background and wraps within the viewport.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
