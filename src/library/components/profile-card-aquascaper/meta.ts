import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-aquascaper',
  name: 'Freshwater aquascaper profile',
  category: 'profile-card',
  tags: ['minimal', 'dark'],
  description:
    'A restrained Mottle Aquatics freshwater aquascaper profile with an aquarium line drawing, planted-tank specialism and consultation link. Use it in aquarium design service directories.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px article with 20px padding and 8px radius. A small brand label, 24px name and 12px role sit above a 96px-high full-width aquarium line illustration. A service line has a 1px top rule, followed by a consultation link with 16px top margin.',
    style:
      'Default sans with slate-100 text on slate-950, slate-300 metadata and sky-200 links and plants. The aquarium frame uses slate-500, its waterline sky-200 at 40%. Name is medium weight with 32px line height; brand is 10px uppercase with 0.1em tracking; supporting text is 12px at 16px line height. No outer border or shadow.',
    states:
      'Links have a 2px sky-200 keyboard focus outline offset 2px, including forced-colors mode. On devices with hover, the consultation link turns white and underlines. No animation or transitions.',
    responsive:
      'Width steps from 288px to 320px at 640px. The aquarium illustration stays 96px high and stretches horizontally; padding and type stay fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
