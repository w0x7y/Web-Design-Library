import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-care-home-welcome',
  name: "Care home family welcome guide",
  category: 'faq',
  tags: ["corporate", "minimal", "light"],
  description:
    "A care-home FAQ with a family-information rail and a white answer panel. Use it to explain visits, moving in and day-to-day contact.",
  preview: { kind: 'section' },
  fonts: ['Manrope:wght@400;500;600;700'],
  brief: {
    layout:
      "A 1280px wrapper with 24px horizontal and 64px vertical padding. A wrapping top line uses 16px gaps and a bottom rule with 24px bottom padding. A title sits 16px below, followed after 40px by a 32px-gap grid containing an information rail and a white disclosure panel. Rail has 20px left padding; panel has 24px side padding and zero row gaps. Answers have a 65ch maximum width and 24px bottom padding.",
    style:
      "Manrope on slate-100 with slate-950 ink. White panel has a 1px slate-300 border and 8px radius, with slate-200 row rules. Scope copy is slate-600; the rail has a 2px teal-700 left border. Top-line audience label is 14px medium teal-800. Title 40px with 1.1 leading and -0.035em tracking, rail heading 18px semibold and rail copy 14px with 1.7 leading. Questions 17px semibold with 1.5 leading and answers 15px with 1.7 leading. No shadow.",
    states:
      "Native details disclose each answer independently, with the first answer open. Summary hover underlines only on hover-capable devices. Every summary has a 2px foreground-colour focus-visible outline offset 4px, including in forced-colors mode. The aria-hidden 20px plus rotates 45 degrees when open. No transitions, animation or JavaScript.",
    responsive:
      "Below 1024px the information rail sits above the answer panel with a 32px gap. The top line wraps naturally on phones. At 640px the title becomes 56px. From 1024px the rail takes a 256px column beside the remaining-width panel and outer padding becomes 40px horizontal and 96px vertical.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
