import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-family-listening',
  name: 'Family listening controls',
  category: 'settings',
  tags: ['playful', 'dark'],
  description:
    'A family music-streaming control page for Mixnest, with a native profile selector and explicit-content, playlist-visibility and autoplay checkboxes. Use it for family plan settings.',
  preview: { kind: 'section' },
  fonts: ['Familjen Grotesk:wght@400..700'],
  brief: {
    layout:
      '1280px container, 36px title, member selector and pale controls panel separated by 32px. Member rows use 40px initials and 16px vertical padding; the preference panel has 24px padding and 32px radius.',
    style:
      'Familjen Grotesk, #173c32 forest green ground, #f4f7db type and preference panel, #d9eb83 lime selection and action, #ecc3b8 peach initials. #526747 panel hints retain contrast. 1px member outlines; no shadow.',
    states:
      'Native fields, checkboxes and radios remain keyboard operable. Every control has a 2px focus outline offset 4px, currentColor for native inputs and the accent colour for primary buttons, including forced colours. Primary buttons fade to 90% opacity on hover-capable devices. No animation. The selected profile row gains a #d9eb83 border and #244e3b fill; only one profile radio is selected at once. The controls legend sits inside the padded pale panel.',
    responsive:
      'At 640px heading becomes 48px and side padding 32px. At 1024px the selector takes 352px beside a flexible preference panel with 56px gap. Rows remain full-width and regions stack on phones.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
