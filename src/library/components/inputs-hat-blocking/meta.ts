import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-hat-blocking',
  name: 'Inputs — Hat blocking',
  category: 'inputs',
  tags: ['corporate', 'dark'],
  description:
    'Job-code, wooden-block and start-time fields for Crownform hat-blocking workshop. Use it to record a felt hat before shaping and drying.',
  preview: { kind: 'element' },
  fonts: ['Archivo:wght@400..700'],
  brief: {
    layout:
      'A 288px panel with 12px corners and a 1px border. A 16px-padded header contains a 10px brand line and 20px heading. The body has 20px padding, a full-width job-code input, then equal block-select and start-time columns 16px later with a 12px gap. All controls are 40px tall with 8px label spacing. An 11px ruled fitting-card hint follows 16px later.',
    style:
      'Archivo, slate-900 body and sky-950 header, slate-100 main text, sky-200 brand and slate-300 labels and hint. Controls are slate-950 with 1px slate-500 borders, 4px radii and 8px horizontal padding. Job code is 12px default monospace; select and time are 12px Archivo. Heading is 20px semibold at 28px leading; hint is 11px at 16px leading. Native dark colour scheme, no shadow.',
    states:
      'Job code starts at CF-1024-018 and is limited to 20 characters. Native block select starts at Fedora and offers Cloche and Pork pie; it references the fitting-card hint. Native time starts at 14:20. All controls show 2px current-colour focus-visible outlines offset 2px; the select and time also use focus-within so native time segments keep a cue. Forced colours retain outlines. No hover changes or motion.',
    responsive:
      'Width grows from 288px to 352px at 640px. Block and time remain equal columns with min-width-zero controls. Header and body padding and type sizes stay fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
