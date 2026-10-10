import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-farm-pledge',
  name: 'Inputs — Farm crowdfunding',
  category: 'inputs',
  tags: ['glass', 'gradient', 'dark'],
  description:
    'A frosted Fieldfund pledge panel with a farm campaign field, a GBP contribution and a campaign-goal strip. Use it in agricultural crowdfunding checkout flows.',
  preview: { kind: 'element' },
  fonts: ['DM Sans:wght@400..700'],
  brief: {
    layout:
      'A 288px panel with 20px padding and 24px corners. A 10px brand line and 24px heading precede a frosted region 16px later with 16px padding. The campaign field is 40px tall. A pledge label follows 16px later, then a 44px number-and-unit row after 8px. An 11px linked hint sits 8px below. A horizontal farm-reference and funding-goal strip finishes the panel after 16px.',
    style:
      'DM Sans, emerald-50 text on a diagonal bottom-right gradient in oklab from emerald-800 through emerald-950 to slate-950. Brand, GBP unit and footer are lime-200; the hint is emerald-100. Heading is 24px medium at 32px leading with tight tracking. Glass has white 10% fill, white 50% 1px border, 16px corners and 24px backdrop blur. Fields use the same fill and border, 8px radii and 12px horizontal padding. Campaign copy is 14px; pledge is 24px with tabular digits. Native dark colour scheme, no shadow.',
    states:
      'Campaign starts at Eastfield cold store and remains editable. Pledge starts at 125 GBP, uses 5 GBP steps, a minimum of 5 and maximum of 100000. Its visible GBP suffix and funding hint are linked through aria-describedby. Both controls show 2px current-colour focus-visible outlines offset 2px, including forced colours. No authored hover changes or motion.',
    responsive:
      'Root width changes from 288px to 384px at 640px. Campaign and pledge rows remain stacked with fixed 20px outer and 16px inner padding. The farm-reference and goal strip stays horizontal.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
