import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-rubber-compound',
  name: 'Tyre compound technical article',
  category: 'blog-card',
  tags: ['brutalist', 'dark'],
  description:
    'A motorsport tyre article with a red cross-section drawing and a divided specification footer. Use it in manufacturing journals and track engineering publications.',
  preview: { kind: 'element' },
  fonts: ['Space Grotesk:wght@400..700'],
  brief: {
    layout:
      '288px bordered card with a 16px by 12px header, 96px technical cover, 16px article body and two equal footer cells. Cover contains a centered 240px by 96px SVG and a label 12px from the right and 8px from the bottom. Body has title then summary 12px below. Footer cells use 12px padding and 4px between their two lines.',
    style:
      'Space Grotesk, neutral-950 surface, neutral-100 title, neutral-400 secondary copy and neutral-600 1px rules. Cover is neutral-900 with a red-400 outline drawing and red-300 caption. Title is 22px medium with 24px leading and -0.03em tracking. 12px summary at 20px leading; 10px footer values and 9px uppercase labels. No radius or shadow.',
    states:
      'Headline becomes red-300 on hover and shows a 2px red-300 focus outline offset 2px. Tyre drawing is decorative, labelled by surrounding article text. No motion.',
    responsive:
      'Width grows from 288px to 320px at 640px. Technical illustration remains 240px wide; footer keeps two equal columns and other dimensions are unchanged.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
