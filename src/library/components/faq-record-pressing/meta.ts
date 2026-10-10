import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-record-pressing',
  name: 'Record-pressing production guide',
  category: 'faq',
  tags: ['gradient', 'dark'],
  description:
    'A record-pressing FAQ with a warm dark gradient, ruled production questions and a release-preparation note. Use it to explain vinyl orders and test-pressing approval.',
  preview: { kind: 'section' },
  fonts: ['Syne:wght@400;500;600;700'],
  brief: {
    layout:
      'A 1280px wrapper with 24px horizontal and 64px vertical padding. A full-width masthead precedes a 40px-gap production grid after 48px. The question column has three zero-gap ruled disclosures. A release-preparation aside aligns to the top with 24px padding. Questions have 20px vertical padding; answers have a 65ch maximum width and 24px bottom padding.',
    style:
      'Syne on a 120-degree gradient from #452516 at 0% through #1c1917 at 55% to #0c0a09 at 100%, with stone-950 fallback. Amber-50 heading and questions, amber-100 answers and aside copy. Borders are 1px amber-200 at 40%. Aside has stone-950 fill at 40% and a 20px radius. Heading 40px with 1.1 leading and -0.035em tracking. Introduction 16px with 1.7 leading, questions 17px semibold with 1.5 leading, answers 15px with 1.7 leading. Aside heading 24px semibold; its two 14px paragraphs have 1.7 leading and 16px top margins. No shadow.',
    states:
      'Native details disclose each answer independently, with the first answer open. Summary hover underlines only on hover-capable devices. Every summary has a 2px foreground-colour focus-visible outline offset 4px, including in forced-colors mode. The aria-hidden 20px plus rotates 45 degrees when open. No transitions, animation or JavaScript.',
    responsive:
      'Below 1024px the preparation note follows the questions with a 40px gap. Heading becomes 56px at 640px. From 1024px use 1.6fr and 0.7fr production columns and increase outer padding to 40px horizontal and 96px vertical. All text remains left aligned.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
