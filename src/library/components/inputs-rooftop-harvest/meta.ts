import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-rooftop-harvest',
  name: 'Inputs — Rooftop harvest',
  category: 'inputs',
  tags: ['editorial', 'light', 'has-image'],
  description:
    'Photo-led tomato harvest fields for Skyplot rooftop farm, pairing a growing-bed code with weighed yield. Use it for daily urban-farm harvest records.',
  preview: { kind: 'element' },
  fonts: ['Fraunces:wght@400..700'],
  brief: {
    layout:
      'A 288px panel with a 1px border and a full-width, 72px-high tomato photograph. Its body has 20px padding. A 10px brand line and 24px heading precede an equal two-column bed-code and yield grid with a 12px gap and 40px controls. A ruled 12px note follows 16px later with 12px top padding.',
    style:
      'Fraunces throughout; amber-50 paper, amber-950 ink and amber-800 borders. Square panel, photograph and fields; no shadow. Heading is 24px medium at 32px leading; labels are 11px uppercase with 0.025em tracking. White controls have 1px borders, 8px horizontal padding and 14px text. Yield uses tabular figures beside a 12px kg suffix. Note has 20px leading.',
    states:
      'Bed code starts at SP-T08 and references the packing note through aria-describedby. Yield starts at 4.60kg, has a zero minimum and 0.01 steps, and references the visible kg suffix. Native inputs have 2px current-colour focus-visible outlines offset 2px, including forced colours. No hover changes or motion.',
    responsive:
      'Width changes from 288px to 352px at 640px. The photo remains 72px tall with cover cropping. Two fields remain in equal min-width-zero columns; padding and typography stay fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
