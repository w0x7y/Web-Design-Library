import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-climbing-checklist',
  name: 'Climbing first-visit checklist',
  category: 'faq',
  tags: [
    'brutalist',
    'dark'
  ],
  description: 'A climbing gym FAQ with oversized orange type and numbered outline panels. Use it for first-visit preparation and equipment questions.',
  preview: {
    kind: 'section'
  },
  fonts: [
    'Space Grotesk:wght@400;500;600;700'
  ],
  brief: {
    layout: '1280px wrapper with 24px/64px padding, 40px/96px at 1024px. A 0.9fr intro beside a 1.1fr checklist with 64px desktop gap. Four 2px orange outline disclosures, 20px horizontal inset and 16px gaps.',
    style: 'Space Grotesk, neutral-950 canvas, orange-100 text, orange-400 borders and heading. Square panels, no shadow. Heading bold 52px/80px, 0.95 leading, -0.05em tracking. 12px sequence labels, 17px questions, 15px answers.',
    states: 'Native details disclose each answer independently. The first answer is open. Summaries underline on hover on hover-capable devices, show a 2px current foreground outline offset 4px on keyboard focus, and rotate their decorative plus by 45 degrees when open. No animation or JavaScript.',
    responsive: 'Columns stack below 1024px; heading increases to 80px at 640px. All checklist panels stay full width and wrap their question text.'
  },
  addedAt: '2026-10-10'
} satisfies ComponentMeta
