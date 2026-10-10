import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-migration-checklist',
  name: 'Migration checklist call to action',
  category: 'cta',
  tags: ['dark', 'corporate'],
  description:
    'A migration invitation with a compact checklist and an assisted-start action. Use it for B2B software that replaces an existing workflow.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A centered 1152px container with 24px side and 64px vertical padding, centered grid items and a 40px gap. Invitation includes eyebrow, two-line heading, 448px-wide paragraph and two links in a wrapping row with 20px gaps. A three-step ordered list has 24px padding and 24px between rows; each row has a 32px number circle and a flexible text block separated by 16px.',
    style:
      'Blue-950 canvas, white system sans heading, blue-200 body text and sky-300 accents. Heading is 36px semibold with 1.25 leading and -0.025em tracking. Primary action has sky-300 fill, blue-950 semibold type, 8px radius, 48px minimum height, 20px side padding and 12px arrow gap. Secondary action is 14px blue-200. Checklist has a 1px blue-800 border, blue-900 fill at 50% and 16px radius. Number circles have 1px blue-700 borders and 12px sky-300 text; titles are 14px semibold and descriptions 14px with 1.625 leading.',
    states:
      'On hover-capable devices the primary action fills sky-200; the secondary becomes white and underlines. Both links show 2px white outlines offset 2px on keyboard focus. The ordered list has role="list" to preserve Safari list semantics. No transitions or animations.',
    responsive:
      'Below 768px the invitation and checklist stack. At 640px the heading becomes 48px and checklist padding 32px. At 768px the grid becomes two equal columns with a 64px gap. Action links wrap when needed; number circles never shrink.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
