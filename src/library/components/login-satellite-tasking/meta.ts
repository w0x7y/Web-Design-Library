import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-satellite-tasking',
  name: 'Satellite tasking authentication',
  category: 'login',
  tags: ['brutalist', 'dark'],
  description:
    'An Orbitalist mission-access plate with an orbital diagram, email and six-digit authenticator code. Use it for satellite acquisition scheduling and ground operations.',
  preview: { kind: 'section' },
  fonts: ['DM Mono:wght@400;500'],
  brief: {
    layout:
      'A 1152px instrument plate with 2px outer rules inside a section padded 40px vertically/24px horizontally. Wrapping 20px masthead sits above a 20px-padded introduction and 176px orbital drawing. A ruled access region has 20px padding, 20px top form margin, 20px gaps and 48px controls. The authenticator hint is below a top rule.',
    style:
      'DM Mono throughout; neutral-950 background/fields, amber-100 text, amber-400 boundaries and amber-300 diagram/submit. Headline is 36px medium, 1.15 leading and -0.025em tracking. Uppercase metadata is 12px medium with 0.05em or 0.1em tracking. Square inputs have 1px amber-400 borders; submit has neutral-950 ink. All corners are square; no shadows.',
    states:
      'Submit becomes amber-200 on hover and has a 2px amber-400 keyboard outline offset 4px. Email, code and recovery link have 2px current-color focus outlines, retained in forced colors. Code uses numeric input mode, one-time-code autocomplete, six-character maximum and a six-digit pattern. Associated hint explains the code source/expiry. No animation.',
    responsive:
      'From 640px section padding becomes 56px vertical/40px horizontal, instrument/access padding 32px and heading 48px. From 1024px introduction/orbit use 1.3:1 columns; email/code/submit become three columns aligned at the bottom, recovery remains below. At 320px everything stacks within the plate.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
