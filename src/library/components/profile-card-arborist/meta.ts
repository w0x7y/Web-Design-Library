import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-arborist',
  name: 'Consulting arborist profile',
  category: 'profile-card',
  tags: ['playful', 'light'],
  description: 'A Crown & Root arborist profile with an illustrated tree, local survey specialism and a named booking link. Use it in tree-care service directories.',
  preview: { kind: 'element' },
  fonts: ['Bricolage Grotesque:wght@400..800'],
  brief: {
    layout:
      '288px article with 24px corners and 20px padding. A 12px brand line precedes an identity row by 20px, with the name and location left and a 72px-wide, 112px-tall tree drawing right, separated by 16px. A two-line 12px bio follows 16px below. Survey link follows 24px below, 40px tall with 16px horizontal padding and asymmetrical 16px corners.',
    style:
      'Bricolage Grotesque on lime-100 with green-950 ink. Name 28px bold at 1.1 leading; role 12px semibold green-800, brand 12px bold and bio 12px at 20px leading. Tree has green-950 linework, lime-200 canopy and green-700 trunk. Survey action is green-700 with white 12px semibold text. No borders or shadows.',
    states:
      'Survey link is named for Mara Ellis, darkens to green-800 on hover-capable devices and shows a 2px green-950 keyboard outline offset 2px, including forced colors. Tree and arrow are decorative. No animation or transitions.',
    responsive:
      'Width is 288px below 640px and 320px from 640px. Illustration, type sizes, spacing and 20px padding remain unchanged.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
