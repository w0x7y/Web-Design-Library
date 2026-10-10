import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-kiln-timetable',
  name: 'Ceramics firing timetable',
  category: 'faq',
  tags: [
    'editorial',
    'light'
  ],
  description: 'A pottery studio FAQ with a working-week timetable and inset disclosures. Use it for shared workshops with drop-off and collection routines.',
  preview: {
    kind: 'section'
  },
  fonts: [
    'Fraunces:wght@400;500;600;700'
  ],
  brief: {
    layout: '1280px container, 24px horizontal and 64px vertical padding, 40px and 96px at 1024px. Split masthead, a three-part definition-list timetable, then three ruled disclosures indented by 25% on desktop.',
    style: 'Fraunces, rose-50 paper, rose-950 text and rose-900 answers. Rose-300 hairlines, no radius or shadow. Heading 40px then 56px at 640px, 1.1 leading; questions 17px semibold, answers 15px with 1.7 leading.',
    states: 'Native details disclose each answer independently. The first answer is open. Summaries underline on hover on hover-capable devices, show a 2px current foreground outline offset 4px on keyboard focus, and rotate their decorative plus by 45 degrees when open. No animation or JavaScript.',
    responsive: 'The masthead stacks below 1024px; timetable stacks below 640px. Questions lose their 25% inset below 1024px.'
  },
  addedAt: '2026-10-10'
} satisfies ComponentMeta
