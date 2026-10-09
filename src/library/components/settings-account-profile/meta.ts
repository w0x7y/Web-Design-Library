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
      'A centred 672px-wide form with 40px vertical and 24px horizontal padding. A 64px initials portrait sits 20px from the heading, above a rule. Required first/last name fields have 20px gaps, followed by required email and a vertically resizable biography with 96px minimum height and a described 240-character limit. Fields have 12px horizontal padding, 10px vertical padding and 8px radii. The footer aligns a public-profile link and save pill, wrapping with 16px gaps.',
    style:
      'Warm #f4f1eb background and #37312c ink, system serif 30px heading and sans labels. Fine brown rules; field borders use ink at 60% opacity and placeholders at 75% for contrast. Labels are 14px medium, hints 12px #746a61, and the save pill has 20px horizontal and 12px vertical padding.',
    states:
      'Native controls retain their browser behavior. Fields and the profile link show a 2px current-color focus outline offset by 2px; Save uses stone-950. The save button has a pointer cursor. There is no automatic motion.',
    responsive:
      'Name fields stack below 640px and become two columns above it. Outer horizontal padding increases from 24px to 48px at 640px. The form uses no fixed heights; the biography can resize vertically.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
