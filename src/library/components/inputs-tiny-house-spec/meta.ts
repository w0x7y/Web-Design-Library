import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-tiny-house-spec',
  name: 'Inputs — Tiny-house specification',
  category: 'inputs',
  tags: ['corporate', 'light'],
  description:
    'A Nestframe tiny-house specification panel with timber-shell and floor-plan selectors plus a floor-area field. Use it at the start of a custom build enquiry.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Sans:wght@400;500;600;700'],
  brief: {
    layout:
      'A 288px panel with 20px padding, 12px corners and a 4px top border. A 10px brand line and 20px heading precede a shell-to-layout grid, with two flexible columns, a 16px decorative arrow and 8px gaps. Labels sit 8px above 40px selects. A full-width 40px floor-area input follows 16px later; its hint follows after 8px.',
    style:
      'IBM Plex Sans on slate-50 with slate-950 text, slate-600 11px hint at 16px leading, and teal-800 brand, arrow and top border. Heading is 20px semibold at 28px leading. Controls are white with 1px slate-500 borders, 6px radii, 8px horizontal padding and 14px text; labels are 12px medium at 16px leading. No shadow.',
    states:
      'Shell and layout selects retain native behavior and start at Cedar and Loft. Floor area starts at 24 square metres and accepts positive whole numbers. Its visible unit label and aria-describedby hint explain the measurement. All controls have 2px current-colour focus-visible outlines offset 2px, including forced colours. The arrow is aria-hidden. No hover changes or animation.',
    responsive:
      'Below 640px the root is 288px wide; from 640px it is 352px. The specification row stays horizontal with min-width-zero controls. Padding, type and control heights stay fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
