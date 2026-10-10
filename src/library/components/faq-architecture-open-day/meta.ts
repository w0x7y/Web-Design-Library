import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-architecture-open-day',
  name: 'Architecture school open-day guide',
  category: 'faq',
  tags: ['editorial', 'dark', 'has-image'],
  description:
    'An architecture-school FAQ with a drafting photograph and large serif questions. Use it for prospective-student open days and studio visits.',
  preview: { kind: 'section' },
  fonts: ['Instrument Serif'],
  brief: {
    layout:
      'A 1280px wrapper with 24px horizontal and 64px vertical padding. A figure with a 16px-separated caption sits beside an introduction and three ruled disclosures in a 40px-gap grid. Questions start 40px below the introduction with 16px grid gaps and 20px vertical summary padding. Answers have a 65ch maximum width and 24px bottom padding. Photo is a full-width 4:3 crop on phones.',
    style:
      'Instrument Serif regular throughout, stone-900 canvas, stone-100 heading and questions, stone-300 eyebrow, answers and caption, with 1px stone-600 question rules. No radius or shadow. Heading 48px with 1.05 leading and balanced line breaks; introduction 16px with 1.7 leading. Eyebrow and caption 15px, eyebrow uppercase at 0.12em tracking. Questions 24px regular with 1.5 leading; answers 19px with 1.6 leading. A photograph shows an architect drawing a floor plan beside a wooden scale ruler.',
    states:
      'Native details disclose each answer independently, with the first answer open. Summary hover underlines only on hover-capable devices. Every summary has a 2px foreground-colour focus-visible outline offset 4px, including in forced-colors mode. The aria-hidden 20px plus rotates 45 degrees when open. No transitions, animation or JavaScript.',
    responsive:
      'Below 1024px the photo and information stack with a 40px gap. Heading becomes 72px at 640px. From 1024px use 0.8fr and 1.2fr columns with a 64px gap, switch the photo crop to 3:4 and increase outer padding to 40px horizontal and 96px vertical.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
