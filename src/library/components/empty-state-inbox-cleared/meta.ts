import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-inbox-cleared',
  name: 'Inbox cleared confirmation',
  category: 'empty-state',
  tags: ['editorial', 'light'],
  description:
    'A quiet inbox-zero state that acknowledges completed work. Use it in a notifications or review queue.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px ruled confirmation with uppercase inbox label opposite a 48px check illustration, serif heading, brief reassurance and a return link below a rule.',
    style:
      'Warm #f7f2e8 surface, #40382d ink, #756854 muted copy, thin horizontal rules and a 30px system serif title. Square corners.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Fixed 288px root at every viewport, with 24px padding and wrapping copy. The complete component stays under 384px tall in the mobile and desktop capture frames.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
