import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-speaker',
  name: 'Conference speaker badge',
  category: 'profile-card',
  tags: ['brutalist', 'light'],
  description:
    'A compact conference badge with a speaker number, talk title and session time. Use it for event lineups and speaker directories.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px badge, 320px from 640px, with a 2px black frame. Header has a 2px bottom rule and 16px horizontal, 8px vertical padding. Body has 16px padding, a two-line name and decorative direction arrow. Role follows after 8px. Talk block has 12px top margin and padding above a 2px top rule, time follows after 8px. A full-width link follows after 12px with 12px horizontal, 8px vertical padding and 2px border.',
    style:
      'Yellow-300 background, black text, square corners and white session link. Default sans name is 24px weight 900 with line height 1 and -0.025em tracking. Direction arrow is 30px monospace with 36px line height. Header is 11px uppercase monospace with 0.05em tracking, role 10px uppercase semibold. Talk is 16px bold with 20px line height, schedule 12px monospace with 16px line height. Link is 12px bold uppercase with 16px line height and 0.05em tracking.',
    states:
      'Link is named View Noor Hassan’s session. On hover it turns black with yellow-300 text, keyboard focus shows a 2px black outline offset by 2px, including in forced colours. No animation.',
    responsive:
      'The card is 288px below 640px and 320px above. Its deliberate two-line name and single-column session block stay the same at every width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
