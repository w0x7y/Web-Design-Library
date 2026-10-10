import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-museum-visit',
  name: 'Museum visitor guide',
  category: 'faq',
  tags: [
    'editorial',
    'dark',
    'has-image'
  ],
  description: 'A museum FAQ with architectural photography and large serif questions. Use it for a cultural venue with ticketing and access information.',
  preview: {
    kind: 'section'
  },
  fonts: [
    'Instrument Serif'
  ],
  brief: {
    layout: '1280px wrapper, 24px/64px padding, 40px/96px at 1024px. Architecture figure beside heading and three ruled visitor disclosures, 40px gap then 64px. Photo 4:3 on phones and 3:4 at 1024px.',
    style: 'Instrument Serif regular throughout. Stone-900 canvas, stone-100 headings, stone-300 answers and caption, stone-600 top rules. No radius or shadow. Heading 48px/72px with 1.05 leading, questions 24px, answers 19px with 1.6 leading.',
    states: 'Native details disclose each answer independently. The first answer is open. Summaries underline on hover on hover-capable devices, show a 2px current foreground outline offset 4px on keyboard focus, and rotate their decorative plus by 45 degrees when open. No animation or JavaScript.',
    responsive: 'Photo and information stack below 1024px. Heading increases to 72px at 640px. Photo changes from 4:3 to 3:4 at 1024px.'
  },
  addedAt: '2026-10-10'
} satisfies ComponentMeta
