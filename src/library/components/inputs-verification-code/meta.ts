import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-verification-code',
  name: 'Inputs — Verification code',
  category: 'inputs',
  tags: ['minimal', 'light'],
  description:
    'A four-digit verification input set with separate labelled numeric fields and a recovery email field.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide white card with 20px padding. Four 48px square code fields share a 12px gap, followed by a 40px recovery email input and a small privacy hint.',
    style:
      'Slate-900 type, slate-200 border, 16px outer radius and rounded-lg fields. Code numbers use 24px monospace; a small indigo-50 shield tile marks the security context.',
    states:
      'Each code field and the email input has a 2px slate-900 outline with 2px offset when focused. Fields retain native editing; no JavaScript auto-advance or submit behavior is implied.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
