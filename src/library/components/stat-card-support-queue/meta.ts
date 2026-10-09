import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-support-queue',
  name: 'Support queue overview',
  category: 'stat-card',
  tags: ['playful', 'light'],
  description:
    'A compact helpdesk queue card with a total, priority counts and a response-time badge. Use it in customer support workspaces and small team dashboards.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px support card, 320px from 640px, with 20px padding and 24px corners. A title and message icon lead into a 48px open-conversation count. Three priority rows use 8px rounding and 12px side padding; an average-response line closes the card.',
    style:
      'Violet-100 surface, violet-950 primary text and violet-800 metadata. Semi-transparent white priority rows have rose, amber and violet decorative dots alongside explicit urgency labels and numeric counts.',
    states:
      'This is a static summary without controls or animations. Priority is conveyed through written labels and counts as well as colored dots.',
    responsive:
      'The width grows from 288px to 320px at 640px. Priority rows remain a single column and all labels wrap naturally if needed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
