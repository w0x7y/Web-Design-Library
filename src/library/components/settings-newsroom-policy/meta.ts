import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-newsroom-policy',
  name: 'Newsroom publishing policy',
  category: 'settings',
  tags: ['editorial', 'light'],
  description:
    'A numbered publishing-policy sheet for Edition Desk, a newsroom CMS, with editorial approval and correction rules. Use it in publication administration.',
  preview: { kind: 'section' },
  fonts: ['Newsreader:wght@400..700'],
  brief: {
    layout:
      '1280px container, 48px vertical and 20px side padding. A double-ruled masthead precedes a 36px heading and two numbered policy rows. Rows have 24px vertical padding; a correction note and save action close the form.',
    style:
      'Newsreader on warm #fffdf7, #25231e ink, #655c54 supporting copy and #a23124 red accents. Square ruled sections, 6px field and button radii, no shadows. 14px copy with 24px leading, 30px red row numbers.',
    states:
      'Native fields, checkboxes and radios remain keyboard operable. Every control has a 2px focus outline offset 4px, currentColor for native inputs and the accent colour for primary buttons, including forced colours. Primary buttons fade to 90% opacity on hover-capable devices. No animation.',
    responsive:
      'At 640px side padding becomes 32px and heading 48px. At 768px policy rows use 64px/1fr/1fr columns with 32px gaps. Below that labels and controls stack; footer wraps.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
