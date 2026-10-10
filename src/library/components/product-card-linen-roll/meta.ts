import type { ComponentMeta } from "../../types";

export default {
  slug: "product-card-linen-roll",
  name: "Cut-length linen",
  category: "product-card",
  tags: ["editorial", "dark"],
  description:
    "A fabric-by-length card with a woven swatch illustration and native cut-length radios. Use it for textile merchants and fabric catalogs.",
  preview: {
    kind: "element",
  },
  fonts: ["Newsreader:wght@400..700"],
  brief: {
    layout:
      "A 288px card, 352px from 640px, laid out as a 56px-wide rust swatch rail beside a content column with 20px padding. A 10px brand, 32px serif title, 12px fabric notes, radio fieldset and 20px price precede an underlined order link. The swatch runs the full height and has a decorative weave grid.",
    style:
      "Newsreader on stone-950 with orange-50 text and stone-300 secondary text, no border, radius or shadow. The rail is orange-800 with an orange-200 fine grid. Heading has 1.1 leading. Native length radios use currentColor as the accent; option labels are 14px. No photos.",
    states:
      "Native radios change their checked indication without JavaScript and each shows a 2px orange-50 focus outline offset 2px. The order link becomes orange-200 on hover and has the same outline. The swatch is aria-hidden; color is named in the description.",
    responsive:
      "Width is 288px below 640px and 352px above. The 56px fabric rail stays fixed; the content column grows, retaining its stacked order.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta;
