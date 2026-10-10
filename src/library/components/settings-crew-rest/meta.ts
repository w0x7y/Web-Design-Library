import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-crew-rest',
  name: 'Airline crew rest preferences',
  category: 'settings',
  tags: ['corporate', 'dark'],
  description:
    'A dark crew-app preference ticket for Aerlane, with next-duty context, time-zone display and off-duty alert rules. Use it for airline staff accounts.',
  preview: { kind: 'section' },
  fonts: ['Barlow:wght@400;500;600;700'],
  brief: {
    layout:
      '1280px section with title and joined ticket after 32px. Ticket masthead has 24px side and 16px vertical padding. A next-duty stub precedes a 24px padded settings region with 24px gaps.',
    style:
      'Barlow on #0e223a navy, #f0f6ff type, #b4c6dc metadata, #c3e4ef action. 12px outer ticket radius, #1c3654 header, 1px #51647c dashed stub divider, 36px route. No shadows.',
    states:
      'Native fields, checkboxes and radios remain keyboard operable. Every control has a 2px focus outline offset 4px, currentColor for native inputs and the accent colour for primary buttons, including forced colours. Primary buttons fade to 90% opacity on hover-capable devices. No animation. Native disclosure summaries reveal their explanatory paragraphs and close again without JavaScript.',
    responsive:
      'At 640px selectors become two columns, heading 48px and outer padding 32px. At 1024px the stub is 288px wide beside the preference area; its divider becomes vertical. Below that it stacks above the fields.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
