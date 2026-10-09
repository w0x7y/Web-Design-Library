import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-reading-room',
  name: 'Reading room sign-in',
  category: 'login',
  tags: ['editorial', 'light'],
  description:
    'A warm editorial login for an independent publication. Use it when the membership experience should feel like the publication itself.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 768px-wide ruled page with publication masthead, then editorial welcome copy beside a two-field login form. The masthead wraps when narrow.',
    style:
      'Warm #f3efe6 paper, #342d25 ink and #6c6257 body text. System serif 36px welcome heading, sans labels and square-corner controls. Thin horizontal rules replace card shadows.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Use 24px outer padding on phones and 48px at 640px. Desktop columns become a single readable column below 768px; controls stay within the 320px viewport.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
