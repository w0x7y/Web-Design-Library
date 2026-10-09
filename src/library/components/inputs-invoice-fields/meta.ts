import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-invoice-fields',
  name: 'Inputs — Invoice fields',
  category: 'inputs',
  tags: ['corporate', 'light'],
  description:
    'Compact billing fields with a currency prefix, invoice reference and due-date control.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide white panel with 20px padding and 16px gaps. Stack three labelled 40px fields, ending with a native date input and an 11px payment-terms hint.',
    style:
      'Slate-200 border and 12px radius with default sans typography. Labels use slate-700 at 12px, fields slate-50, and the currency prefix sits in a slate-100 compartment.',
    states:
      'All three editable controls use a 2px slate-900 focus outline with 2px offset. The date input also outlines on focus-within so its internal date segments and calendar button retain the cue. Native number and date inputs retain their browser behavior; there are no animated states.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
