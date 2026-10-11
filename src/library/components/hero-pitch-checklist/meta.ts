import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-pitch-checklist',
  name: 'Hero — Pitch beside a benefit checklist',
  category: 'hero',
  tags: ['asymmetric', 'list', 'spacious'],
  description:
    'A hero pairs the main pitch with a bordered benefit summary instead of a visual.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow                       Included in the experience  │
│┌──────────────────────────┐   ┌────────────────────────┐ │
││Headline for main outcome │   │What changes for you    │ │
││Lede                      │   │Check Benefit           │ │
││[Primary] [Secondary]     │   │Check Capability        │ │
│└──────────────────────────┘   │Check Assurance         │ │
│                               └────────────────────────┘ │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'Use a max-w-6xl grid with 24px side padding, 64px vertical padding and a 48px gap. At 1024px, divide it 3:2 and align the pitch and neutral-50 benefit panel centrally. The panel has a 1px border, 8px radius and 24px padding.',
    hierarchy:
      'The display headline leads, followed by the lede and two actions. The panel title introduces four check-mark benefits. Keep the headline under 10 words, each benefit under 10 and the closing note under 20.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'Below 1024px the panel follows the pitch. Headline sizes are 36px, 48px at 640px and 60px at 1024px. Actions wrap; benefits remain a single list.',
    usage:
      'Use for an offer whose benefits are more useful than imagery. Pick a media hero when a visual explains the offer. Variations: show three checks, replace the note with terms, or use the panel as a brief onboarding checklist.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
