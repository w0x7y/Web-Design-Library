import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-seed-archive',
  name: 'Heritage seed request',
  category: 'cta',
  description:
    'A heritage-seed CTA styled as an archive accession sheet, with packet facts and a native dispatch-timing disclosure.',
  tags: ['editorial', 'light'],
  preview: { kind: 'section' },
  fonts: ['Fraunces:wght@400..700'],
  brief: {
    layout:
      '1280px maximum-width section with 24px side and 56px vertical padding. Ruled masthead, a 40px-spaced heading/specimen grid, then a 32px-spaced footer with action and details disclosure. The specimen has top and bottom 1px rules, 20px vertical padding and a two-column definition list.',
    style:
      'Fraunces on amber-50 paper, green-950 main ink, green-900 body/rules and green-800 fact labels. Heading 40px regular, 1.1 leading and -0.025em tracking. Monospace 12px accession labels. Square green-950 action with amber-50 14px semibold text and 48px minimum height. No shadows.',
    states:
      'Action becomes green-900 on hover-capable devices; summary changes to green-700. Both show 2px green-950 focus outlines offset 4px. Native details toggles dispatch text with a visible disclosure marker. No animation.',
    responsive:
      'At 640px heading becomes 56px and padding becomes 80px vertical and 32px horizontal. At 768px heading/specimen become 1.2:1 columns with 64px gap and footer forms a row; smaller widths stack.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
