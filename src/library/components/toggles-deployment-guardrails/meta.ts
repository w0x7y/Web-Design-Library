import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-deployment-guardrails',
  name: 'Toggles — Deployment guardrails',
  category: 'toggles',
  tags: ['corporate', 'light'],
  description:
    'A native checkbox group for deployment protections, with explanatory labels and a mandatory verification reminder.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide white panel with 20px padding. Stack three 60px checkbox rows with 8px gaps beneath a heading and above a compact footnote.',
    style:
      'Slate-200 border, 12px outer radius and rounded-lg option rows. Selected rows use blue-50 and blue-300 borders; each 16px checkbox uses blue-700 accent.',
    states:
      'Checkboxes independently toggle with keyboard or pointer. Checked rows change their background and border; each native control draws a 2px slate-900 focus outline with 2px offset.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
