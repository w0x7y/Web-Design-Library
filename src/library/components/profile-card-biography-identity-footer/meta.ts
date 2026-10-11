import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-biography-identity-footer',
  name: 'Profile cards — Biography above a portrait footer',
  category: 'profile-card',
  tags: ['stacked', 'media', 'compact'],
  description:
    'A text-first profile introduction closes with a compact portrait, identity and profile link.',
  preview: {
    kind: 'element',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Profile introduction                                      │
│Biography describing focus and approach                   │
│Short continuation of the biography                       │
│                                                          │
│┌────────────┐   ┌────────────────────────────────────┐   │
││Image       │   │Alex Rivera                         │   │
│└────────────┘   │Role or specialty                   │   │
│                 │[View profile]                      │   │
│                 └────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 288px card expands to 320px at 640px with 16px padding. An eyebrow and 16px biography occupy the top. A footer follows after 20px with a 1px top border, 16px inset and a 64px square portrait beside flexible identity text.',
    hierarchy:
      'The biography reads before the person name, role and profile link. Limit the introduction label to 3 words, biography to 30, name to 3 and role to 4.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The footer retains its horizontal portrait-and-text structure at both widths. The 64px portrait stays fixed while biography and identity copy wrap naturally.',
    usage:
      'Use when a working approach should introduce the person before their title. Pick an avatar-first card for quick identity scanning. Variations: use a concise personal statement, add a location line, or replace the portrait with initials.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
