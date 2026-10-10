import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-score-folder',
  name: 'An empty sheet-music folder',
  category: 'empty-state',
  tags: ['editorial', 'light'],
  description:
    'Restmark sheet-music empty state uses an empty musical staff and a small catalog footer. Use it when a musician has not yet imported a score.',
  preview: { kind: 'element' },
  fonts: ['Instrument Serif'],
  brief: {
    layout:
      '24px-padded catalog panel. A brand header sits above a 56px-high full-width musical staff with a whole rest. A 32px two-line heading and 12px description precede a ruled footer with import link.',
    style:
      'Instrument Serif brand and heading, system sans labels and body. Rose-50 background, rose-950 text, rose-800 staff, rose-900 body, rose-200 1px outer and footer rules. Square corners, no shadow.',
    states:
      'The primary action underlines on hover-capable devices. Every action has a 2px current-color outline offset 4px on keyboard focus, including forced-colors mode. Illustrations are decorative and hidden from assistive technology. No animation.',
    responsive:
      'The root is 288px wide below 640px and 384px wide from 640px. All other sizes and spacing stay the same; text wraps to the available width. It fits within a 384px-tall element frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
