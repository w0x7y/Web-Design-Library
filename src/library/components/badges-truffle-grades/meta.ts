import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-truffle-grades',
  name: 'Badges — Truffle grading',
  category: 'badges',
  tags: ['minimal', 'editorial', 'light'],
  description:
    'Myco Ledger truffle-grading badges pair provenance with two commercial size grades. Use them on specialist produce lots and buyer inspection sheets.',
  preview: { kind: 'element' },
  fonts: ['Fraunces:wght@400..600'],
  brief: {
    layout:
      'A 288px panel with 24px padding. A 12px lot label and 24px species heading precede a full-width provenance ribbon. Two grading badges use a 2:1 grid with 8px gap and 20px top margin; a 12px inspection footer follows after 20px.',
    style:
      'Stone-100 surface and rose-950 ink, Fraunces serif on heading and 30px grade letters, default sans on metadata. Provenance ribbon has rose-950 top and bottom hairlines with 8px vertical padding. Extra is rose-950 with stone-100 text; Small is transparent with a 1px rose-950 border. Square corners and no shadow.',
    states:
      'Static grading information without controls, hover effects or animation. Each grade includes a written size range; colour does not carry grading meaning alone.',
    responsive:
      'Below 640px the element is 288px wide. At 640px it becomes 352px wide. Internal badge sizes remain unchanged; wrapping rows use their available width. No other breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
