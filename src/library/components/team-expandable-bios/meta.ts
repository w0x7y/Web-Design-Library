import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-expandable-bios',
  name: 'Team — Expandable biography list',
  category: 'team',
  tags: ['stacked','list','compact'],
  description: "A narrow list of five people with native expandable biographies and contact links. Use it to keep longer introductions available without showing every biography at once.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Heading about the people                                  │
│Short introduction                                        │
│──────────────────────────────────────────────────────────│
│Avatar Name / Role                                      ^ │
│       Biography paragraph                                │
│       [Profile] [Email]                                  │
│──────────────────────────────────────────────────────────│
│Avatar Name / Role                                      v │
│──────────────────────────────────────────────────────────│
│Avatar Name / Role                                      v │
│──────────────────────────────────────────────────────────│
│Avatar Name / Role                                      v │
│──────────────────────────────────────────────────────────│
│Avatar Name / Role                                      v │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section with a 768px max-w-3xl container, 24px side padding and 64px vertical padding, 96px from 640px. A left-aligned headline and lede precede the list by 48px. Five native details rows sit between 1px hairlines. Each summary is a flex row with 20px vertical padding, a 40px initials avatar, 16px gaps, a flex-1 identity and a 20px chevron. The open panel has pl-14 56px indentation aligned to the identity text, 20px bottom padding, 16px biography text and a 14px link row 16px later with 16px gaps.",
    hierarchy: "Read the 30px headline (36px from 640px) and 18px lede, then each 16px semibold name and 14px role. The first biography starts visible; hidden biographies are available in each row. Slots: heading up to 8 words, lede up to 22, names up to 22 characters, roles up to 24 and biography up to 40 words in two or three sentences. Profile and email links name the person.",
    states: "The first details row starts open. Each disclosure toggles independently by mouse or keyboard, rotating its chevron 180 degrees with a 150ms transform transition. Summary hover fills neutral-50 with a 150ms colour transition; text links hover to neutral-600. Summaries and links show a 2px neutral-900 focus-visible outline offset 2px. No selected or disabled state.",
    responsive: "The list stays one column at every width. At 640px section padding grows from 64px to 96px and the heading from 30px to 36px. Summary identity text wraps within min-w-0 flex-1 while avatar and chevron stay fixed. Open biographies retain the 56px indent and links wrap.",
    usage: "Use for optional biographies in a compact roster. Pick team-bio-rows when all backgrounds need to be visible together or team-split-roster-list when names and roles are enough. Variations: start every row closed, group disclosures under department labels, or use a shared details name to allow one open biography at a time.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

