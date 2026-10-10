import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-bike-repair',
  name: 'Bike repair service index',
  category: 'faq',
  tags: [
    'minimal',
    'light'
  ],
  description: 'A bike workshop FAQ with a starting-price note and a two-column service index. Use it for repair booking and workshop policies.',
  preview: {
    kind: 'section'
  },
  fonts: [
    'IBM Plex Sans:wght@400;500;600;700'
  ],
  brief: {
    layout: '1280px container with 24px/64px padding, 40px/96px at 1024px. Ruled masthead with 1.5fr text and 0.6fr price note. Four independent disclosures in a two-column grid with 64px column and 16px row gaps.',
    style: 'IBM Plex Sans, white canvas, emerald-950 ink and emerald-800 supporting copy. Emerald-900 masthead rule and emerald-200 question rules. No cards, radius or shadow. 40px/56px heading, 56px price, 17px questions and 15px answers.',
    states: 'Native details disclose each answer independently. The first answer is open. Summaries underline on hover on hover-capable devices, show a 2px current foreground outline offset 4px on keyboard focus, and rotate their decorative plus by 45 degrees when open. No animation or JavaScript.',
    responsive: 'Masthead price note moves below the heading under 1024px. Question index becomes one column below 768px. Heading grows to 56px at 640px.'
  },
  addedAt: '2026-10-10'
} satisfies ComponentMeta
