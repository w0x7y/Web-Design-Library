import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-dark-fibre',
  name: 'Fiber network operator access',
  category: 'login',
  tags: ['corporate', 'dark'],
  description:
    'A dark Spanline telecom sign-in with a route diagram and organization-managed SSO entry. Use it for fiber-network records and maintenance portals.',
  preview: { kind: 'section' },
  fonts: ['IBM Plex Sans:wght@400..700'],
  brief: {
    layout:
      'A 1152px container with 24px side and 40px vertical padding. Brand masthead has a bottom rule, followed by a 40px-gap grid. Network explanation and 160px diagram precede an inset access card with 24px padding. Card has a 24px title, 28px top form margin, 20px form gaps and 48px controls.',
    style:
      'IBM Plex Sans; slate-950 page, slate-900 card/field, slate-100 text, slate-300 body and cyan-200/300 highlights. Main heading is 36px medium, 1.25 leading and -0.025em tracking. Card has slate-600 border and 12px radius. Email has cyan-400 boundary, submit is cyan-200 with slate-950 text and 8px radius. Route SVG uses square junctions and cyan lines. No shadows.',
    states:
      'SSO submit changes to cyan-100 on hover. Email and recovery link have 2px current-color focus outlines offset 4px, retained in forced colors; submit uses cyan-400 for contrast on slate-900. Required email uses username autocomplete and references the SSO explanation. No client-side authentication logic or animation.',
    responsive:
      'From 640px, horizontal section padding is 40px, heading 48px, diagram 224px tall and card padding 32px. From 1024px network/card use 1.4:1 columns with 64px gap. Below 1024px the route context precedes the access card; utility masthead and route note wrap.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
