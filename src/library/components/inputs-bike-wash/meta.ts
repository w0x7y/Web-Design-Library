import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-bike-wash',
  name: 'Inputs — Mobile bike wash',
  category: 'inputs',
  tags: ['minimal', 'light'],
  description:
    'Numbered postcode and access-note fields for Spokewash mobile bike cleaning. Use them to arrange a wash at a customer courtyard or workplace.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px panel with 20px padding and a 1px border. A 10px brand line and 24px heading precede two numbered field groups with 16px top margins. Each group has a 24px number column, flexible control column and 8px gap. The postcode is 40px tall; the access textarea is 72px tall. Labels sit 8px above fields and a linked 11px hint follows the textarea after 8px.',
    style:
      'Default sans on white with neutral-950 ink, neutral-600 secondary text and a neutral-300 outer border. Square panel; fields have 1px neutral-500 boundaries, 4px corners and 12px padding. Heading is 24px at 32px leading with -0.025em tracking; labels are 12px semibold at 16px leading. Number markers use 12px default monospace. Field text is 14px, normal input leading and 20px textarea leading. No shadow.',
    states:
      'Postcode starts at E8 3RL and uses postal-code autocomplete. The native multiline textarea starts with bike and courtyard details, allows 240 characters and is associated with its hint. Both text controls have 2px current-colour focus-visible outlines offset 2px, including forced colours. Number markers are aria-hidden. No hover changes or animation.',
    responsive:
      'Root width is 288px below 640px and 352px from 640px. Stacked numbered rows, padding, typography and field heights remain the same.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
