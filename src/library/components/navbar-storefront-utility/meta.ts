import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-storefront-utility',
  name: 'Storefront utility navigation',
  category: 'navbar',
  tags: ['corporate', 'light'],
  description:
    'A two-level shop header with a shipping announcement and clearly grouped product links. Use it for a small homeware or lifestyle store.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'Full-width shipping announcement with 20px horizontal and 12px vertical padding. Centered 1152px container has 20px horizontal padding. Main row has 24px vertical padding and 20px gap, pairing serif wordmark with wrapping customer links and shopping bag. Bag pill has 16px horizontal and 8px vertical padding. Category navigation has a top hairline, 16px vertical padding and five wrapping links with 32px horizontal and 16px vertical gaps.',
    style:
      'Default sans, stone-50 background and emerald-950 ink. Announcement is emerald-950 with 12px white text. System-serif wordmark is 30px with 36px line-height and -0.025em tracking. Customer and category links are 14px; New arrivals is semibold. Bag pill has a stone-300 border and 12px count separated by 8px margin. Category hairline is stone-200. No shadows.',
    states:
      'Brand turns emerald-700 on hover, ordinary links underline and shopping bag fills stone-100. Every link shows a 2px zinc-950 keyboard outline offset 2px, including forced colours. Shopping bag has an accessible name containing its two-item count. No transitions.',
    responsive:
      'Main row stacks with left-aligned utilities below 640px. From 640px it becomes a centered justified row and horizontal container padding becomes 24px. Utilities and categories wrap at all widths; category gaps remain 32px horizontally and 16px vertically.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
