import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-inbox-cleared',
  name: 'Inbox cleared confirmation',
  category: 'empty-state',
  tags: ['editorial', 'light'],
  description:
    'A quiet inbox-zero state that acknowledges completed work. Use it in a notifications or review queue.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px card with 24px padding and 1px top and bottom rules. A 10px monospaced uppercase inbox label sits opposite a 48px check illustration. After 28px, a 30px serif heading has a 36px line height. Body copy is 14px with a 24px line height and 12px top margin. A 12px return link sits below a rule with 24px top margin and 16px top padding.',
    style:
      'Warm #f7f2e8 surface, #40382d ink, #756854 muted copy, thin horizontal rules and a 30px system serif title. Square corners.',
    states:
      'The underlined return link has a 4px underline offset and a 2px current-color keyboard focus outline offset by 2px. No hover change or animation.',
    responsive:
      'Fixed 288px root at every viewport, with 24px padding and wrapping copy. The complete component stays under 384px tall in the mobile and desktop capture frames.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
