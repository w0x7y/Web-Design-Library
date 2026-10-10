import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-energy-switch',
  name: 'Energy switching steps',
  category: 'faq',
  tags: ['corporate', 'gradient', 'dark'],
  description:
    'An energy switching FAQ with a numbered process rail and dark teal answer panels. Use it for a utility onboarding or tariff page.',
  preview: { kind: 'section' },
  fonts: ['IBM Plex Sans:wght@400;500;600;700'],
  brief: {
    layout:
      '1280px container with 24px/64px padding, 40px/96px at 1024px. Broad masthead above a 0.7fr numbered process rail and a 1.3fr answer column, separated by 40px. Step rail has 24px left inset and gaps; disclosure cards 12px apart with 24px side padding.',
    style:
      'IBM Plex Sans, 145-degree gradient from #042f2e at 0% to #083344 at 100%, teal-950 fallback. Cyan-50 text and cyan-100 supporting text. Cards teal-900 at 60%, cyan-200 40% borders, 8px radius. Heading 40px/56px, steps 18px semibold, questions 17px and answers 15px.',
    states:
      'Native details disclose each answer independently. The first answer is open. Summaries underline on hover on hover-capable devices, show a 2px current foreground outline offset 4px on keyboard focus, and rotate their decorative plus by 45 degrees when open. No animation or JavaScript.',
    responsive:
      'Step rail stacks above questions below 1024px. Heading rises to 56px at 640px. Process and questions stay aligned left.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
