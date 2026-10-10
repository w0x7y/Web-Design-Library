import type { ComponentMeta } from "../../types";

export default {
  slug: 'product-card-hologram-film',
  name: 'Iridescent window film',
  category: 'product-card',
  tags: ['gradient', 'dark'],
  description:
    'An iridescent architectural-film card with layered translucent sheet artwork and roll dimensions. Use it for window treatments and interior material samples.',
  preview: { kind: 'element' },
  fonts: ['Familjen Grotesk:wght@400..700'],
  brief: {
    layout:
      'A 288px card, 336px from 640px, with 16px padding, 16px corners and a thin emerald-700 border. Header pairs brand with a film-series identifier. A 112px layered-sheet drawing precedes a 20px heading, description, roll-size line and horizontal price/order row.',
    style:
      'Familjen Grotesk on emerald-950 with emerald-50 text and emerald-200 secondary type. Artwork overlaps two diagonal rounded film sheets; inline SVG gradients move through pale gold, emerald and coral with transparent stops. The action is emerald-100 with emerald-950 text, 8px corners; price is 24px.',
    states:
      'The sample-order link becomes white on hover and shows a 2px emerald-100 focus outline offset 2px. The gradient drawing is decorative; the copy names the shifting gold-and-green finish. No animation or backdrop blur.',
    responsive:
      'Root changes from 288px to 336px at 640px. SVG occupies the content width and preserves its viewBox. All content remains stacked with a horizontal purchase footer.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
