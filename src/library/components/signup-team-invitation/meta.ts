import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-team-invitation',
  name: 'Team invitation acceptance',
  category: 'signup',
  tags: ['corporate', 'light'],
  description:
    'An invited-member sign-up with team details and a compact account form. Use it as the first screen for a new colleague.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A single 576px invitation panel. A 48px team initial tile sits beside the invitation context; three labeled fields, a terms checkbox and submit button follow.',
    style:
      'Slate-50 page, white 16px-radius panel, slate-200 borders and blue-700 action. Default sans, 24px form title, 14px labels and 12px invitation details.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'One-column form at all sizes. The panel has 24px padding below 640px and 32px above; header text wraps beside a non-shrinking mark.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
