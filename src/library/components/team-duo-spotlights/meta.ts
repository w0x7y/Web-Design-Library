import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-duo-spotlights',
  name: 'Team — Two horizontal profile spotlights',
  category: 'team',
  tags: ['split', 'media', 'spacious'],
  description:
    'Two bordered horizontal portrait profiles share a short collaboration note beneath them.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow / Heading / Introduction                          │
│                                                          │
│┌──────────────────────────┐   ┌────────────────────────┐ │
││Image   Alex Rivera       │   │Image   Jamie Quinn     │ │
││        Role / Biography  │   │        Role / Biography│ │
││        [View profile]    │   │        [View profile]  │ │
│└──────────────────────────┘   └────────────────────────┘ │
│                                                          │
│Shared collaboration note                                 │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl section uses two equal spotlight columns from 1024px with 24px gaps. Cards have 24px padding and a 20px gap; each becomes a 96px portrait plus flexible copy from 640px. A shared note follows after 32px with a top border.',
    hierarchy:
      'Read the section heading, two names and roles, then their biographies and profile links. Limit the section heading to 8 words, roles to 4, biographies to 20 and shared note to 20.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'Cards stack below 1024px. Below 640px each portrait moves above its text; wider cards keep the 96px portrait beside the biography.',
    usage:
      'Use for co-leads, partners or two primary contacts. Pick a roster for larger groups. Variations: add email links, use two complementary disciplines, or replace the footer note with a shared responsibility list.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
