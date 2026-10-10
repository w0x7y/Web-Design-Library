import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-listening-club',
  name: 'Listening club navigation',
  category: 'navbar',
  tags: ['playful', 'glass', 'dark'],
  description:
    'A listening club header with a waveform identity and a frosted upcoming-session card. Use it for intimate music venues and community listening events.',
  preview: { kind: 'section' },
  fonts: ['Bricolage Grotesque:wght@400;500;600;700'],
  brief: {
    layout:
      '1280px maximum wrapping flex row with 32px gaps and 24px padding. Brand block contains a 64px by 32px waveform SVG, a 36px bold wordmark 8px below and 12px descriptor 8px below that. Navigation is a two-column 14px grid with 16px horizontal and 12px vertical gaps. Session card has 20px padding, a 12px date, 18px medium artist label 8px below and a 44px booking action 16px below.',
    style:
      'Bricolage Grotesque, teal-950 canvas and teal-50 text. Static diagonal teal-700 strokes behind the glass create depth. Waveform and session date are rose-200. Card has 10% white fill, 30% white 1px border, 24px radius and 12px backdrop blur. Rose-200 booking pill uses teal-950 text. No shadows.',
    states:
      'Brand and navigation underline on hover. Booking pill fills rose-100. Every control shows a 2px currentColor focus outline offset 2px, including forced colours. Decoration has no motion.',
    responsive:
      'All regions wrap at every width. Brand and navigation stack naturally at narrow widths; session card fills the available width below 768px. From 768px the card is 288px wide and moves to the far right using auto margin. Outer padding stays 24px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
