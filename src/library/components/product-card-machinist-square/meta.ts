import type { ComponentMeta } from "../../types";

export default {
  slug: "product-card-machinist-square",
  name: "Precision machinist square",
  category: "product-card",
  tags: ["brutalist", "dark"],
  description:
    "A technical machinist-square card with a dimension drawing and numbered specifications. Use it in precision instrument and metalworking catalogs.",
  preview: {
    kind: "element",
  },
  fonts: ["DM Mono:wght@400;500"],
  brief: {
    layout:
      "A 288px card, 352px from 640px, with a 1px lime-300 border. Header has 12px padding and a lower rule. A 16px-padded body contains a 96px dimension drawing, an 18px title and two 12px numbered specification rows. Full-width lime purchase strip ends the card.",
    style:
      "DM Mono on black with lime-300 text, white product title and zinc-300 specification values. Square edges, no shadow. The square drawing is zinc gray with lime dimension ticks. Heading uses 24px leading; all technical figures are tabular.",
    states:
      "The full-width order link changes from lime-300 to lime-200 on hover and has a 2px lime-300 outline offset 2px. The drawing is aria-hidden because size and material are written in the specification rows. No animation.",
    responsive:
      "288px wide below 640px, 352px from 640px. The drawing expands horizontally while maintaining its viewBox. Two-column spec rows and purchase row remain intact.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta;
