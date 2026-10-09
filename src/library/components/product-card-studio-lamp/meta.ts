import type { ComponentMeta } from '../../types'

export default {
  slug: 'product-card-studio-lamp',
  name: 'Studio lamp product card',
  category: 'product-card',
  tags: ['minimal', 'light'],
  description:
    'A design-store product card with an illustrated desk lamp, color description and delivery note. Use it for furniture, lighting and home office catalogs.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px product article, 320px from 640px, with 16px corners. A 160px orange artwork panel contains an accessible lamp SVG and new-color badge. The 16px body contains an 18px product name beside the price, description, stock message and a 36px full-width link.',
    style:
      'White body with neutral-200 border, orange-100 artwork background and illustrated orange/red lamp. Neutral-950 primary text and neutral-600 metadata. Availability includes text as well as a green dot.',
    states:
      'The outline product link fills neutral-950 with white text on hover. Keyboard focus has a 2px neutral-950 outline offset 2px. The product illustration remains static.',
    responsive:
      'Width changes from 288px to 320px at 640px. The artwork height stays 160px; all information remains single-column with price aligned beside the title.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
