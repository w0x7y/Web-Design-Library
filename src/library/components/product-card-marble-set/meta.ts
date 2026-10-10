import type { ComponentMeta } from "../../types";

export default {
  slug: "product-card-marble-set",
  name: "Collector glass marbles",
  category: "product-card",
  tags: ["playful", "brutalist", "light"],
  description:
    "A collector marble-set card with glass artwork, an oversized piece count and a hard-shadow action. Use it for hobby stores and collectible toy releases.",
  preview: {
    kind: "element",
  },
  fonts: ["Syne:wght@400..700"],
  brief: {
    layout:
      "A 288px card, 336px from 640px, with a 2px black border. Pink-200 header uses 16px padding and aligns a 48px count with a small set label. A 96px marble illustration follows on pink-50. The 16px body holds a 20px title, 12px description and a 40px full-width purchase action.",
    style:
      "Syne, black text, pink-200 and pink-50 panels. Glass marbles use blue, cyan and pink inline SVG gradients with dark outlines. Square corners. The blue-800 action has white text, a 2px black border and 3px hard black shadow.",
    states:
      "The purchase link changes to blue-900 on hover and shows a 2px black focus outline offset 4px. Decorative marble artwork is aria-hidden, with the count and materials spelled out in the product copy. No motion.",
    responsive:
      "Root changes from 288px to 336px at 640px. Header and purchase label stay in horizontal rows. SVG preserves its viewBox and grows within the available width.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta;
