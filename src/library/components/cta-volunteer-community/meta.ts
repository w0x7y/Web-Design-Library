import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-volunteer-community',
  name: 'Volunteer community call to action',
  category: 'cta',
  tags: ['editorial', 'light'],
  description:
    'A community invitation with participation options and a clear volunteer action. Use it for local initiatives, nonprofits and neighborhood groups.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A centered 1152px container with 24px side and 64px vertical padding. Eyebrow, a 768px-wide serif heading and a 576px-wide invitation precede three volunteering opportunities by 40px. Opportunities have 24px grid gaps and top borders with 20px top padding; each contains a numbered label, title and paragraph. Bottom action/contact area starts 40px later with a top border and 28px top padding.',
    style:
      'Emerald-50 canvas and emerald-950 text. System serif heading is 36px with 1.25 leading; eyebrow is 12px semibold uppercase emerald-700 with 0.1em tracking. Opportunity labels use 12px system monospace emerald-700; titles are 20px medium and descriptions are 14px emerald-900 with 1.625 leading. Borders are 1px emerald-200. Signup link is an emerald-950 pill with white 14px medium text, 48px minimum height, 24px side padding and a 16px arrow separated by 12px. Contact note is 14px emerald-900 and its link is underlined with 4px offset.',
    states:
      'On hover-capable devices the signup action fills emerald-900 and the coordinator link becomes emerald-700. Both links show 2px zinc-950 outlines offset 2px on keyboard focus. No transitions or animations.',
    responsive:
      'Below 640px heading is 36px and the bottom area stacks with a 20px gap. At 640px heading becomes 48px and actions/contact form a centered, space-between row. Opportunities stack below 768px, then form three equal columns. Side padding remains 24px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
