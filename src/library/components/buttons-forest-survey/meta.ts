import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-forest-survey',
  name: 'Buttons — Forest survey',
  category: 'buttons',
  tags: ['glass', 'dark', 'has-image'],
  description:
    'A photo-backed frosted action pane for Canopy Ledger forest surveys, with field-map, plot-export and restoration-log controls.',
  preview: { kind: 'element' },
  fonts: ['Hanken Grotesk:wght@400;500;600;700'],
  brief: {
    layout:
      '288px-wide, 352px-tall relative panel with 20px padding and a full-cover forest restoration photograph. A dark scrim covers the image. Header is anchored at top and a 12px-padded action pane at bottom. Pane has a full-width 44px survey button, then two equal 36px controls in a grid after 8px with 8px gap, then a 12px log action 12px below.',
    style:
      'Hanken Grotesk; emerald-950 fallback background, white text, black scrim at 60%. Root has 16px radius. Action pane has 12px radius, white fill at 15%, 1px white border at 40% and 12px backdrop blur. Survey is amber-200 with emerald-950 14px semibold text; tools have black fill at 30%, 1px white border at 60%, 8px radius and 12px text. Heading is 24px medium with 1.25 leading.',
    states:
      'Survey fills amber-100 on hover, tools use black at 50%, log text turns amber-200. Every control shows 2px amber-200 keyboard outlines offset 2px. Scrim keeps text readable over the photo, whose alt describes the plant and hands. No animation.',
    responsive:
      '288px below 640px; 384px from 640px. Height remains 352px and photo keeps cover cropping. Grid stays two columns; header and buttons expand horizontally.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
