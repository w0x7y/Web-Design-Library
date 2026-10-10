import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-balloon-ascent',
  name: 'Weather balloon ascent',
  category: 'stat-card',
  tags: ['gradient', 'light'],
  description: 'A warm atmospheric ascent card for Stratoslip showing a weather balloon’s altitude, elapsed flight time and vertical speed. Use it in a radiosonde launch dashboard.',
  preview: { kind: 'element' },
  fonts: ['Familjen Grotesk:wght@400..700'],
  brief: {
    layout: 'A 288px article, 352px from 640px, with 24px padding and a 24px radius. A brand/flight header precedes a two-column flex row: a 48px altitude reading and a 64×160px decorative flight path. A white 75% inset footer displays two columns of flight telemetry with 12px padding.',
    style: 'Familjen Grotesk and sky-950 text on a vertical orange-100 to cyan-100 gradient interpolated in oklab. A 1px sky-200 border, sky-800 secondary text and white 75% footer with 12px radius. Flight path has a white balloon, sky-950 outline and dashed sky-800 trail. No shadow.',
    states: 'This is a static telemetry card with no controls, hover states or animation. SVG flight path is decorative; altitude, elapsed time and ascent speed are readable text.',
    responsive: 'Width changes from 288px to 352px at 640px. The flight diagram stays 64×160px and all padding and typography remain fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
