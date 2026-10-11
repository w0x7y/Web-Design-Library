import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-expandable-details',
  name: 'Profile cards — Expandable details',
  category: 'profile-card',
  tags: ['stacked','compact'],
  description: "A right-aligned avatar beside identity text above expandable credentials and a profile link. Use it when background details can stay behind a native disclosure.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Riley Morgan                                  Avatar      │
│Role or specialty                                         │
│Short summary                                             │
│──────────────────────────────────────────────────────────│
│Experience and credentials                            ^   │
│  Short background paragraph                              │
│  Experience                                   8 years    │
│  Credentials                        Qualification slot   │
│──────────────────────────────────────────────────────────│
│[View full profile]                                       │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px card (w-72), 320px from 640px (sm:w-80), with p-5 20px padding, 8px corners and a 1px border. The identity row places name and role on the left and a 48px avatar on the right with a 12px gap, distinguishing it from profile-card-identity-details. The summary follows by 8px. Native details begins 12px later between hairlines: its summary has 8px vertical padding, an 8px gap and a 16px chevron. The panel has a 14px background sentence and two 12px definition rows, 8px top spacing and 4px row gaps, with 8px bottom padding. The closing link has 8px top margin.",
    hierarchy: "Read the 18px semibold name and 14px role, short 14px summary, then the Experience and credentials disclosure. The first render shows the panel so its compact depth is visible. Slots: name up to 20 characters, role up to 22, summary up to 7 words, background up to 6 words, experience up to 8 characters and qualification up to 18. View full profile closes the card.",
    states: "Native details starts open and toggles by mouse or keyboard; the decorative chevron rotates 180 degrees with a 150ms transform transition. Summary hover fills neutral-50 and the text link changes to neutral-600. Both controls show a 2px neutral-900 focus-visible outline offset 2px. No selected or disabled state.",
    responsive: "Only width changes at 640px, from 288px to 320px. Identity stays horizontal with the avatar at the right. The open state stays under 370px high with short content; label/value rows retain right-aligned values and allow wrapping.",
    usage: "Use for optional qualifications in a compact profile. Pick profile-card-identity-details when all practical facts must be visible. Variations: start the disclosure closed, replace credentials with recent experience, or link to a longer biography.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

