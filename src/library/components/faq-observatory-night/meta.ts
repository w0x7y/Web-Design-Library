import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-observatory-night',
  name: 'Observatory night guide',
  category: 'faq',
  tags: [
    'gradient',
    'dark'
  ],
  description: 'A warm dark observatory FAQ with weather questions and a narrow night-visit guide. Use it for scheduled evening experiences.',
  preview: {
    kind: 'section'
  },
  fonts: [
    'Syne:wght@400;500;600;700'
  ],
  brief: {
    layout: '1280px wrapper, 24px/64px padding, 40px/96px at 1024px. Full-width masthead then 1.6fr question column and 0.7fr night note, 40px apart. Ruled disclosures and a 24px-padded note.',
    style: 'Syne on a 120-degree gradient from #452516 at 0%, #1c1917 at 55%, to #0c0a09 at 100%, with stone-950 fallback. Amber-50 headings, amber-100 answers. Amber-200 borders at 40%, note stone-950 at 40% with 20px radius. Title 40px/56px, questions 17px and answers 15px.',
    states: 'Native details disclose each answer independently. The first answer is open. Summaries underline on hover on hover-capable devices, show a 2px current foreground outline offset 4px on keyboard focus, and rotate their decorative plus by 45 degrees when open. No animation or JavaScript.',
    responsive: 'Question column and note stack below 1024px. Heading increases to 56px at 640px. Content stays aligned left.'
  },
  addedAt: '2026-10-10'
} satisfies ComponentMeta
