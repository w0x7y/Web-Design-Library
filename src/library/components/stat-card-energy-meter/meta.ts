import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-energy-meter',
  name: 'Workshop energy meter',
  category: 'stat-card',
  tags: ['brutalist', 'dark'],
  description:
    'A high-contrast energy-use card with a budget bar, target and readable remaining allowance. Use it in facilities dashboards and sustainability reports.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px meter card, 320px at 640px, framed by a 2px lime border. A 12px-padded report header leads into a 20px body containing a 48px consumption number, 16px budget bar, budget labels and remaining allowance beneath a rule.',
    style:
      'Zinc-950 surface and lime-300 primary figures and borders. Square corners, bold default-sans figure and monospace labels. Supporting copy is zinc-100 or zinc-300; the chart outline keeps its bounds visible.',
    states:
      'The card has no controls or animation. Text explicitly states 184 kWh consumed, 74% of budget and 66 kWh remaining, so chart meaning does not depend on color.',
    responsive:
      'Fixed width is 288px below 640px and 320px above. The large number and unit share a baseline and the budget bar scales to the padded body width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
