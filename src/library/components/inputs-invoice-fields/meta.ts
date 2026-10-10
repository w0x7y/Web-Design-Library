import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-invoice-fields',
  name: 'Inputs — Invoice fields',
  category: 'inputs',
  tags: ['corporate', 'light'],
  description:
    'Compact billing fields with a currency prefix, invoice reference and due-date control.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A fixed 288px white panel with 20px padding, a 1px slate-200 border and 12px radius. A heading and draft badge share a row with 16px bottom margin. Stack amount, invoice reference and due date labels with 16px section gaps and 6px field gaps. Reference and date are 40px tall; the amount wrapper has 40px contents plus its 1px border. End with an 11px payment-terms hint after 8px.',
    style:
      'Default sans and slate-900 text. Heading is 14px semibold; the blue-50 draft badge has 4px radius and 10px semibold blue-800 text. Labels are 12px medium slate-700. Fields use slate-50 fill, 1px slate-500 boundaries, 8px radii and 12px horizontal padding. The amount has 14px tabular figures and a slate-100 USD prefix with a dividing border, linked as its accessible description. Reference uses 12px system monospace; date uses 14px sans. The terms hint is slate-500.',
    states:
      'All three editable controls use a 2px slate-900 focus outline with 2px offset. The date also outlines on focus-within so its internal segments and calendar button retain the cue. The USD prefix is connected to the amount by aria-describedby, and payment terms to the due date. Native number and date controls retain their browser behavior; there are no animated states.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
