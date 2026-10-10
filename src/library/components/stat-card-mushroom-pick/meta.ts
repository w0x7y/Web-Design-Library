import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-mushroom-pick',
  name: 'Mushroom harvest slip',
  category: 'stat-card',
  tags: ['editorial', 'light', 'has-image'],
  description:
    'An asymmetric harvest slip for Gillside mushroom farm with a narrow photograph, fresh-pick weight and batch details. Use it in agricultural harvest and packing summaries.',
  preview: { kind: 'element' },
  fonts: ['Fraunces:wght@400..700'],
  brief: {
    layout:
      'A 288px article, 352px from 640px, laid out as a 72px photographic sidebar and a flexible 20px-padded harvest slip. The sidebar image covers the full card height. The slip holds a brand label, 24px serif heading, 56px weight, dashed divider and three batch facts, then a dated footnote.',
    style:
      'Fraunces throughout, orange-50 background, orange-950 text and orange-800 supporting text. A 1px orange-200 border; square corners and no shadow. Labels use 10px uppercase tracking, body facts 11px. Units are 16px. Photo shows chestnut mushrooms with a close vertical crop.',
    states:
      'Static harvest record without controls, hover states or animation. The photo has descriptive alt text and intrinsic dimensions 800×1098; all quantity and batch data are text.',
    responsive:
      'Width increases from 288px to 352px at 640px. The photographic sidebar stays 72px wide and the text column receives the added space. All type and padding stay fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
