import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-split-roster-list',
  name: 'Team — Intro beside roster list',
  category: 'team',
  tags: ['split','list','compact'],
  description: "A sticky introduction beside a six-person avatar roster with email controls. Use it for a compact team overview with a recruitment action.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow                Avatar Name / Role        [Email]  │
│Heading about          ─────────────────────────────────  │
│the people             Avatar Name / Role        [Email]  │
│Short introduction     ─────────────────────────────────  │
│[Join the team]        Avatar Name / Role        [Email]  │
│                       ─────────────────────────────────  │
│                       Avatar Name / Role        [Email]  │
│                       ─────────────────────────────────  │
│                       Avatar Name / Role        [Email]  │
│                       ─────────────────────────────────  │
│                       Avatar Name / Role        [Email]  │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section with a 1152px max-w-6xl container, 24px side padding and 64px vertical padding, 96px from 640px. Intro and roster stack with a 48px gap; at 1024px they become 2fr/3fr columns with a 64px gap. Intro is self-start and becomes sticky top-8 32px at 1024px. Its eyebrow, headline, lede and 44px secondary action have 12px, 16px and 24px gaps. The six-person roster sits between hairlines. Each row uses grid-cols-[48px_minmax(0,1fr)_40px], 16px gaps and 20px vertical padding, placing a 48px avatar beside text and a 40px outlined email control.",
    hierarchy: "Read the 14px eyebrow, 30px headline (36px from 640px), 18px lede and Join the team, then each 16px semibold name, 14px role and 12px timezone. Slots: eyebrow up to 4 words, headline up to 8, lede up to 22, name up to 22 characters, role up to 24 and zone up to 6. Each email control has an accessible label naming its person.",
    states: "Join the team and email controls fill neutral-50 on hover with 150ms colour transitions. All show a 2px neutral-900 focus-visible outline offset 2px. The introduction stays sticky during desktop scrolling within the section. No open, selected or disabled states.",
    responsive: "Below 1024px the introduction stacks above the roster; at 640px section padding grows to 96px and the headline to 36px. At 1024px the 2:3 split and sticky introduction activate. Roster rows keep three columns down to 320px; the minmax(0,1fr) centre wraps names and roles while the avatar and email control stay fixed.",
    usage: "Use for a concise roster paired with a hiring or participation invitation. Pick team-tile-directory for biographies or team-featured-lead-roster when one member deserves prominence. Variations: change Join the team to Contact the team, replace timezone with a department, or add more roster rows.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

