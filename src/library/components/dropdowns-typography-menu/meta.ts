import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-typography-menu',
  name: 'Dropdowns — Typography menu',
  category: 'dropdowns',
  tags: ['minimal', 'light'],
  description:
    'A native text-style disclosure with font-family radios, typographic samples and a native type-size selector.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide white disclosure with 16px padding and 12px radius. Below the 40px summary, three 44px font radio rows precede a 36px native size select.',
    style:
      'Use slate-200 borders, slate-900 type and blue-50 selected rows. Font samples use system sans, serif and monospace stacks, with 20px Aa markers and 11px family descriptions.',
    states:
      'The native summary toggles the panel; font-family radios and size select retain their native keyboard interactions. Focus outlines are 2px slate-900 with 2px offset, and checked font rows use blue-50.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
