import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-opera-evening',
  name: "Opera house evening guide",
  category: 'faq',
  tags: ["glass", "dark", "has-image"],
  description:
    "An opera-house FAQ over a red-curtain stage photograph with a frosted dark answer panel. Use it for first-time audience information and arrival planning.",
  preview: { kind: 'section' },
  fonts: ['DM Sans:wght@400;500;600;700'],
  brief: {
    layout:
      "A 1280px container with 24px horizontal and 64px vertical padding. A full-section stage photo sits behind an introduction and a glass answer panel in a 40px-gap grid. A performance note has a 480px maximum width, a top rule, 32px top margin and 20px top padding. The answer panel has 24px side and 8px vertical padding; answers have a 65ch maximum width and 24px bottom padding.",
    style:
      "DM Sans on slate-950 with a red-curtain stage photograph at 40% opacity. White heading and questions, slate-200 answers. Panel has slate-950 fill at 80%, 12px backdrop blur, a 24px radius and a 1px white border at 30%. Row borders are white at 20%; performance-note rule is white at 40%. Heading 40px with 1.1 leading and -0.035em tracking; introduction 16px with 1.7 leading, note 14px with 1.7 leading, questions 17px semibold with 1.5 leading and answers 15px with 1.7 leading. No shadow.",
    states:
      "Native details disclose each answer independently, with the first answer open. Summary hover underlines only on hover-capable devices. Every summary has a 2px foreground-colour focus-visible outline offset 4px, including in forced-colors mode. The aria-hidden 20px plus rotates 45 degrees when open. No transitions, animation or JavaScript.",
    responsive:
      "Below 1024px the introduction sits above the glass panel with a 40px gap. Heading becomes 56px at 640px. At 1024px use 0.8fr and 1.2fr columns with a 64px gap; outer padding becomes 40px horizontal and 96px vertical. The photo remains full-width and full-height with object-cover at every size.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
