import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-cover-avatar',
  name: 'Profile cards — Cover banner with overlapping avatar',
  category: 'profile-card',
  tags: ['stacked','layered','media'],
  description: "A short cover image above an overlapping avatar, biography and two profile facts. Use it when a cover and a compact identity need to share one card.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│                          Image                           │
│   ┌────────┐                                             │
├───┤ Avatar ├─────────────────────────────────────────────┤
│   └────────┘                         [Message]           │
│   Morgan Chen                                            │
│   Role or handle                                         │
│   Short biography                                        │
│   Profile detail                 Joined Mar 2024         │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px card (w-72), 320px from 640px (sm:w-80), with a 1px border and 8px rounded-lg corners. The full-width cover is h-24 96px. A p-5 20px body starts with a flex identity row: a 72px avatar, a 4px white border and a -mt-14 56px pull-up on the identity row relative to the padded body place the avatar 36px over the cover; a 44px Message action aligns to its bottom. Name follows by 12px, bio by 8px, and a wrapping facts row by 16px with 8px row and 16px column gaps.",
    hierarchy: "The cover and overlapping avatar lead into an 18px semibold name, 14px role and 14px biography. The 12px facts are subordinate. Slots: name up to 22 characters, role up to 24, bio up to 12 words, a short time zone and a month/year joining date. The only action is Message.",
    states: "The Message button fills neutral-50 on hover and shows a 2px neutral-900 focus-visible outline offset 2px, with a 150ms colour transition. Its accessible label names Morgan Chen. The avatar and cover are static placeholders. No open, selected or disabled states.",
    responsive: "At 640px only the card width changes from 288px to 320px. Cover height, avatar overlap and action alignment stay fixed. The fact row wraps when needed rather than overflowing.",
    usage: "Use for a person whose cover image adds context to their identity. Pick profile-card-centered-stats when metrics should dominate. Variations: use a workspace cover, replace joining date with membership level, or substitute a compact connect action.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

