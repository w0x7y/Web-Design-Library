import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-vineyard-parcels',
  name: 'Tabs — Vineyard parcels',
  category: 'tabs',
  tags: ['editorial', 'light', 'has-image'],
  description:
    'A photographed Planche Nine vineyard parcel selector with soil and exposure notes. Use it in estate records and viticulture tools.',
  preview: { kind: 'element' },
  fonts: ['Instrument Serif'],
  brief: {
    layout:
      'A 16px-padded, 1px-bordered parcel card. A small split masthead sits above a 96px-high vineyard photograph. Two equally wide parcel tabs have a 16px gap and 12px vertical margins. The selected panel pairs a 28px title with area, then a two-column definition list behind a top rule.',
    style:
      'Instrument Serif, stone-50 paper, stone-900 text and stone-300 rules. Tabs have stone-500 bottom borders; selection uses rose-900 ink and border. Supporting labels are stone-600. Title has 32px line height; details use 14px type. Square corners and no shadows.',
    states:
      'Native radio tabs switch parcel sections using CSS :has(). Selection changes the bottom border and text to rose-900; hover uses rose-900 text. Focus outlines the label in rose-900, 2px with 2px offset. Forced colors retain input outlines and underline selection. No animation.',
    responsive:
      '288px wide below 640px; 352px from 640px. The arrangement and type sizes stay the same; the wider frame adds room for the content.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
