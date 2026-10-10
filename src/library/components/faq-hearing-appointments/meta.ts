import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-hearing-appointments',
  name: "Hearing clinic appointment guide",
  category: 'faq',
  tags: ["minimal", "light"],
  description:
    "A hearing-clinic FAQ with a prominent appointment length and a two-column question index. Use it to explain booking, access and what to bring.",
  preview: { kind: 'section' },
  fonts: ['IBM Plex Sans:wght@400;500;600;700'],
  brief: {
    layout:
      "A 1280px container with 24px horizontal and 64px vertical padding. A masthead with a 32px grid gap and 40px bottom padding places the heading beside a 60-minute appointment note. Four independent ruled disclosures start 40px below in a grid with 64px column gaps and 16px row gaps. Questions have 20px vertical padding; 65ch answers have 24px bottom padding.",
    style:
      "IBM Plex Sans on white with emerald-950 ink, emerald-800 supporting copy, an emerald-900 masthead rule and emerald-200 question rules. No cards, radii or shadows. Heading 40px with 1.1 leading and -0.035em tracking. Appointment duration 56px with 1.0 leading and -0.04em tracking; its note is 14px with 1.7 leading. Questions 17px semibold with 1.5 leading, answers 15px with 1.7 leading.",
    states:
      "Native details disclose each answer independently, with the first answer open. Summary hover underlines only on hover-capable devices. Every summary has a 2px foreground-colour focus-visible outline offset 4px, including in forced-colors mode. The aria-hidden 20px plus rotates 45 degrees when open. No transitions, animation or JavaScript.",
    responsive:
      "Below 768px the questions form one column; from 768px they use two equal columns. Below 1024px the duration note follows the header; from 1024px the masthead uses 1.5fr and 0.6fr columns aligned at the bottom, and outer padding becomes 40px horizontal and 96px vertical. Heading grows to 56px at 640px.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
