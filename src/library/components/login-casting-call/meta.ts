import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-casting-call',
  name: 'Audition check-in poster',
  category: 'login',
  tags: ['brutalist', 'light'],
  description:
    'A hard-ruled Slatecast performer login with oversized casting typography and a compact horizontal credential form. Use it for audition and self-tape platforms.',
  preview: { kind: 'section' },
  fonts: ['Archivo:wght@400..900'],
  brief: {
    layout:
      'A 1152px, 2px-bordered poster inside a section padded 24px horizontally and 32px vertically. Masthead has 20px padding and a 2px bottom rule. Main poster and access regions have 20px padding. Oversized heading sits above a 72px take number. Sign-in form has 20px gaps and 48px controls.',
    style:
      'Archivo on red-50, red-950 text and rules. Headline is 48px black weight, line-height 1 and -0.06em tracking. Masthead is 14px bold, check-in title 20px bold. All fields and buttons are square; fields have 1px red-950 borders, submit has red-950 fill and red-50 text. No shadows.',
    states:
      'Submit becomes red-800 on hover. Email, password and recovery link show 2px current-color keyboard outlines offset 4px; submit uses red-950 for contrast on red-50. Required fields retain native email/password behavior and autocomplete. Email is described by the performer-account hint. No animation.',
    responsive:
      'From 640px, section padding becomes 48px vertical/40px horizontal, poster/access padding 32px and headline 72px; form changes to two columns. From 1024px, heading and take number share a row, and access introduction/form use 1:2 columns. At 320px all regions stack and controls stay within their columns.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
