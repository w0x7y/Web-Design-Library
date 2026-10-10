import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-hearing-care',
  name: 'Audiology patient access',
  category: 'login',
  tags: ['minimal', 'light'],
  description:
    'An open, quiet patient login for Auralis hearing care, with appointment context and a direct care-team phone number. Use it for an audiology practice portal.',
  preview: { kind: 'section' },
  fonts: ['Manrope:wght@400..700'],
  brief: {
    layout:
      'A 1152px container with 24px side and 40px vertical padding. A wrapping brand masthead has a bottom rule and 24px bottom padding. Below, introduction and patient email/password form are a 40px-gap grid; the form has 20px gaps, 8px label gaps and 48px controls. A support note sits on a 2px left rule.',
    style:
      'Manrope on white with sky-950 ink, sky-800 supporting copy and sky-200 masthead rule. Heading is 40px, medium, 1.15 leading and -0.025em tracking; brand is 24px semibold. Inputs have 1px sky-700 boundaries and 8px radii. Submit is sky-900 with white 14px semibold text. No shadows.',
    states:
      'Submit changes to sky-800 on hover. Inputs and recovery link show 2px current-color outlines offset 4px on keyboard focus; submit uses sky-700 for contrast on white, including forced-colors mode. Email hint is associated with aria-describedby. Native required email/password fields use username/current-password autocomplete; no animation.',
    responsive:
      'Below 640px the heading is 40px and the section has 24px side padding. From 640px the heading is 48px and section padding is 64px vertically and 40px horizontally. From 1024px introduction/form become 1.3:1 columns with 96px gap and 64px top spacing; form adds 8px top padding.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
