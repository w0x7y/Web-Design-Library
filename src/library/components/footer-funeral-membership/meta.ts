import type { ComponentMeta } from '../../types'

export default {
  slug: "footer-funeral-membership",
  name: "Funeral co-operative membership footer",
  category: "footer",
  tags: ["editorial", "minimal", "light"],
  description:
    "A funeral co-operative footer with a member count and three clear routes to arranging a funeral, planning ahead or asking for help. Use it for community-owned funeral services.",
  preview: { kind: "section" },
  fonts: ["Newsreader:wght@400..700"],
  brief: {
    layout:
      "A centred 1280px container with 48px vertical and 24px side padding. Co-operative identity and an 80px member count sit beside three ruled navigation entries with a 40px gap. Entries have 20px vertical padding, a 12px index, 24px link and 15px supporting sentence. An 18px member-ownership note and wrapping 12px copyright row close the footer.",
    style:
      "Newsreader throughout, green-950 ink on green-50. Green-900 rules, 30% opacity for dividers; no radius or shadow. 32px brand, 80px count with -0.05em tracking, 18px collection note, 12px semibold uppercase indexes with 0.12em tracking.",
    states:
      "Links underline on hover on devices that support hover. Every link has a 2px currentColor keyboard focus outline offset 4px, which remains visible in forced-colors mode. No animation.",
    responsive:
      "Below 640px each index sits above its link. At 640px entries become a 112px index column and remaining text. At 1024px identity/register become 1:2 columns and side padding grows to 32px.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
