import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-community-duo',
  name: 'Community plan pricing',
  category: 'pricing',
  tags: ['playful', 'light'],
  description:
    'Two friendly membership plans for a maker community with clear benefits and an accessible supporter offer. Use it for clubs and community spaces.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1024px centered heading leads to two 24px-padded plan cards. The free plan is pale lavender and the supporter plan is deep violet with a lime price badge. Each card has four benefits and a full-width action.',
    style:
      'Violet-50 background, violet-950 text, violet-100 free card, violet-950 supporter card and lime-200 accents. Cards have 24px radii, 30px titles and 48px prices.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Cards stack below 768px. Title is 36px on phones and 48px at 640px. Buttons have at least 48px height and wrap content safely. Price line wraps on very narrow screens.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
