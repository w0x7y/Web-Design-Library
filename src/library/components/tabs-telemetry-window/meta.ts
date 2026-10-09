import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-telemetry-window',
  name: 'Tabs — Telemetry window',
  category: 'tabs',
  tags: ['dark', 'corporate'],
  description:
    'A functional time-window radio selector with response-time summaries for three monitoring intervals.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide slate-950 card with 20px padding. Three compact 32px time radios sit above a 36px response-time metric, a seven-bar chart and a small health footer.',
    style:
      'Use slate-700 borders, 12px corners, slate-400 labels and cyan-300 active values. Bars use cyan-400 at varying heights. Metric numerals use 36px monospace with a small ms unit.',
    states:
      'Native radios switch the visible 1-hour, 24-hour and 7-day summary panels through group-has. Checked labels use slate-700 fill, focus outlines use lime-300, and there is no animated chart motion.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
