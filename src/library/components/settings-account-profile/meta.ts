import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-account-profile',
  name: 'Personal account settings',
  category: 'settings',
  tags: ['editorial', 'light'],
  description:
    'An understated account form with profile initials and public identity fields. Use it for a community or a small membership service.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 672px account form with 64px initials portrait, first/last name pair, email, 96px biography textarea and save footer.',
    style:
      'Warm #f4f1eb background and #37312c ink, system serif 30px heading and sans labels. Fine brown rules and rounded input fields; the save action is a dark pill.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Name fields stack below 640px and become two columns above it. The form uses no fixed heights; the biography can resize vertically.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
