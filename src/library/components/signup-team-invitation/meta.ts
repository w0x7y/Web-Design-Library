import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-team-invitation',
  name: 'Team invitation acceptance',
  category: 'signup',
  tags: ['corporate', 'light'],
  description:
    'An invited-member sign-up with team details and a compact account form. Use it as the first screen for a new colleague.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A centered 576px invitation panel in a section with 48px vertical padding. A 48px decorative team initial beside a 24px heading and inviter details precedes a bottom rule by 20px. Form follows by 24px with three fields, required terms checkbox and full-width submit, 20px apart. Labels and associated password hint have 8px gaps.',
    style:
      'Slate-50 page, white 16px-radius panel with slate-200 1px border and header rule. Slate-950 sans text, slate-500 inviter details and slate-600 12px password hint. Blue-700 team mark has 12px radius; submit has 8px radius and white 14px semibold text. Inputs have 8px radii, 1px current-color borders at 60%, 12px horizontal and 10px vertical padding. Heading is 24px/32px semibold with -0.025em tracking. No shadows.',
    states:
      'Name, email, new password and terms acceptance are required. Password requires at least 12 characters, explained by an associated hint. Terms checkbox has explicit label and account-ownership description. Inputs and checkbox have 2px current-color keyboard outlines offset 2px; submit uses stone-950. No authored hover states or motion.',
    responsive:
      'One-column form at every width. Section horizontal padding is 24px below 640px and 48px above; panel padding changes from 24px to 32px. Header text wraps beside the non-shrinking 48px mark; controls fit at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
