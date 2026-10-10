import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-culture-lab',
  name: 'Fermentation culture team',
  category: 'team',
  tags: ['glass', 'gradient', 'dark'],
  description:
    'A translucent team window and current-batch note for Culturehouse, a food fermentation lab. Use it to introduce scientific roles with a glimpse of day-to-day work.',
  preview: { kind: 'section' },
  fonts: ['Manrope:wght@400..700'],
  brief: {
    layout:
      'A 1280px container with 24px side and 64px vertical padding. Intro and amber batch note sit beside a rounded team window containing three scientist rows, a city label and a visit link. Rows use 48px initials, 16px gaps and 20px vertical padding.',
    style:
      'Emerald-950 through emerald-900 to lime-950 diagonal oklab gradient. White 10% team window with 24px backdrop blur, white 30% 1px border and 24px radius. Amber-200 10% batch note with 40% border and 16px radius. Manrope, white text, lime-100 roles, emerald-100 notes. Heading 36px, 56px from 640px; names 18px.',
    states:
      'The visit link fills lime-200 and changes to emerald-950 on hover, with a 2px currentColor keyboard outline offset 4px. Scientist initials supplement complete text names. No animation.',
    responsive:
      'At 640px side padding and team-window padding become 32px and heading becomes 56px. At 1024px section padding becomes 96px vertically; intro and window form 1:1.1 columns with 64px gap. Below that the window sits below the intro and batch note. Long roles wrap at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
