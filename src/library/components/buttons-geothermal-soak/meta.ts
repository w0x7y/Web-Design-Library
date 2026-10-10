import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-geothermal-soak',
  name: 'Buttons — Geothermal soak',
  category: 'buttons',
  tags: ['playful', 'dark'],
  description:
    'Interlocking soak-booking and towel-set buttons for Fumarole geothermal spa, with a separate bathing-guide action.',
  preview: { kind: 'element' },
  fonts: ['Familjen Grotesk:wght@400;500;600;700'],
  brief: {
    layout:
      '288px panel with 20px padding. A 12px spa masthead precedes a 30px title by 16px, then a 12px date hint after 4px. Booking row follows 20px below; two 80px blocks use 3:2 flex proportions, with towel block offset down 20px. Both stack an 18px label and 12px note with 4px gap. Full-width bathing-guide action follows after 20px with a bottom rule and 8px bottom padding.',
    style:
      'Familjen Grotesk on emerald-950 with 16px card corners, amber-100 text and emerald-200 date hint. Soak block is amber-200, towel block pink-200, both with emerald-950 text and complementary 24px corner radii forming an interlocking shape. Guide has a 1px emerald-300 bottom rule and 14px text. No shadow.',
    states:
      'On hover-capable devices soak fills amber-100, towels fill pink-100 and guide text turns white. Every control shows a 2px amber-200 keyboard outline offset 2px. Towel action explicitly names the evening soak. No animation.',
    responsive:
      '288px below 640px and 368px from 640px. Booking blocks grow horizontally in a 3:2 ratio; heights and 20px stagger stay fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
