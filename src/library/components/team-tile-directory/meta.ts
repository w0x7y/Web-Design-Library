import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-tile-directory',
  name: 'Team — Tile directory',
  category: 'team',
  tags: ['grid','compact'],
  description: "Six compact contact tiles in one hairline-divided panel beneath a split header. Use it for a directory where names, roles, time zones and email matter more than portraits.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Heading about the people           Short introduction     │
│┌──────────────────┬──────────────────┬──────────────────┐│
││Avatar       UTC+1│Avatar       UTC+0│Avatar       UTC-5││
││Name              │Name              │Name              ││
││Role / detail     │Role / detail     │Role / detail     ││
││Short biography   │Short biography   │Short biography   ││
││[Email]           │[Email]           │[Email]           ││
│├──────────────────┼──────────────────┼──────────────────┤│
││Avatar       UTC+2│Avatar       UTC-8│Avatar       UTC+5││
││Name / Role / Bio │Name / Role / Bio │Name / Role / Bio ││
││[Email]           │[Email]           │[Email]           ││
│└──────────────────┴──────────────────┴──────────────────┘│
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section with a 1152px max-w-6xl container, 24px side padding and 64px vertical padding, 96px from 640px. The header stacks with a 24px gap, becoming two equal bottom-aligned columns at 768px. A directory panel starts 48px later: one bordered rounded-lg 8px shell with overflow-hidden, neutral-200 backing and gap-px 1px dividers, containing six bg-white p-6 24px tiles. Each tile places a 48px initials avatar opposite a 12px time-zone badge, then name 16px below, role/detail 4px later, biography 12px later and email link 16px later. Tiles form one, two and three columns at 0px, 640px and 1024px.",
    hierarchy: "Read the 30px headline (36px from 640px), 18px lede, then each avatar and time zone, 16px semibold name, 14px role/detail, 14px biography and 14px email link. Slots: heading up to 8 words, lede up to 22, name up to 22 characters, role up to 24, timezone up to 6, biography up to 12 words. Email links name each person in their accessible label.",
    states: "Email links change from neutral-900 to neutral-600 on hover and show a 2px neutral-900 focus-visible outline offset 2px. Tile backgrounds and badges are static. No open, selected or disabled states.",
    responsive: "Below 640px six tiles stack. At 640px they form three rows of two; at 1024px two rows of three. At 768px the headline and lede sit side by side. Section padding and headline size step at 640px. Biography and role text wrap inside each tile while the time-zone badge stays compact.",
    usage: "Use for a contact directory with short biographies and distributed availability. Pick team-portrait-grid when photographs are central, or team-split-roster-list for a shorter list. Variations: use department labels in the badge, replace timezone detail with working hours, or add more complete rows of three.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

