import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-wind-array',
  name: 'Wind array monitor',
  category: 'dashboard',
  tags: ['glass', 'gradient', 'dark', 'has-image'],
  description:
    'A photographed wind-farm dashboard with a turbine array, generation readings and an expandable service note. Use it for renewable-energy operations.',
  preview: { kind: 'section' },
  fonts: ['Manrope:wght@400..700'],
  brief: {
    layout:
      'Full-width section with a 1280px inner container, 16px horizontal and 32px vertical padding. Wrapping header, then a 16px-gapped grid after 32px. The array has six 3-column turbine tiles, 40px SVGs, 12px labels and 11px outputs. A 320px generation rail has 24px padding, a 48px output and a 2-column facts ledger.',
    style:
      'Manrope on teal-950 with cyan-50 text. A turbine photograph at 25% opacity sits behind a teal-950 to teal-900 oklab scrim. The array uses 16px radii, 1px cyan-100 borders at 20%, teal-950 at 40% and 20px padding. Tiles have 12px radii; the rail uses white at 10%, a 25% white border and 24px backdrop blur. Amber-200 labels mark the isolated turbine. No shadow.',
    states:
      'Native details reveals the WT-05 service note. Summary text lightens from amber-200 to amber-100 on hover and shows a 2px current-color focus outline offset 2px. Turbine status is written in text; SVGs are decorative. No animation.',
    responsive:
      'At 640px outer padding becomes 32px horizontal and 48px vertical; the heading grows from 30px to 36px, array padding to 32px and tile gaps from 12px to 24px. At 1024px the body splits into flexible array and 320px rail. Below that they stack. Tiles remain in three columns and fit at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
