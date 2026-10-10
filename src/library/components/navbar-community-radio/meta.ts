import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-community-radio',
  name: 'Community radio on-air navigation',
  category: 'navbar',
  tags: ['playful', 'glass', 'dark'],
  description:
    'A community-radio header for Quay Radio, with a broadcast mast identity, programme links and a frosted on-air card. Use it for local stations with live streams and volunteer programming.',
  preview: { kind: 'section' },
  fonts: ['Bricolage Grotesque:wght@400;500;600;700'],
  brief: {
    layout:
      'A 1280px maximum wrapping flex row with 24px padding and 32px gaps. Brand block has a 64x32px broadcast mast SVG, a 36px bold wordmark 8px below and 12px station descriptor 8px later. Navigation is a two-column 14px grid with 16px column and 12px row gaps. On-air card has 20px padding, a 12px time label, an 18px medium show title 8px below and a 44px-minimum listening action 16px below with 20px side padding.',
    style:
      'Bricolage Grotesque on teal-950 with teal-50 type. Static 2px diagonal teal-700 strokes cover the right half behind the glass. Broadcast mark and time label are rose-200. Card has 10% white fill, a 30% white 1px border, 24px corners and 12px backdrop blur. Rose-200 listening pill has teal-950 14px semibold text. Wordmark has -0.025em tracking. No shadows.',
    states:
      'Brand and navigation underline on hover. Listen live fills rose-100. Every link has a 2px currentColor keyboard-focus outline offset 2px; the listening pill uses rose-200 for contrast against the dark card. Forced-colours focus remains visible. Broadcast SVG and background stripes are decorative. No animation.',
    responsive:
      'All regions wrap at every width. Below 768px identity and navigation stack naturally and the on-air card spans the available width. From 768px the card is 288px wide and moves right with auto margin. Padding stays 24px; navigation keeps two columns at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
