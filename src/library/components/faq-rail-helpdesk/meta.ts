import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-rail-helpdesk',
  name: 'Rail passenger helpdesk',
  category: 'faq',
  tags: [
    'brutalist',
    'corporate',
    'light'
  ],
  description: 'A bold yellow rail FAQ with a ticket-style masthead and a bordered answer sheet. Use it for passenger information on a transport site.',
  preview: {
    kind: 'section'
  },
  fonts: [
    'Archivo:wght@400;500;600;700'
  ],
  brief: {
    layout: '1280px container, 24px/64px padding increasing to 40px/96px at 1024px. A ticket header with service stamp precedes a zero-gap question sheet with 2px borders. Answers have 24px side padding and a 20% inset at 768px.',
    style: 'Archivo, yellow-300 background, yellow-50 sheet and neutral-950 ink. Square 2px borders, no shadows. 40px/56px heading, 17px semibold questions and 15px answers.',
    states: 'Native details disclose each answer independently. The first answer is open. Summaries underline on hover on hover-capable devices, show a 2px current foreground outline offset 4px on keyboard focus, and rotate their decorative plus by 45 degrees when open. No animation or JavaScript.',
    responsive: 'Header stamp stacks below 768px; the answer inset appears at 768px. Heading rises to 56px at 640px.'
  },
  addedAt: '2026-10-10'
} satisfies ComponentMeta
