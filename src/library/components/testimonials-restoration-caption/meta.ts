import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-restoration-caption',
  name: 'Restoration contact sheet',
  category: 'testimonials',
  tags: ['minimal', 'light', 'has-image'],
  description:
    'A clean contact sheet of two client portraits alongside conservation accounts. Use it for specialist restoration and personal services.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      '1280px section with a title above two client accounts. At 768px each account pairs a 176px portrait with a flexible quotation, 40px apart, with a 32px gap between accounts. Portraits use a 4:5 crop. 64px vertical section padding, 96px at 1024px; gutters 24px, 40px at 640px.',
    style:
      'Default sans-serif. Stone-50 background, stone-900 ink, stone-600 captions and stone-200 dividers. 36px medium heading increasing to 48px at 640px; 24px quotes at 1.5 leading. Square portraits, no cards, radii or shadows.',
    states:
      'Links underline on hover on devices with hover. Every link has a 2px current-colour focus-visible outline offset 4px. No animation or automatic movement.',
    responsive:
      'Below 768px portraits and quotations stack within each account; portraits are 176px wide at all widths. At 768px each account becomes a 176px / flexible grid. Title and gutters grow at 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
