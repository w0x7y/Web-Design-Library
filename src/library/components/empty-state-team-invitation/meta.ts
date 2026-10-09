import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-team-invitation',
  name: 'Invite your first teammate',
  category: 'empty-state',
  tags: ['playful', 'light'],
  description:
    'A friendly empty team roster with overlapping initials and an invitation action. Use it after a solo workspace is created.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px invitation card with a centered overlapping-avatar motif, heading, short explanation and pill action. Each avatar is 56px with a 4px panel-colored border.',
    style:
      'Orange-50 panel, orange-200 and orange-100 avatar fills, orange-950 headline and orange-900 button. 24px outer radius; default sans bold 20px title.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Fixed 288px root at every viewport, with 24px padding and wrapping copy. The complete component stays under 384px tall in the mobile and desktop capture frames.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
