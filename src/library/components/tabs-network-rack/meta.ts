import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-network-rack',
  name: 'Tabs — Colocation rack inventory',
  category: 'tabs',
  tags: ['brutalist', 'dark'],
  description:
    'A Portstead rack inventory with port, fabric and power tabs and numbered patch sockets. Use it in colocation and data-centre asset tools.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Mono:wght@400;600'],
  brief: {
    layout:
      'A square, 2px-bordered rack card with 16px padding. A split masthead precedes three 36px uppercase subsystem tabs by 16px; tab gaps are 4px. The port panel shows a title, a four-column two-row socket grid with 36px cells and 8px gaps, and capacity text. A ruled audit footer follows by 16px.',
    style:
      'IBM Plex Mono on black with lime-100 main text, lime-200 body and lime-300 metadata. Lime-400 outer frame and selected tab fill. Controls have lime-600 borders; socket borders are lime-700. Header and panel title are 14px semibold. Tab text is 10px uppercase with 0.05em tracking. No radii or shadows.',
    states:
      'Native radios select port, fabric or power sections with CSS. Hover is lime-950; selected tabs are black on lime-400. Labels show 2px lime-200 focus outlines offset 2px. Forced colors retain radio focus and underline the selected tab. Sockets are numbered, static inventory cells. No motion.',
    responsive:
      '288px wide below 640px; 384px from 640px. The arrangement and type sizes stay the same; the wider frame adds room for the content.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
