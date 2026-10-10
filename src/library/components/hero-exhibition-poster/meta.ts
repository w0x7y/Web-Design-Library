import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-exhibition-poster',
  name: 'Exhibition poster hero',
  category: 'hero',
  tags: ['editorial', 'light'],
  description:
    'An exhibition opening with oversized serif typography and a compact visitor schedule. Use it for museums, galleries and cultural events.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A centered 1280px poster with 24px horizontal and 40px vertical padding. Wrapping masthead has 16px gaps and a hairline with 20px bottom padding. Title follows at 40px. Introduction and a two-column definition list follow at 48px with a top hairline, 32px padding and 40px gap. Footer has a visit link and a 112px circular emblem, with 40px top margin and 32px wrapping gap.',
    style:
      'Stone-100 background, stone-950 ink, orange-700 accent and stone-300 hairlines. System-serif title is 56px, line-height 0.95 and -0.025em tracking with an italic orange second line. Introduction is 20px with 1.625 line-height. Labels use 12px uppercase monospace, stone-600 for visitor labels. Visit link is 18px with a bottom border and 24px arrow. Emblem contains a 32px by 80px orange capsule rotated 45deg.',
    states:
      'Visit link turns orange-700 on hover and shows a 2px zinc-950 keyboard focus outline offset 2px, including forced colours. Emblem is decorative and hidden from assistive technology. No transitions.',
    responsive:
      'Below 640px title is 56px. At 640px title becomes 96px, horizontal padding 40px and vertical padding 56px. Information changes to two equal columns at 768px. Title becomes 128px at 1024px. Header and footer wrap; visitor details retain two columns with wrapping text.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
