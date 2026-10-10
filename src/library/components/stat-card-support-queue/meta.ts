import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-support-queue',
  name: 'Support queue overview',
  category: 'stat-card',
  tags: ['playful', 'light'],
  description:
    'A compact helpdesk queue card with a total, priority counts and an average-response line. Use it in customer support workspaces and small team dashboards.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px support card, 320px from 640px, with 20px padding and 24px corners. A title and message icon lead into a 48px open-conversation count. Three priority rows use 8px rounding and 12px side padding; an average-response line closes the card.',
    style:
      'Violet-100 surface, violet-950 primary text and violet-800 metadata. The 14px semibold title has 20px line height and a 24px message icon across a 12px gap. The 48px count has line height 1, weight 600, -0.025em tracking and tabular numbers, with 20px top margin. Supporting description is 12px with 16px line height. White-at-70% priority rows use 8px vertical and 12px horizontal padding, 8px corners and 8px gaps. Each has a 12px label, semibold count and an 8px decorative dot separated by 8px: rose-600 for Urgent, amber-500 for Normal and violet-500 for Low. The closing response line is 11px violet-800 with a semibold time and 16px top margin.',
    states:
      'This is a static summary without controls or animations. Priority is conveyed through written labels and counts as well as colored dots.',
    responsive:
      'The width grows from 288px to 320px at 640px. Priority rows remain a single column and all labels wrap naturally if needed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
