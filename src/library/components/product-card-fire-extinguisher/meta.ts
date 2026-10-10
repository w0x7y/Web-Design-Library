import type { ComponentMeta } from "../../types";

export default {
  slug: "product-card-fire-extinguisher",
  name: "Compact fire extinguisher",
  category: "product-card",
  tags: ["brutalist", "light"],
  description:
    "A fire-safety product card with a compact extinguisher drawing, capacity and installation details. Use it for workplace safety catalogs.",
  preview: {
    kind: "element",
  },
  fonts: ["Archivo:wght@400..700"],
  brief: {
    layout:
      "A 288px card, 336px from 640px, with a 2px black boundary. A 12px-padded orange-400 header holds brand and product code. The 16px-padded white body places a 96px extinguisher drawing beside a 48px capacity figure. Title, two-column specification band and black 40px purchase link follow.",
    style:
      "Archivo with black text on white and orange-400. Heavy square boundaries and no shadows or radii. Heading is 20px bold; specification labels are 10px, values 12px. Extinguisher has black line work and an orange cylinder.",
    states:
      "The purchase link becomes orange-400 with black type on hover and shows a 2px black focus outline offset 2px. Decorative SVG is aria-hidden, with the product name provided as text. No animation.",
    responsive:
      "288px wide below 640px, 336px above. The capacity and drawing remain side by side; the specification band remains two equal columns.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta;
