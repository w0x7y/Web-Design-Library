import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-research-lab',
  name: 'Research lab team',
  category: 'team',
  tags: ['corporate', 'light'],
  description:
    'A research team section with a featured principal investigator and compact colleague directory. Use it for labs, policy groups and specialist organizations.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1024px centered research section with 24px horizontal and 64px vertical padding. Header text is limited to 672px. A 40px top gap leads to a two-column grid from 768px with a featured investigator card and a three-person roster. Feature padding is 24px, 32px at 640px; roster avatars are 44px.',
    style:
      'Slate-50 section, white bordered roster, 16px corners and teal-950 lead card. System sans uses slate-900 primary text and slate-600 descriptions; lead-card text is white and teal-100. Initials tiles replace portrait photos.',
    states:
      'Profile links are underlined and change text color on hover. The lead link has a 2px white focus outline; roster links use teal-800, all offset by 2px. There are no animations.',
    responsive:
      'Both cards stack at widths below 768px. At 768px they have equal columns; roster text wraps beside fixed avatars. Feature badge may wrap within its available width. No content is clipped.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
