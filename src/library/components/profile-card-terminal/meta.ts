import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-terminal',
  name: 'Developer terminal profile',
  category: 'profile-card',
  tags: ['dark', 'minimal'],
  description:
    'A developer identity card with terminal styling, engineering interests and open-source counts. Use it in contributor directories or developer portfolios.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px developer card, 320px at 640px, with 16px padding. A 32px command-symbol tile leads into a 20px name, biography, interest line, two statistics and a full-width bordered project link.',
    style:
      'System monospace throughout, zinc-950 background, zinc-700 outer border, 12px corners. Primary text is zinc-100, secondary text zinc-300 or zinc-400, and lime-300 accents mark availability and links.',
    states:
      'The project link border becomes lime-300 on hover. Keyboard focus draws a 2px lime-300 outline with 2px offset. Availability is expressed in text and there is no animation.',
    responsive:
      'Fixed 288px width becomes 320px at 640px. Text wraps and the two statistics stay in one row without changing the vertical hierarchy.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
