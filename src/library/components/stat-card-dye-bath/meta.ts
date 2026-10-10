import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-dye-bath',
  name: 'Textile dye bath ratio',
  category: 'stat-card',
  tags: ['brutalist', 'light'],
  description:
    'A sharply gridded dyehouse card for Bathform showing the water-to-fabric recipe ratio and a two-tone production swatch. Use it in textile batch and process records.',
  preview: { kind: 'element' },
  fonts: ['Space Grotesk:wght@400..700'],
  brief: {
    layout:
      'A 288px article, 352px from 640px, with a 2px blue-800 outer border. A 12px-padded header precedes a two-column grid: a 20px-padded ratio block and a 64px swatch column. A 16px-padded lower recipe region contains a two-column dl and a ruled note.',
    style:
      'Space Grotesk, white base, blue-800 text and rules, blue-100 swatch paired with blue-800. Main ratio is 64px bold, tight tracking, 1 line height. Metadata is 10px uppercase with 0.1em tracking; the metric heading is 12px. All corners are square, with no shadow.',
    states:
      'A static batch card without controls, hover or motion. Swatches are decorative; the text names the ink-blue cotton batch and lists water and fabric quantities so the ratio remains meaningful without color.',
    responsive:
      'Width steps from 288px to 352px at 640px. The swatch column stays 64px wide while the ratio region grows. Type, rules and padding stay fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
