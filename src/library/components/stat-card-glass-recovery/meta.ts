import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-glass-recovery',
  name: 'Recovered glass weigh ticket',
  category: 'stat-card',
  tags: ['brutalist', 'light'],
  description:
    'A weighbridge-style recycling card for Culletline showing accepted glass mass and contaminants removed. Use it in materials recovery and sorting reports.',
  preview: { kind: 'element' },
  fonts: ['Archivo:wght@400..700'],
  brief: {
    layout:
      'A 288px article, 320px from 640px. A 16px-padded header sits above a 3px rule. The 20px-padded main region contains a 72px tonnage figure, a 14px metric heading and two aligned detail rows. A 16px-padded black footer records the load number.',
    style:
      'Archivo, orange-300 background and neutral-950 ink. Square 3px neutral-950 border, heavy dividing rules, no radius or shadow. The numeric figure is bold with tight tracking, units are 20px. Header/footer use 10px uppercase text with 0.1em tracking. Footer text is orange-300.',
    states:
      'This is a static weigh ticket with no controls, hover states or animation. The accepted weight and rejected mass are given as readable text.',
    responsive:
      'Width changes from 288px to 320px at 640px. All padding, type and ruled regions retain their sizes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
