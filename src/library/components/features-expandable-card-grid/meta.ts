import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-expandable-card-grid',
  name: 'Features — Expandable capability cards',
  category: 'features',
  tags: ['grid', 'list', 'compact'],
  description:
    'Three native disclosure cards reveal a short explanation, included details and a capability link.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow / Heading / Introduction                          │
│                                                          │
│┌─────────────────┐ ┌────────────────┐ ┌────────────────┐ │
││Main capability ^│ │Workflow v      │ │Useful detail v │ │
││Description      │ └────────────────┘ └────────────────┘ │
││Check Detail     │                                       │
││[Explore]        │                                       │
│└─────────────────┘                                       │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl section places an items-start grid 40px below its introduction. Three equal columns appear at 768px with 24px gaps. Each disclosure card has a 1px border, 8px radius and 24px padding; expanded content follows after 20px.',
    hierarchy:
      'The heading introduces three capability summaries. Expanded cards reveal one short explanation, two details and a link. Limit titles to 4 words, explanations to 20 and details to 5.',
    states:
      'Each summary toggles its native details card independently; the first card starts open. Summaries and destination links show a 2px keyboard outline. Links mute on hover; opening a card reveals its explanation and details without animation.',
    responsive:
      'Cards stack below 768px and retain independent native open states. Their height grows naturally with content, without clipping other cards.',
    usage:
      'Use for progressive explanation of several independent capabilities. Pick a flat grid when every detail should be visible. Variations: start all cards closed, show two cards, or replace checks with a short ordered workflow.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
