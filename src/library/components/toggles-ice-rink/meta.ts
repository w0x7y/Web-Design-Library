import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-ice-rink',
  name: 'Toggles — Ice rink',
  category: 'toggles',
  tags: ['glass', 'dark'],
  description:
    'A late-night ice rink booking widget with a rink diagram, session time and a frosted panel of rental add-ons.',
  preview: { kind: 'element' },
  fonts: ['Familjen Grotesk:wght@400;500;600;700'],
  brief: {
    layout:
      '288px card, 384px from 640px, with 20px padding. A decorative 192px rink diagram sits top-right behind a 24px title. A 42px session time shares a row with duration and rink number. A 16px-padded glass panel has 12px corners and two option rows separated by 16px.',
    style:
      'Familjen Grotesk, white text and sky-200 supporting details. Diagonal sky-950, slate-900, sky-800 gradient; 24px outer corners and 1px sky-700 border. Rink diagram is sky-300 at 20% opacity. Inner glass uses white at 10%, white 30% border and 12px backdrop blur. Switches have sky-200 borders and thumbs, slate-900 off tracks, sky-200 checked tracks.',
    states:
      'Boot warmers start off, Locker hold on. The 44×24px native switches have 16px thumbs traveling 20px. Hover lowers opacity to 80%; focus uses a 2px sky-200 outline offset 2px. Forced colors retain ButtonText borders and CanvasText thumbs. No animation.',
    responsive:
      'Fixed 288px width below 640px; 384px at 640px and above. The content order and control sizes remain the same. The card fits the 384px-tall capture area at both widths.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
