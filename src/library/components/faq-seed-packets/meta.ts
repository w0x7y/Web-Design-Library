import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-seed-packets',
  name: 'Seed exchange packets',
  category: 'faq',
  tags: [
    'playful',
    'dark'
  ],
  description: 'A seed exchange FAQ arranged as two offset seed packets with independent disclosures. Use it for a community garden or seed library.',
  preview: {
    kind: 'section'
  },
  fonts: [
    'Bricolage Grotesque:wght@400;500;600;700'
  ],
  brief: {
    layout: '1280px wrapper with 24px/64px padding, 40px/96px at 1024px. Heading capped at 768px. Two question packets with 20px gap, 24px padding and a 48px offset on the second packet at 768px. Each packet holds two questions.',
    style: 'Bricolage Grotesque, green-950 surrounding canvas and green-50 title; light green-100 and orange-100 packets with green-950 text. Packet radii 24px, ruled uppercase labels 12px, heading 40px/56px, questions 17px, answers 15px.',
    states: 'Native details disclose each answer independently. The first answer is open. Summaries underline on hover on hover-capable devices, show a 2px current foreground outline offset 4px on keyboard focus, and rotate their decorative plus by 45 degrees when open. No animation or JavaScript. Packet summaries use a green-950 focus outline to contrast with the light packet fills.',
    responsive: 'Packets stack with no offset below 768px. Title rises from 40px to 56px at 640px.'
  },
  addedAt: '2026-10-10'
} satisfies ComponentMeta
