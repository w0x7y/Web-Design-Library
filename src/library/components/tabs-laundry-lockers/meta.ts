import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-laundry-lockers',
  name: 'Tabs — Laundry locker collection',
  category: 'tabs',
  tags: ['minimal', 'light'],
  description:
    'A Rinsepost laundry status selector with two-line service tabs and an oversized locker identifier. Use it for unattended collection kiosks and customer order summaries.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A square, 20px-padded card with 1px border. A split brand and location header precedes two 56px, two-line status selectors by 16px, separated by 12px. The selected panel has a 10px uppercase label, 56px lightweight locker identifier beside a 40×56px locker drawing, order reference, and a ruled collection note.',
    style:
      'Default sans stack on white with slate-900 text, slate-600 supporting copy, slate-300 frame and slate-200 note divider. Controls have 2px slate-500 bottom borders, selected slate-900 border and slate-50 fill. Identifier has 1.0 line height, light weight and -0.025em tracking. Labels are 12px semibold with 10px bag counts. No radii or shadows.',
    states:
      'Native radios reveal ready and in-wash orders with CSS. Unselected hover uses sky-50; selected tabs retain slate-50. Labels show 2px slate-900 focus outlines offset 2px. High contrast keeps radio outlines and selection underlines. The locker drawing is decorative beside the identifier. No motion.',
    responsive:
      '288px wide below 640px; 336px from 640px. The arrangement and type sizes stay the same; the wider frame adds room for the content.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
