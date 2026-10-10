import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-indoor-surveyor',
  name: 'Indoor surveyor glass profile',
  category: 'profile-card',
  tags: ['glass', 'gradient', 'light'],
  description:
    'A light frosted profile for a Vela Cartography indoor navigation surveyor, with a floorplan backdrop and current site assignment. Use it in spatial mapping and building-navigation directories.',
  preview: { kind: 'element' },
  fonts: ['DM Sans:wght@400..700'],
  brief: {
    layout:
      'A 288px-wide article with 16px padding and 16px radius. A 10px brand row and 72px map reserve precede a frosted panel. An absolute 192px-high floorplan starts 32px below the top and continues behind that panel. Panel padding is 16px. The panel contains a 24px name, 12px role, a ruled current-site block and a survey credentials link 16px below.',
    style:
      'DM Sans and rose-950 text over a bottom-left to top-right oklab gradient from rose-200 to orange-100. Decorative floorplan lines use rose-950 at 35%. The white panel is 65% opaque with a 1px white border at 80%, 12px radius and 8px backdrop blur. Name is semibold; body is 12px at 20px line height. Current-site divider is rose-950 at 20%. No shadows.',
    states:
      'Links have a 2px rose-950 keyboard focus outline offset 2px, including forced-colors mode. On devices with hover, the survey credentials link underlines. No animation or transitions.',
    responsive:
      'The article grows from 288px to 336px at 640px. Floorplan stretches with the available width; all padding and type sizes stay fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
