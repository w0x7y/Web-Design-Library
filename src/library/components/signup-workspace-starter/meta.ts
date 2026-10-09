import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-workspace-starter',
  name: 'Create a business workspace',
  category: 'signup',
  tags: ['corporate', 'light'],
  description:
    'A workspace creation screen with a trial-benefit list, password guidance and terms link. Use it for team software with a simple self-serve trial.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A centered 1024px grid with 40px gaps in a section with 48px vertical padding. Left is a dark trial-benefits panel with trial pill, 36px heading, three ruled benefits and no-card note. Right is a form padded 8px vertically with 30px title, workspace name, email, password, terms, submit and sign-in link. Form rows have 20px gaps and labels have 8px gaps.',
    style:
      'White page with zinc-950 sans text and a zinc-950 16px-radius benefits panel. Zinc-300 benefits, zinc-400 trial note, zinc-700 rules. Headings are 36px/40px and 30px/36px semibold with -0.025em tracking. Inputs have 8px radii, 1px current-color borders at 60%, 12px horizontal and 10px vertical padding. Zinc-950 submit has white 14px semibold text and 8px radius. Password hint and terms link are zinc-600 12px; no shadows.',
    states:
      'Workspace name, email, new password and terms checkbox are required. Password needs at least 12 characters with an associated hint. A separate keyboard-accessible terms link sits under the checkbox label. Inputs, checkbox and links have 2px current-color focus outlines offset 2px; submit uses stone-950. No authored hover states or motion.',
    responsive:
      'Below 768px benefits and form stack; from 768px they use equal columns. Section horizontal padding is 24px below 640px and 48px above; benefits padding changes from 24px to 40px at 640px. Fields shrink and terms text wraps to fit at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
