import type { ComponentMeta } from "../../types";

export default {
  slug: "product-card-gong-mallet",
  name: "Soft felt gong mallet",
  category: "product-card",
  tags: ["minimal", "dark"],
  description:
    "A percussion-mallet card with an angled equipment illustration and a compact purchase row. Use it for instrument makers and orchestral supply catalogs.",
  preview: {
    kind: "element",
  },
  fonts: ["Space Grotesk:wght@400..700"],
  brief: {
    layout:
      "A 288px card, 352px from 640px, with 24px padding. Brand and model align across the top. A 112px-high full-width decorative mallet drawing sits above the 20px title and 12px specification copy. A price and text action share the final row.",
    style:
      "Space Grotesk on neutral-950, neutral-100 primary text and neutral-300 secondary text. Square edges, no border or shadow. The diagonal maple shaft and ivory felt head occupy the main illustration. Rate is 24px; action is 12px semibold.",
    states:
      "The purchase link underlines on hover and shows a 2px neutral-100 outline offset 4px on keyboard focus. The decorative drawing is hidden from screen readers; the heading and copy name the mallet, shaft and head material. No motion.",
    responsive:
      "Root grows from 288px to 352px at 640px. Illustration spans the available body width with its viewBox preserved. All content stays stacked apart from the top and bottom rows.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta;
