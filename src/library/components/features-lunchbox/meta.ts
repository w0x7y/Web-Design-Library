import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-lunchbox',
  name: 'School lunch compartments',
  category: 'features',
  tags: ['playful', 'light'],
  description:
    'A school meal section arranged like a divided lunchbox, with kitchen, produce and allergy benefits. Use it for food services that need a friendly but practical explanation.',
  preview: { kind: 'section' },
  fonts: ['Bricolage Grotesque:wght@400..700'],
  brief: {
    layout:
      '1280px container with 24px horizontal and 64px vertical padding. Copy and a lunchbox illustration have a 48px gap. The lunchbox is a 2px-bordered white tray with 12px padding and gaps, one large meal compartment and two smaller produce compartments.',
    style:
      'Bricolage Grotesque on rose-50, rose-950 ink and rose-900 body. The tray has 32px corners; compartments have 20px corners and orange-100, lime-100 and rose-200 fills. Main title 44px bold, 1.05 line height; compartment titles 24px bold; the meal count 48px.',
    states:
      'Menu link underlines on hover and has a 2px rose-950 focus outline offset 4px. All compartment information is readable text. Allergy note explicitly asks families to confirm needs before ordering. No animation.',
    responsive:
      'Single-column layout below 1024px. Tray compartments stack below 640px; above 640px the main compartment spans two rows beside the produce compartments. Title becomes 60px at 640px. Outer padding becomes 96px vertical and 32px horizontal at 1024px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
