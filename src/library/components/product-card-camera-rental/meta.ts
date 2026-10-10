import type { ComponentMeta } from "../../types";

export default {
  slug: 'product-card-camera-rental',
  name: 'Weekend camera rental',
  category: 'product-card',
  tags: ['minimal', 'light', 'has-image'],
  description:
    'A camera-hire card with a portrait equipment photo, weekend rate and collection details. Use it for photography rental catalogs.',
  preview: { kind: 'element' },
  fonts: ['Manrope:wght@400..700'],
  brief: {
    layout:
      'A 288px card, 352px from 640px, with 20px padding. A 144px photo sits beside a 64px-wide vertical information column. Brand above; 20px title and description below; a bordered footer pairs a daily rate with a reservation link.',
    style:
      'Manrope on white with zinc-950 headings, zinc-600 secondary copy and zinc-200 rules. Photo has 8px corners; the card has no shadow or outside border. Small labels are 10px uppercase, descriptive copy 12px, and the rate 24px.',
    states:
      'The reservation link underlines on hover and shows a 2px zinc-950 keyboard focus outline offset 4px. No animation. The photo has an equipment description.',
    responsive:
      'Below 640px the root is 288px wide. From 640px it is 352px. All spacing and the photo height remain fixed; the photo column takes the extra width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
