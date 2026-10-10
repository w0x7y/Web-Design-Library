import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-midwifery-visits',
  name: "Midwifery practice visit schedule",
  category: 'faq',
  tags: ["editorial", "light"],
  description:
    "A midwifery-practice FAQ with a three-part appointment schedule and inset disclosures. Use it to explain first visits, birth partners and booking changes.",
  preview: { kind: 'section' },
  fonts: ['Fraunces:wght@400;500;600;700'],
  brief: {
    layout:
      "A 1280px container with 24px horizontal and 64px vertical padding. A masthead with a 32px gap precedes a semantic three-item definition-list schedule 40px below. The schedule has 24px gaps and vertical padding with top and bottom hairlines. Three zero-gap ruled disclosures sit 40px below; answers have a 65ch maximum width and 24px bottom padding.",
    style:
      "Fraunces on rose-50 paper with rose-950 ink, rose-900 answers and rose-300 rules. No radii or shadows. Uppercase 12px semibold labels with 0.12em tracking, 22px schedule values with an 8px top margin. Heading 40px with 1.1 leading and -0.035em tracking; introduction 16px with 1.7 leading. Questions 17px semibold with 1.5 leading and answers 15px with 1.7 leading.",
    states:
      "Native details disclose each answer independently, with the first answer open. Summary hover underlines only on hover-capable devices. Every summary has a 2px foreground-colour focus-visible outline offset 4px, including in forced-colors mode. The aria-hidden 20px plus rotates 45 degrees when open. No transitions, animation or JavaScript.",
    responsive:
      "Below 640px the schedule stacks; at 640px it uses three equal columns and the heading becomes 56px. Below 1024px the masthead stacks and questions align left. At 1024px the masthead uses 1.2fr and 1fr columns, questions gain a 25% left inset and outer padding becomes 40px horizontal and 96px vertical.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
