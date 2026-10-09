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
      'A 288px meter card, 320px at 640px, framed by a 2px lime border. A report header with 16px side padding and 12px vertical padding leads into a 20px body containing a 48px consumption number, 16px budget bar, budget labels and remaining allowance beneath a rule.',
    style:
      'Zinc-950 surface and lime-300 primary figures and borders. Square corners, bold default-sans figure and monospace labels. Header labels are 10px with 0.05em uppercase tracking; the consumption label is 10px zinc-300 with 0.1em uppercase tracking. The 48px figure has line height 1, weight 900, -0.025em tracking and tabular numbers; its 16px medium unit has 24px line height and an 8px baseline gap. The 16px bar has a 1px lime-300 outline, 2px inset padding and a 74%-wide lime fill. Budget labels are 10px monospace with a 12px gap. The remaining-allowance note is 14px zinc-100 with 20px line height, a 20px top margin and 16px padding above a zinc-700 top rule.',
    states:
      'The card has no controls or animation. Text explicitly states 184 kWh consumed, 74% of budget and 66 kWh remaining, so chart meaning does not depend on color.',
    responsive:
      'Fixed width is 288px below 640px and 320px above. The large number and unit share a baseline and the budget bar scales to the padded body width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
