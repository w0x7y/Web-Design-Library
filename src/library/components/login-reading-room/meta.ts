import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-reading-room',
  name: 'Reading room sign-in',
  category: 'login',
  tags: ['editorial', 'light'],
  description:
    'A warm editorial login for an independent publication. Use it when the membership experience should feel like the publication itself.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A centered 768px ruled page with 32px vertical padding, inside a section padded 48px vertically. A wrapping masthead with a 24px bottom inset precedes a two-column welcome and credential form by 32px. Columns are 32px apart. Form rows have 20px gaps; labels have 8px gaps.',
    style:
      'Warm #f3efe6 paper, #342d25 ink and #6c6257 body text. System serif 30px publication name and 36px welcome heading with 1.25 line height. Sans 14px field labels and 12px recovery link. Square inputs have 1px current-color borders at 60%, 12px horizontal and 10px vertical padding. Square ink submit with paper text; no shadows.',
    states:
      'Required email and current-password fields use native validation. Inputs and recovery link have a 2px current-color keyboard outline offset 2px; submit uses stone-950. No authored hover states, transitions or motion.',
    responsive:
      'Below 768px the welcome and form stack; from 768px there are two equal columns. Outer horizontal padding is 24px below 640px and 48px from 640px. Masthead wraps with 12px gaps and remains readable at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
