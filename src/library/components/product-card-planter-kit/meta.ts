import type { ComponentMeta } from '../../types'

export default {
  slug: 'product-card-planter-kit',
  name: 'Windowsill growing kit',
  category: 'product-card',
  tags: ['playful', 'light'],
  description:
    'A cheerful seed-kit card with illustrated herbs, included contents and a shop link. Use it for gift shops, gardening brands and starter kits.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px kit card, 320px from 640px, with 24px corners. A 128px lime illustration header displays three herb seedlings. The 16px body has a product title and herb-count badge, a short description, one contents line and a 36px pill purchase link.',
    style:
      'Yellow-50 body, lime-200 illustration field and green-900 outline. Green-950 headings and green-900 copy. SVG plant leaves are green and pots are terracotta. Rounded badges and default-sans bold type give the kit a friendly tone.',
    states:
      'The purchase link changes from green-900 to green-800 on hover and has a 2px green-900 focus outline offset 2px. The illustration has a textual accessible description and no motion.',
    responsive:
      'Width is 288px below 640px and 320px above. The title can wrap beside the compact herb badge and all lower content stays stacked.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
