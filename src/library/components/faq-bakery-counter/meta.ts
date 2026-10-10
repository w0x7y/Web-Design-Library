import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-bakery-counter',
  name: 'Bakery counter conversation',
  category: 'faq',
  tags: [
    'playful',
    'light'
  ],
  description: 'A co-op bakery FAQ with offset conversation bubbles and a collection-hours note. Use it to explain subscriptions, allergies and collecting an order.',
  preview: {
    kind: 'section'
  },
  fonts: [
    'Familjen Grotesk:wght@400;500;600;700'
  ],
  brief: {
    layout: '1280px container with 24px/64px padding, 40px/96px at 1024px. Masthead beside opening-hours note. Four conversation disclosures with 20px gaps and 24px side padding, alternating 20% left and right insets at 768px.',
    style: 'Familjen Grotesk, pink-100 canvas, red-950 ink, white and red-200 alternating bubbles with red-300 borders. Bubbles have 24px radii except the 4px lower-left corner. Red-950 hours note with 16px radius. Heading 40px/56px, questions 17px and answers 15px.',
    states: 'Native details disclose each answer independently. The first answer is open. Summaries underline on hover on hover-capable devices, show a 2px current foreground outline offset 4px on keyboard focus, and rotate their decorative plus by 45 degrees when open. No animation or JavaScript.',
    responsive: 'Masthead and hours note stack below 768px; bubbles lose their offsets below 768px. Heading steps to 56px at 640px.'
  },
  addedAt: '2026-10-10'
} satisfies ComponentMeta
