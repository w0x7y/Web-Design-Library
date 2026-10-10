import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-newsroom-pulse',
  name: 'Newsroom audience pulse',
  category: 'dashboard',
  tags: ['editorial', 'dark'],
  description:
    'A dark editorial newsroom dashboard with concurrent readers, a half-hour trend and ranked stories. Use it for publication audience monitoring.',
  preview: { kind: 'section' },
  fonts: ['Newsreader:wght@400..500'],
  brief: {
    layout:
      '1280px container, 16px horizontal and 40px vertical padding. Ruled wrapping masthead then two regions after 32px with 32px gaps. Left has a 60px reader count and a 600:140 SVG trend; right has three ranked story rows with 24px rank columns, flexible titles and counts. A four-source referral ledger follows after 32px.',
    style:
      'Red-950 canvas with rose-50 text, rose-200 metadata and orange-200 highlights. Newsreader serif for the 36px headline, 60px reader count and 24px panel title; default sans for 12px metadata and 14px story titles at 24px line height. Rose-200 rules at 25% or 40% opacity. No cards, corner rounding or shadow.',
    states:
      'A native disclosure explains the five-minute active-session count. Summary underlines on hover and has a 2px current-color focus outline offset 2px. The SVG is decorative, and the figure accessible name gives start, peak and latest values. No animation.',
    responsive:
      'At 640px outer padding grows to 32px, heading to 48px and referrals become four columns. At 1024px reader graph and ranked stories sit in two equal columns. Below they stack; story titles wrap in a minmax(0,1fr) column and stay within 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
