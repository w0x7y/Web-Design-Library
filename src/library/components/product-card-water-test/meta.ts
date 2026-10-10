import type { ComponentMeta } from "../../types";

export default {
  slug: 'product-card-water-test',
  name: 'Aquarium water test kit',
  category: 'product-card',
  tags: ['corporate', 'light'],
  description:
    'An aquarium test-kit card with color-vial artwork, named parameters and a compact purchase footer. Use it for aquatics suppliers and freshwater care shops.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px card, 336px from 640px, with 20px padding, 12px corners and a 1px slate-300 border. A brand and freshwater badge lead to a 20px title. A 96px test-vial drawing sits in a teal-50 panel, then a description, included-parameter line and price/action footer.',
    style:
      'Default system sans on white, slate-950 headings, slate-600 body copy and teal-800 actions. The vial panel has 8px corners. Body copy is 12px at 20px line height. Vials use teal, amber and salmon fills with slate boundaries; the measured parameters are also written in text.',
    states:
      'The shop link becomes teal-900 on hover, showing a 2px teal-800 keyboard outline offset 2px. Decorative test-vial artwork is aria-hidden; written parameter names avoid relying on liquid colors. No animation.',
    responsive:
      'Root changes from 288px to 336px at 640px. The illustration and content expand with it; the footer stays a horizontal price/action row.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
