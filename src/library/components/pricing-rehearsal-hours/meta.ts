import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-rehearsal-hours',
  name: 'Rehearsal room hourly board',
  category: 'pricing',
  tags: ['brutalist', 'dark'],
  description:
    'A staggered rehearsal-room pricing board with weekday, evening and weekend rates. Use it for hourly room bookings with equipment included.',
  preview: { kind: 'section' },
  fonts: ['IBM Plex Mono:wght@400;500'],
  brief: {
    layout:
      '1280px maximum width, 24px side and 64px vertical padding. Uppercase masthead, heading and intro, then three time bands 40px below with 12px gaps. Each band contains a time/day term, session description and price/unit. Bands have 24px padding. Footer pairs equipment and cancellation note with 48px booking link.',
    style:
      'IBM Plex Mono, neutral-950 canvas, neutral-100 ink, green-300 accents. Daytime band neutral-100 with neutral-950 ink, evening band green-300 with neutral-950 ink, weekend band dark with 2px neutral-100 border. Heading 36px medium uppercase/1.05; prices 48px, time 20px, other labels 12–14px. Square edges, no shadows. CTA has a 2px green-300 border and green-300 text.',
    states:
      'Booking link fills green-300 and turns neutral-950 on hover-capable devices; keyboard focus adds 2px green-300 outline offset 4px. Rates use a definition list. No animation.',
    responsive:
      'At 640px padding becomes 80px and heading 60px. At 768px each time band becomes 1fr/1.3fr/1fr columns with vertically centred content and right-aligned prices. At 1024px daytime/weekend bands have 48px right margin and evening band 48px left margin. On phones all three pieces stack; footer wraps.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
