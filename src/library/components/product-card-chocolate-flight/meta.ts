import type { ComponentMeta } from "../../types";

export default {
  slug: "product-card-chocolate-flight",
  name: "Origin chocolate flight",
  category: "product-card",
  tags: ["editorial", "light"],
  description:
    "An origin-chocolate tasting card with labeled cacao percentages and an editorial order footer. Use it for specialist confectionery collections.",
  preview: {
    kind: "element",
  },
  fonts: ["Fraunces:wght@400..700"],
  brief: {
    layout:
      "A 288px card, 336px from 640px, with 20px padding and a thin amber-900 border. Brand and issue number sit on opposite ends. Three 80px-high chocolate blocks form a grid with 8px gaps, followed by a 26px serif heading, description and a ruled price-and-link footer.",
    style:
      "Fraunces on amber-50, amber-950 ink and amber-900 body text. Slabs use amber-950, amber-900 and amber-800 fills with amber-50 percentage labels. Square corners and no shadows. Body is 12px at 20px line height; footer price is 20px.",
    states:
      "The order link underlines on hover and has a 2px amber-950 focus outline offset 4px. The chocolate illustration is hidden from assistive technology; the following sentence names all three origins and cacao percentages. No motion.",
    responsive:
      "Width changes from 288px to 336px at 640px. The three equal slabs grow horizontally; type, spacing and all other arrangement remain fixed.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta;
