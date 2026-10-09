import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-membership-categories',
  name: 'Membership topic FAQ',
  category: 'faq',
  tags: ['playful', 'light'],
  description:
    'A grouped membership FAQ with joining and participation topics in separate colored columns. Use it for community and club memberships.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px centered heading sits above two topic panels. Each panel has a small topic label, 24px heading and two native disclosure rows. Joining panel is violet-100; participation panel is lime-100.',
    style:
      'Violet-50 canvas, violet-950 ink, violet-100 and lime-100 panels, transparent disclosure backgrounds and violet-200 rules. Panels have 24px radii and 24px padding. Main headline is 48px bold sans.',
    states:
      'Independent native disclosure rows can open together, letting readers compare answers across topics. Plus signs rotate when open. All summaries and the host contact link show a 2px focus outline with 2px offset. No transitions.',
    responsive:
      'Topic panels become two columns at 768px. Main title is 36px on phones and 48px at 640px. Panels stay full width and disclosure labels wrap beside a 16px plus icon.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
