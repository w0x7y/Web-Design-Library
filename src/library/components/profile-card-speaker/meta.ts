import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-speaker',
  name: 'Conference speaker badge',
  category: 'profile-card',
  tags: ['brutalist', 'light'],
  description:
    'A compact conference badge with a speaker number, talk title and session time. Use it for event lineups and speaker directories.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px speaker badge with a 2px black frame, widening to 320px at 640px. A compact numbered header sits above a 16px-padded body with a two-line 24px name, role, ruled talk block, session details and full-width link.',
    style:
      'Yellow-300 paper, black text and square corners. Default sans is heavy for the name and talk, while session metadata uses monospace. A white action has a 2px black border.',
    states:
      'The session link turns black with yellow-300 text on hover. It shows a 2px black outline with 2px offset for keyboard focus. The badge has no animation.',
    responsive:
      'The card is 288px below 640px and 320px above. Its deliberate two-line name and single-column session block stay the same at every width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
