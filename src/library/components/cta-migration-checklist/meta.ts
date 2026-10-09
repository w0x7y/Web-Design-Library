import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-migration-checklist',
  name: 'Migration checklist call to action',
  category: 'cta',
  tags: ['dark', 'corporate'],
  description:
    'A migration invitation with a compact checklist and an assisted-start action. Use it for B2B software that replaces an existing workflow.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px dark panel lays out a small migration label, 48px headline, paragraph and action beside a bordered three-step checklist. Each step has a 32px outlined number circle and explanatory text.',
    style:
      'Blue-950 canvas, white headline, blue-200 body and sky-300 action. Checklist uses blue-800 borders and blue-900/50 fill with 16px radius. Steps are 14px with medium titles.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Two columns begin at 768px. Title is 36px on phones and 48px at 640px. Each checklist row wraps text in a flexible column. Actions wrap into a second row on phones.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
