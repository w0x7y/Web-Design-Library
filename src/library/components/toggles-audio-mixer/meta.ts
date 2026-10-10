import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-audio-mixer',
  name: 'Toggles — Audio mixer',
  category: 'toggles',
  tags: ['dark', 'minimal'],
  description:
    'Three native audio preference switches for a podcast recording, with a microphone connection summary.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide zinc-950 card with 20px padding and a 16px radius. A 10px zinc-400 uppercase eyebrow and 18px semibold title precede three rows with 16px top padding and 16px gaps. Each row pairs a title and hint with a 44px by 24px switch. A status strip follows the group with a 20px top margin, 8px vertical/12px horizontal padding, 8px radius, 10px text and a 6px lime-300 dot separated by an 8px gap.',
    style:
      'Use the default sans stack, no shadows, a 1px zinc-700 outer/status border, zinc-800 row dividers, 14px medium labels, 11px zinc-400 hints and lime-300 checked switches. Unchecked switches have a zinc-800 fill and 2px zinc-500 border for visible control boundaries. Each switch has a 16px zinc-400 circular thumb, positioned 2px from the inside top/left, with 20px checked travel and a zinc-950 checked fill; forced colors retain a border and CanvasText thumb in both checked and unchecked states.',
    states:
      'The native checkboxes toggle independently with mouse or Space. Checked state moves the thumb and changes the track. Noise reduction and Auto level start on; Live monitoring starts off. Inputs expose switch semantics, retain their labels and hint associations, and have 2px lime-300 focus outlines offset by 2px. Tracks and thumbs transition over 150ms; reduced motion removes both transitions. There are no hover changes.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
