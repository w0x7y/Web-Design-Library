import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-travel-itinerary',
  name: 'Tabs — Travel itinerary',
  category: 'tabs',
  tags: ['minimal', 'light'],
  description:
    'A native radio-backed day selector that switches a compact city itinerary, with times and activity descriptions.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide white card with 20px padding. Three equal-width 36px day tabs sit above a 152px itinerary panel with a city heading and two timed stops.',
    style:
      'Use emerald-950 headings, slate-200 borders, 16px outer radius and emerald-50 checked radio labels. Panel times use 10px monospace; stops use 12px semibold titles.',
    states:
      'Native radios switch the visible day panel using group-has checked selectors. Arrow keys move within the group. Labels draw 2px slate-900 focus outlines with 2px offset, and hover uses emerald-50.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
