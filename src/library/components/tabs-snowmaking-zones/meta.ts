import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-snowmaking-zones',
  name: 'Tabs — Snowmaking zone glass',
  category: 'tabs',
  tags: ['glass', 'gradient', 'dark'],
  description:
    'A Pisteform snowmaking-zone selector with a frosted circuit diagram and pump readings. Use it in alpine resort operations panels.',
  preview: { kind: 'element' },
  fonts: ['Space Grotesk:wght@400..700'],
  brief: {
    layout:
      'A 16px-padded card with 16px corners and 1px border. Brand and system label form a split header. Two 40px zone controls follow 16px below with an 8px gap. Each selected circuit panel begins 12px below, has 16px padding and 12px corners, and holds a title, 56px-tall pipe diagram, a two-column reading list and ruled pressure note.',
    style:
      'Space Grotesk and white text over an emerald-950 to teal-950 to teal-800 diagonal gradient in oklab. Decorative teal-400 contour strokes at 40% opacity sit behind a white-10% glass panel with 8px backdrop blur and white-30% border. Controls have teal-500 borders and 8px corners; selection uses teal-200 borders and white-20% fill. Teal-100 labels and 20px medium readings. No shadows.',
    states:
      'Native zone radios reveal the corresponding circuit readings with CSS. Hover uses white-10% fill; selected labels keep white-20% fill. Label focus is a 2px teal-100 outline offset 2px. Forced colors retain radio outlines and selection underline. Readings are text; the pipe diagram is decorative. No animation.',
    responsive:
      '288px wide below 640px; 352px from 640px. The arrangement and type sizes stay the same; the wider frame adds room for the content.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
