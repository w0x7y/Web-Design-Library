import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-hazard-mapper',
  name: 'Volcanic hazard mapper profile',
  category: 'profile-card',
  tags: ['glass', 'gradient', 'dark'],
  description:
    'A warm glass profile for a Cindertrace volcanic hazard mapper, layered over topographic contour lines. Use it in geospatial and hazard-assessment expert directories.',
  preview: { kind: 'element' },
  fonts: ['Space Grotesk:wght@400..700'],
  brief: {
    layout:
      'A 288px-wide article with 20px padding, 20px radius and full-size decorative contour SVG behind its content. A top sector row and 56px reserved map view sit above an inset profile panel with 16px padding. The panel holds a 24px name, 12px role, two-column location facts and a survey link.',
    style:
      'Space Grotesk with amber-100 text. Root gradient runs to bottom right in oklab from orange-950 via orange-900 to orange-800. Contour lines use amber-200 at 25% opacity. Glass panel is orange-950 at 70%, with a 1px amber-200 border at 30%, 12px radius and 12px backdrop blur. Name is medium weight, secondary labels amber-200. No shadows.',
    states:
      'Links have a 2px amber-200 keyboard focus outline offset 2px, including forced-colors mode. On devices with hover, the survey link underlines. No animation or transitions.',
    responsive:
      'Card steps from 288px to 336px wide at 640px; padding, map reserve and all type sizes stay fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
