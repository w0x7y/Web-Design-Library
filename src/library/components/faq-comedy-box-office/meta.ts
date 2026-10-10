import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-comedy-box-office',
  name: "Comedy club box office",
  category: 'faq',
  tags: ["brutalist", "playful", "light"],
  description:
    "A yellow comedy-club FAQ with a boxed show-night masthead and a ruled answer sheet. Use it for ticketing, seating and access information.",
  preview: { kind: 'section' },
  fonts: ['Archivo:wght@400;500;600;700'],
  brief: {
    layout:
      "A 1280px container with 24px horizontal and 64px vertical padding. A 24px-padded boxed masthead has a 24px grid gap and a 16px-padded box-office stamp. A zero-gap disclosure sheet sits 32px below. Questions have 24px side and 20px vertical padding; answers have 24px side and bottom padding and a 65ch maximum width.",
    style:
      "Archivo with yellow-300 canvas, yellow-50 answer sheet and neutral-950 ink. Square 2px neutral-950 borders with no shadows. Uppercase 12px semibold eyebrow at 0.12em tracking. Heading 40px with 1.1 leading and -0.035em tracking; introduction 16px with 1.7 leading, questions 17px semibold with 1.5 leading and answers 15px with 1.7 leading. Box-office stamp is 14px bold uppercase.",
    states:
      "Native details disclose each answer independently, with the first answer open. Summary hover underlines only on hover-capable devices. Every summary has a 2px foreground-colour focus-visible outline offset 4px, including in forced-colors mode. The aria-hidden 20px plus rotates 45 degrees when open. No transitions, animation or JavaScript.",
    responsive:
      "Below 768px the stamp sits below the header and answers align left. At 640px the heading becomes 56px; at 768px the masthead uses 1fr auto columns aligned at the bottom and answers gain a 20% left inset. At 1024px outer padding becomes 40px horizontal and 96px vertical.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
