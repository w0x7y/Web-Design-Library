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
      'White body with neutral-200 border, orange-100 artwork background and illustrated burnt-orange lamp. Neutral-950 primary text and neutral-600 metadata. The lamp SVG uses a 200×150 viewBox displayed at 192×144px. The badge sits 12px from the top and right, with 10px medium text and 10px horizontal, 4px vertical padding. Title and price are 18px with 28px line height, semibold and medium respectively, separated by 12px. Description and availability are 12px with 16px line height. Availability includes text as well as an 8px emerald-600 dot separated by 8px. The link has 8px corners, a 1px neutral-950 border and 12px semibold text.',
    states:
      'The outline product link fills neutral-950 with white text on hover. Keyboard focus has a 2px neutral-950 outline offset 2px. The static product illustration has an accessible label matching its burnt-orange color.',
    responsive:
      'Width changes from 288px to 320px at 640px. The artwork height stays 160px; all information remains single-column with price aligned beside the title.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
