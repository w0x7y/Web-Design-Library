import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-zine-fair-tables',
  name: "Zine fair table conversation",
  category: 'faq',
  tags: ["playful", "light"],
  description:
    "A zine-fair FAQ with offset conversation bubbles and an exhibitor setup note. Use it to explain table bookings, sharing and access.",
  preview: { kind: 'section' },
  fonts: ['Familjen Grotesk:wght@400;500;600;700'],
  brief: {
    layout:
      "A 1280px container with 24px horizontal and 64px vertical padding. Masthead and a 24px-padded setup note use a 32px grid gap. Four conversation disclosures sit 40px below with 20px gaps and 24px side padding. Questions have 20px vertical padding; answers have a 65ch maximum width and 24px bottom padding.",
    style:
      "Familjen Grotesk, pink-100 canvas, red-950 ink, alternating white and red-200 bubbles with 1px red-300 borders. Bubble radii are 24px except the 4px lower-left corner. Setup note is red-950 with pink-100 text and a 16px radius. No shadows. Heading 40px with 1.1 leading and -0.035em tracking; introduction 16px with 1.7 leading. Note heading 18px semibold, note copy 14px with 1.7 leading. Questions 17px semibold with 1.5 leading and answers 15px with 1.7 leading.",
    states:
      "Native details disclose each answer independently, with the first answer open. Summary hover underlines only on hover-capable devices. Every summary has a 2px foreground-colour focus-visible outline offset 4px, including in forced-colors mode. The aria-hidden 20px plus rotates 45 degrees when open. No transitions, animation or JavaScript.",
    responsive:
      "Below 768px the setup note follows the header and all bubbles use the full width. Heading becomes 56px at 640px. From 768px the masthead uses 1.3fr and 0.7fr columns aligned at the bottom; odd bubbles have a 20% right inset, even bubbles a 20% left inset. From 1024px outer padding becomes 40px horizontal and 96px vertical.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
