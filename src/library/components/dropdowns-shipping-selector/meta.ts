import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-shipping-selector',
  name: 'Dropdowns — Shipping selector',
  category: 'dropdowns',
  tags: ['editorial', 'light'],
  description:
    'A native delivery-options disclosure with labelled shipping radios, written arrival estimates and prices.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide stone-50 disclosure with 20px padding. A serif summary opens to three bordered radio rows, each about 58px tall, plus a 10px delivery note.',
    style:
      'Use stone-300 borders, 12px corners, 20px system serif heading and emerald-800 selected outlines. Price text is 12px semibold; delivery hints are 10px stone-600.',
    states:
      'The native summary opens and closes with keyboard or pointer. Native shipping radios respond to Arrow keys and show emerald-50 selected backgrounds. All controls have 2px slate-900 focus outlines with 2px offset.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
