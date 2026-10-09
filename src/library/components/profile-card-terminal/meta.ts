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
      'A 288px card, 320px from 640px, with 16px padding. A 32px command tile and availability text share a row with a 12px gap. Name and biography each have a 12px top margin, interests follow after 8px. Statistics follow after 8px with a 24px gap, 1px top rule and 12px top padding. Full-width project link follows after 12px with 12px horizontal and 8px vertical padding.',
    style:
      'System monospace throughout, zinc-950 background, 1px zinc-700 outer border and 12px corners. Command tile has an 8px radius and zinc-700 border with an 18px lime-300 symbol. Availability is 10px uppercase lime-300 with 0.05em tracking. Name is 20px semibold zinc-100 with 28px line height and -0.025em tracking, biography 12px zinc-300 with 20px line height. Interests are 10px lime-300 with 20px line height. Statistics labels are 12px zinc-400, values 16px zinc-100 after 4px. Project link is 12px lime-300 with 16px line height, 6px corners and a zinc-500 border for a visible boundary on zinc-950.',
    states:
      'Link is named Explore Eli Park’s projects. Its border becomes lime-300 on hover, keyboard focus draws a 2px lime-300 outline with 2px offset, including in forced colours. Availability is expressed in text. No animation.',
    responsive:
      'Fixed 288px width becomes 320px at 640px. Text wraps and the two statistics stay in one row without changing the vertical hierarchy.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
