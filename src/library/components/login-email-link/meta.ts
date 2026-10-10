import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-email-link',
  name: 'Email link login',
  category: 'login',
  tags: ['minimal', 'dark'],
  description:
    'A password-free entry form that explains the email-link flow. Use it for a service that authenticates with a link sent by email.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A centered 576px container on a section with 64px vertical padding. A 64px circular envelope mark with a 48px SVG sits above a 36px heading, 384px-wide explanation, email form with 16px gaps, expiry note and footer separated by a top rule.',
    style:
      'Teal-950 background with teal-50 sans text, teal-200 explanation and expiry note, teal-700 mark and footer borders. Medium heading uses 40px line height and -0.025em tracking. Input has an 8px radius, 1px current-color border at 60%, 12px horizontal and 10px vertical padding. Teal-100 pill submit uses teal-950 14px semibold text. No shadows.',
    states:
      'Required email field uses native validation and is associated with the 15-minute expiry hint. Form submits by POST. Input and back link have 2px current-color focus outlines offset 2px; submit uses teal-200. No authored hover states or motion.',
    responsive:
      'Single-column layout throughout, with 24px horizontal section padding below 640px and 48px from 640px. Container grows to 576px; vertical padding remains 64px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
