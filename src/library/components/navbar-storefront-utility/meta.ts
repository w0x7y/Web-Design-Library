import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-storefront-utility',
  name: 'Storefront utility navigation',
  category: 'navbar',
  tags: ['corporate', 'light'],
  description:
    'A two-level shop header with a shipping announcement and clearly grouped product links. Use it for a small homeware or lifestyle store.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A full-width emerald-950 announcement strip sits above a 1152px navigation container. Main row has a serif shop wordmark, customer links and basket; a bordered category row follows with five links.',
    style:
      'Stone-50 and emerald-950 palette with a 30px serif wordmark, 14px category links and fine stone-200 borders. Basket is an outlined pill. No shadows.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Customer links wrap below 640px and category links wrap at all widths. Main row stacks below 640px with left-aligned actions; padding is 20px on phones and 24px on desktop.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
