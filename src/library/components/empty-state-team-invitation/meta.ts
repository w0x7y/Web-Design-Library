import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-team-invitation',
  name: 'Invite your first teammate',
  category: 'empty-state',
  tags: ['playful', 'light'],
  description:
    'A friendly empty team roster with overlapping avatar placeholders and an invitation action. Use it after a solo workspace is created.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px invitation card with 24px padding. A centered decorative avatar row has 8px vertical padding; three 56px circles have 4px panel-colored borders and overlap by 12px. A centered 20px bold heading follows after 16px. The 14px explanation uses a 24px line height and 12px top margin. A full-width 44px pill action follows after 24px.',
    style:
      'Default sans font on an orange-50 panel with a 24px radius and no shadow. Orange-200 and orange-100 avatar fills, orange-950 headline, orange-900 body and button fill. The YOU avatar is bold, the plus is 24px and the question mark is 20px. The action has 14px bold white text and 16px horizontal padding. Avatar placeholders are hidden from assistive technology.',
    states:
      'The invite button has a pointer cursor, orange-800 hover fill on hover-capable devices and a 2px stone-950 keyboard focus outline offset by 2px. No animation.',
    responsive:
      'Fixed 288px root at every viewport, with 24px padding and wrapping copy. The complete component stays under 384px tall in the mobile and desktop capture frames.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
