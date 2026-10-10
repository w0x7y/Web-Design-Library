import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-featured-lead-roster',
  name: 'Team — Featured lead with roster',
  category: 'team',
  tags: ['asymmetric','list','media'],
  description: "A featured lead card with a wide portrait beside a compact four-person roster. Use it when one person needs a fuller introduction than the rest of the team.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Heading about the people                                  │
│Short introduction                                        │
│┌────────────────────────────────┐  ┌──────────────────┐  │
││             Image              │  │Team              │  │
│└────────────────────────────────┘  │Avatar Name / Role│  │
│[Lead]                             │──────────────────│   │
│Name / Role                        │Avatar Name / Role│   │
│Short biography                    │──────────────────│   │
│[Profile] [Email]                  │Avatar Name / Role│   │
│                                   │──────────────────│   │
│                                   │Avatar Name / Role│   │
│                                   │[View all]        │   │
│                                   └──────────────────┘   │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section with a 1152px max-w-6xl container, 24px side padding and 64px vertical padding, 96px from 640px. A left-aligned headline and 672px max-w-2xl lede precede the cards by 48px. Cards stack with a 32px gap; from 1024px a 12-column grid places the featured card across seven columns and the roster across five. Both cards have rounded-lg 8px corners and 1px borders. Featured media is 16:9 with rounded top corners. Its p-6 body has a Lead badge, name 12px below, role 4px later, biography 12px later and two links 16px later. The p-6 roster has a Team heading, a four-row list 16px below, 40px avatars, 12px gaps, 16px row padding and a View all link 16px below.",
    hierarchy: "Read the 30px heading (36px from 640px) and 18px lede, then the broad featured image, 12px Lead badge, 18px semibold featured name, 14px role and biography. The subordinate roster uses a 18px heading, 16px semibold names and 14px roles. Slots: heading up to 8 words, lede up to 22, featured name up to 22 characters, featured biography up to 22 words, member names up to 22 and roles up to 24.",
    states: "Profile, email and View all links change from neutral-900 to neutral-600 on hover and show a 2px neutral-900 focus-visible outline offset 2px. All portraits, badges and roster rows are static. No open, selected or disabled states.",
    responsive: "Below 1024px the featured card stacks above the roster with a 32px gap. At 640px section padding grows to 96px and the headline to 36px. At 1024px the cards use a 7/5 column split and align at the top. Media remains 16:9; links wrap and roster text remains beside fixed 40px avatars.",
    usage: "Use for a lead, founder or speaker who needs extra context alongside a team. Pick team-portrait-grid when every member should have equal weight, or team-bio-rows for several long biographies. Variations: feature a different lead, replace the Lead label with a responsibility, or add more compact roster rows.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

