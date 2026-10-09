import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-email-link',
  name: 'Email link login',
  category: 'login',
  tags: ['minimal', 'light'],
  description:
    'A password-free entry form that explains the email-link flow. Use it for a service that authenticates with a link sent by email.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A centered email-only login within a 576px container: 64px envelope mark, headline, short explanation, labeled email input and full-width action.',
    style:
      'Teal-950 background, teal-50 text and teal-200 supporting copy. Teal-100 pill button, 40px sans headline and a thin teal-700 footer rule.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      '24px horizontal padding throughout, rising to 48px above 640px. Form stays one column and grows to 576px maximum width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
