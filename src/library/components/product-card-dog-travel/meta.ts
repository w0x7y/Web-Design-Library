import type { ComponentMeta } from "../../types";

export default {
  slug: "product-card-dog-travel",
  name: "Fold-up dog travel mat",
  category: "product-card",
  tags: ["playful", "light", "has-image"],
  description:
    "A pet travel-mat card with a companion portrait, native size selector and clear pack-away dimensions. Use it in pet accessories stores.",
  preview: {
    kind: "element",
  },
  fonts: ["Bricolage Grotesque:wght@400..700"],
  brief: {
    layout:
      "A 288px card, 336px from 640px, with 20px padding and 24px radius. Brand is followed by a two-column header with a 96px circular dog portrait and a stacked 26px product heading. Copy, a full-width native size select and a 40px purchase row follow.",
    style:
      "Bricolage Grotesque, rose-50 background, rose-950 ink and rose-800 secondary text. Portrait has a 2px rose-950 border. The select is white with an 8px radius and rose-800 border. Purchase link is rose-950 with white text, 12px corners. Price is 24px.",
    states:
      "The named size select retains native keyboard behavior. Both controls show a 2px rose-950 focus outline offset 2px; the purchase link changes to rose-800 on hover. No motion.",
    responsive:
      "Root width changes from 288px to 336px at 640px. Header remains a 96px photo plus flexible text column; everything beneath remains stacked.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta;
