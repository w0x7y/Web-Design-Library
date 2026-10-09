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
      'Yellow-50 body, lime-200 illustration field and green-900 outline. Green-950 headings and green-900 copy. SVG plant leaves are #15803d with #166534 stems; pots are #c46a45 with #a84f30 rims. The 240×100 viewBox is displayed at 240×96px above 12px bottom padding. The 10px bold uppercase panel label has 0.1em tracking and sits 12px from the top and 16px from the left. The title is 16px bold with 24px line height, separated by 8px from a non-shrinking green-900 pill with white 10px medium text and 8px horizontal, 4px vertical padding. Description is 12px with 20px line height; contents are 10px. The 36px purchase pill uses 16px side padding, white 14px semibold text and a 14px inline arrow.',
    states:
      'The purchase link is named "Start growing $24: The little herb club" for assistive technology, changes from green-900 to green-800 on hover and has a 2px green-900 focus outline offset 2px. The illustration has a textual accessible description and no motion.',
    responsive:
      'Width is 288px below 640px and 320px above. The title can wrap beside the compact herb badge and all lower content stays stacked.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
