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
      'A 288px-wide white panel with 20px padding. A 10px uppercase eyebrow and 18px semibold title precede an option group with a 16px top margin. Three content-height checkbox rows have 12px padding, 12px internal gaps, 8px radii and 8px gaps between rows. A compact footnote follows.',
    style:
      'Use the default sans stack, a 1px slate-200 border, 12px outer radius and slate-900 primary text. Row labels are 12px semibold with 16px line height; 10px slate-600 hints sit 4px below each label. The slate-500 footnote has 16px line height and a 16px top margin. No shadows. Selected rows use blue-50 and blue-300 borders; each 16px checkbox uses blue-700 accent.',
    states:
      'Require approval and Automatic rollback start checked; Business hours only starts unchecked. Native checkboxes independently toggle with keyboard or pointer. Explicit label references keep the accessible name separate from its associated hint. Checked rows change their background and border; each native control draws a 2px slate-900 focus outline with 2px offset. There are no hover effects or transitions; native check marks retain state in forced colours.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
