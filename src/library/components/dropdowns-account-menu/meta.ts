import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-account-menu',
  name: 'Dropdowns — Account menu',
  category: 'dropdowns',
  tags: ['corporate', 'dark'],
  description:
    'A dark native account disclosure with a profile summary, navigation links and a separate sign-out action.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide slate-950 disclosure with 16px padding and 16px radius. A 44px avatar summary opens to three 36px navigation links and a 36px sign-out button beneath a divider.',
    style:
      'Use slate-700 border, white account name, slate-400 plan text and a cyan-200 circular initials avatar. Navigation line icons are 16px; labels are 12px sans.',
    states:
      'The native summary opens and closes the account links and rotates its chevron. Navigation and sign-out hover in slate-800. Every control draws a 2px lime-300 focus outline with 2px offset.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
