import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-fleet-capture',
  name: 'Fleet telemetry collection',
  category: 'settings',
  tags: ['brutalist', 'light'],
  description:
    'An orange fleet-telematics policy for Kilomet, with a connected-vehicle count and ruled collection ledger. Use it to configure trip-data frequency and retention.',
  preview: { kind: 'section' },
  fonts: ['Space Grotesk:wght@400..700'],
  brief: {
    layout:
      '1280px section with heavy masthead, introduction and 72px fleet count alongside a bordered data ledger. Ledger rows have 20px padding, followed by private-trip exclusion and a separate footer.',
    style:
      'Space Grotesk on #f2a15f orange with #29251f ink, #493a2c hints, #fff5e9 ledger paper. 2px outer rules, square ledger corners, 6px field/action radii and no shadows.',
    states:
      'Native fields, checkboxes and radios remain keyboard operable. Every control has a 2px focus outline offset 4px, currentColor for native inputs and the accent colour for primary buttons, including forced colours. Primary buttons fade to 90% opacity on hover-capable devices. No animation.',
    responsive:
      'At 640px heading grows to 48px and outer padding 32px. At 768px ledger rows split 1:1.2 label/control columns. At 1024px main regions split 1:1.5 with 64px gap. Everything stacks safely at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
