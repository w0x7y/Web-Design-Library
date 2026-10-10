import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-status-skills',
  name: 'Profile cards — Status badge with skill tags',
  category: 'profile-card',
  tags: ['stacked','compact'],
  description: "An availability badge beside an avatar, followed by identity, a positioning statement and skill tags. Use it for a person whose availability and skills drive contact.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│ Avatar                         Available Mar 14          │
│ Jamie Quinn                                              │
│ Role or specialty                                        │
│ Positioning statement                                    │
│ [Skill] [Skill] [Skill] [Skill]                          │
│ [                   Contact Jamie ->                   ] │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px card (w-72), 320px at 640px (sm:w-80), with p-6 24px padding, 8px corners and a 1px border. A flex row spaces a 48px avatar against a compact availability badge with an 8px gap. Name follows by 12px, statement by 8px, four wrapping skill badges by 12px with 8px gaps, and a full-width 44px primary action by 16px. Badges use 10px horizontal and 2px vertical padding with rounded-full corners.",
    hierarchy: "Availability and the 48px avatar lead into an 18px semibold name, 14px role and 14px positioning statement of two or three lines. Four 12px skill tags precede Contact Jamie. Slots: name up to 20 characters, role up to 22, statement up to 16 words, availability up to 20 characters and skill labels up to 7. The badge dot is decorative; the availability wording carries its meaning.",
    states: "Contact Jamie changes from neutral-900 to neutral-700 on hover with a 150ms colour transition and shows a 2px neutral-900 focus-visible outline offset 2px. Availability and skill badges are static labels. No open, selected or disabled state.",
    responsive: "Only width changes at 640px, from 288px to 320px. Skill tags wrap with 8px gaps if their labels need a second line. The availability row keeps both items aligned and uses a short date to keep the badge on one line.",
    usage: "Use for a short professional profile when skills and availability determine fit. Pick profile-card-identity-details for longer practical label/value facts. Variations: replace the date with a response window, change skills to service types, or make the action Request availability.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

