import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-journal-masthead',
  name: 'Journal masthead navigation',
  category: 'navbar',
  tags: ['editorial', 'light'],
  description:
    'A publication masthead with a central serif title and a horizontal topic index. Use it for magazines, essays and independent journals.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'Centered 1152px masthead with 24px horizontal padding. Top date and publication-history row wraps with 12px gaps and 16px vertical padding. Centered title has 32px vertical padding and a tagline 8px below it. Topic and subscription row has top and bottom hairlines, 16px vertical padding and 20px gap. Topic list wraps with 24px horizontal and 12px vertical gaps.',
    style:
      'White surface and stone-950 ink in default sans. System-serif title is 36px with 40px line-height and -0.025em tracking. Edition metadata is 12px stone-600 monospace. Tagline is 12px uppercase stone-600 sans with 0.2em tracking. Topics are 14px, Latest semibold; subscription is semibold orange-800 with a 16px arrow. Stone-200 edition hairline and stone-950 navigation borders. No shadows.',
    states:
      'Title turns orange-800 on hover; topics and subscription underline. All links have a 2px zinc-950 keyboard outline offset 2px, including forced colours. Latest is marked aria-current page. No transitions.',
    responsive:
      'Title is 36px below 640px and 48px with line-height 1 from 640px. Navigation and subscription stack below 768px and become a centered justified row from 768px. Edition and topic links wrap. Horizontal padding stays 24px at every width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
