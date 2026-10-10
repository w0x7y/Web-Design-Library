import type { ComponentMeta } from '../../types'

export default {
  slug: "footer-wedding-contact",
  name: "Wedding planner invitation footer",
  category: "footer",
  tags: ["editorial", "light", "has-image"],
  description:
    "A wedding planner footer with a ceremony photograph, a large serif invitation and consultation hours. Use it for independent wedding planning studios.",
  preview: { kind: "section" },
  fonts: ["Instrument Serif:ital@0;1"],
  brief: {
    layout:
      "A centred 1280px container with 48px vertical and 24px side padding. A wrapping studio masthead sits above a three-region invitation row with 32px gaps: 144 by 176px wedding-photo crop and caption, large invitation with email link, and consultation-hours region. A wrapping bottom link row has a 1px top border.",
    style:
      "Instrument Serif in regular and italic throughout; white background, neutral-950 ink, neutral-600 photo caption, red-800 italic email and regular booking links, neutral-300 rules. Heading is 44px with 1.0 line height; brand 32px with -0.05em tracking; email link 24px italic. Hours 18px with 1.5 line height, navigation 14px, caption and masthead note 12px. Image has square corners and no shadow.",
    states:
      "Links underline on hover on devices that support hover. Every link has a 2px currentColor keyboard focus outline offset 4px, which remains visible in forced-colors mode. No animation.",
    responsive:
      "Below 640px heading is 44px; from 640px it is 72px. Regions stack below 768px. At 768px photo and invitation form 144px/flexible columns and consultation hours span both. At 1024px hours get a 256px third column and outer side padding grows to 32px.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
