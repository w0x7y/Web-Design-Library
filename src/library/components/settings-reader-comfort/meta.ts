import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-reader-comfort',
  name: 'E-reader comfort settings',
  category: 'settings',
  tags: ['minimal', 'editorial', 'light'],
  description:
    'A quiet e-reader preference page for Folio Pocket, pairing an original reading specimen with text-size, paragraph-alignment and page-number controls. Use it in reading-device settings.',
  preview: { kind: 'section' },
  fonts: ['Literata:wght@400..700'],
  brief: {
    layout:
      '1280px wrapper with two regions after 40px. A ruled reading specimen has 32px vertical padding, 24px italic chapter title, 18px prose with 36px leading and a centered page number. Preferences have a 2px plum rail and 20px inset.',
    style:
      'Literata on pure white, #302537 dark plum ink, #6e6476 metadata and #d7cddc rules. #634176 focus/action accent, 6px fields and action radii; no cards or shadows. Heading 36px, body controls 14px.',
    states:
      'Native fields, checkboxes and radios remain keyboard operable. Every control has a 2px focus outline offset 4px, currentColor for native inputs and the accent colour for primary buttons, including forced colours. Primary buttons fade to 90% opacity on hover-capable devices. No animation. Native disclosure summaries reveal their explanatory paragraphs and close again without JavaScript.',
    responsive:
      'At 640px heading becomes 48px and outer side padding 32px. At 1024px specimen and controls become 1.5:1 columns with 80px gap. At smaller widths specimen precedes preferences and footer wraps.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
