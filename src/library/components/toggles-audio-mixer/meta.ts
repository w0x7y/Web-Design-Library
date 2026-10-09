import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-audio-mixer',
  name: 'Toggles — Audio mixer',
  category: 'toggles',
  tags: ['dark', 'minimal'],
  description:
    'Three native audio preference switches for a podcast recording, with a visible ready-to-record summary.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide zinc-950 card with 20px padding and three divided rows. Each row pairs a title and hint with a 44px by 24px switch, followed by a bordered status strip.',
    style:
      'Use zinc-700 borders, zinc-400 hints and lime-300 checked switches. Each switch has a 16px circular thumb with 20px checked travel; forced colors retain a border and CanvasText thumb.',
    states:
      'The native checkboxes toggle independently with mouse or Space. Checked state moves the thumb and changes the track. Inputs have 2px lime-300 focus outlines; reduced motion removes transitions.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
