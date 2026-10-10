import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-studio-portal',
  name: 'Studio client portal',
  category: 'login',
  tags: ['minimal', 'light'],
  description:
    'A focused email and password login with project context. Use it for a small studio’s client portal.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A centered 448px login panel inside a section with 48px vertical padding. Brand, 30px heading and description precede a form by 28px. Form rows have 20px gaps, field labels 8px gaps. Remember-device checkbox and reset link wrap in a row with 12px gaps. Invitation text follows the form by 24px.',
    style:
      'Stone-100 page, white panel with stone-200 1px border and 16px radius, stone-950 text. Default sans, 30px semibold heading at 36px line height and -0.025em tracking, 14px labels, stone-600 description and stone-500 brand/footer. Inputs have 8px radii, 1px current-color borders at 60%, 12px horizontal and 10px vertical padding. Stone-950 submit uses white 14px semibold text and an 8px radius. No shadows.',
    states:
      'Required email and password fields use native validation. Remember-device checkbox has an explicit label and associated hint. Inputs, checkbox and links show 2px current-color focus outlines offset 2px; submit uses stone-950. No authored hover states or motion.',
    responsive:
      'One column at every width. Below 640px outer and panel horizontal padding is 24px; from 640px outer padding becomes 48px and panel padding 40px. Options wrap as needed at 320px; inputs always fit the panel.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
