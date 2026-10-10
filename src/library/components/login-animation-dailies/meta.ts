import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-animation-dailies',
  name: "Animation dailies review room",
  category: 'login',
  tags: ["editorial","dark"],
  description: "A dark Flipframe studio login with a large serif headline, three-frame production strip and horizontal sign-in bar. Use it for stop-motion dailies and shot review.",
  preview: { kind: 'section' },
  fonts: ["Newsreader:wght@400..700"],
  brief: {
    layout: "A 1152px page with a ruled, wrapping masthead; heading and introduction; a three-cell film-stage strip; and an access form beneath. Section padding is 40px vertical/24px horizontal. Editorial block has 24px gaps and 32px vertical padding. Frame strip has 8px gaps, 20px vertical padding and three equal cells; form has 32px top padding and 20px gaps. Controls are 48px high.",
    style: "Newsreader throughout, zinc-900 background and fields, rose-50 heading and rose-200 secondary text. Main heading is 48px with 1.05 leading and -0.025em tracking. Rules/cells have rose-300 at 50% borders, with square corners. Frame captions are 14px. Fields have opaque rose-300 boundaries; submit is rose-200 with zinc-950 text. No shadows.",
    states: "Submit becomes rose-100 on hover. Fields and recovery link show 2px current-color outlines offset 4px; submit uses a rose-300 outline for visible contrast on the dark page. Required email/password use native autocomplete and email references the production-introduction hint. No animation.",
    responsive: "From 640px section padding is 64px vertical/40px horizontal, headline 72px and frame captions 18px/28px. From 1024px title/introduction use 1.6:1 columns with bottom alignment and 48px vertical padding; email/password/submit form a three-column row, with recovery link below. Narrow screens retain the three flexible stage cells and stack credentials.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
