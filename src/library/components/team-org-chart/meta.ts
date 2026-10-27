import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-org-chart',
  name: 'Team — Org chart with connector lines',
  category: 'team',
  tags: ['centered', 'list', 'compact'],
  description: "A three-level org chart: one lead card above a row of three manager cards joined by 1px connector lines, each manager with a short list of reports beneath. Use it to show who leads each group and who reports to whom.",
  preview: { kind: 'section' },
  wireframe: `┌───────────────────────────────────────────────────────────┐
│             Eyebrow / Heading / Introduction              │
│                                                           │
│                 ┌───────────────────────┐                 │
│                 │ Avatar Name / Role    │                 │
│                 └───────────┬───────────┘                 │
│         ┌───────────────────┼───────────────────┐         │
│ ┌───────┴───────┐   ┌───────┴───────┐   ┌───────┴───────┐ │
│ │Avatar Name    │   │Avatar Name    │   │Avatar Name    │ │
│ │Role           │   │Role           │   │Role           │ │
│ └─┬─────────────┘   └─┬─────────────┘   └─┬─────────────┘ │
│   ├─ Avatar Name      ├─ Avatar Name      ├─ Avatar Name  │
│   ├─ Avatar Name      ├─ Avatar Name      └─ Avatar Name  │
│   └─ Avatar Name      └─ Avatar Name                      │
└───────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section with a 1152px max-w-6xl container, 24px side padding and 64px vertical padding, 96px from 640px. A 672px max-w-2xl header (eyebrow, headline, lede) sits 48px above the chart, 64px from 1024px. The chart is a nested list. Person cards are rounded-lg with a neutral-200 border, 16px padding and a 40px initials avatar 12px from the name and role. From 1024px the lead card is 320px wide and centered; a 32px vertical connector drops from it to a horizontal rule that runs from the first to the last column center, and each of three equal manager columns (32px gap) hangs its full-width card from that rule by a 32px stub. All connectors are 1px neutral-300 borders. Under every manager card a reports list is indented 36px (ml-9) behind a 1px left rule, with 16px top padding, 24px left padding and 16px gaps; each report row has a 32px avatar, a 14px name and a 14px role.",
    hierarchy: "Read the headline, then the lead, then the managers left to right, then each manager's reports. Names are semibold (16px on cards, 14px in report rows) with roles in neutral-500 below. Slots: eyebrow up to 3 words, headline up to 8 words, lede up to 22 words, names up to 22 characters, roles up to 24 characters, two to four reports per manager. Each nested list is labelled \"Reports to\" plus its manager's name, so screen readers announce the reporting line.",
    states: "Static. Cards and connectors have no hover, focus, open, selected or disabled states. Link a card's name to a profile when the chart needs one, using the standard text-link hover and focus outline.",
    responsive: "Below 1024px the chart becomes an indented tree: the lead card is full width, the managers list is indented 36px behind a 1px left rule with 24px top padding and 24px gaps, and each reports list is indented again under its manager. The horizontal rule and vertical stubs are hidden. At 1024px managers form three columns and the connector lines appear. At 640px section padding grows to 96px and the headline from 30px to 36px. The header is left-aligned below 1024px and centered from 1024px. At the narrowest widths long roles wrap under the name.",
    usage: "Use for a small organization or one department, up to about fifteen people, where reporting lines matter more than biographies. Pick team-department-columns when groups matter but reporting lines do not, or team-featured-lead-roster to introduce one leader in depth. Variations: two or four manager columns, a fourth level indented under a report, or a team label badge on each manager card.",
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
