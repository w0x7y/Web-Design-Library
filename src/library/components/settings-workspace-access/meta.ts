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
      'A 768px administration form with two ruled settings rows: invitations with two checkboxes, and external sharing with a native select. The 30px title follows a 12px cyan eyebrow by 12px, with supporting text 8px below. Each settings row has 28px gaps and 28px top spacing. Subheadings are 18px semibold h3 elements. Invitations use two 16px checkboxes with 12px label gaps and described hints at 12px/20px. Labels occupy the narrow desktop column. The save footer follows a rule after 32px.',
    style:
      'Slate-950 background, slate-100 headings, slate-400 descriptions, slate-700 rules and a cyan-200 save button. Sans 30px title and 14px control copy. The select has an 8px radius, 12px padding and slate-500 border for contrast; the save button has an 8px radius with 20px horizontal and 12px vertical padding.',
    states:
      'Native controls retain their browser behavior. Inputs and the select show a 2px current-color focus outline offset by 2px. The save button uses cyan-300 and a pointer cursor. There is no automatic motion.',
    responsive:
      'Rows stack below 768px and split 1fr/1.4fr above it. Outer padding is 40px vertically and 24px horizontally, rising to 48px horizontally at 640px. The select is full-width with min-width 0 and solid slate-900 background.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
