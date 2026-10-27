import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-vote-counters',
  name: 'Buttons — Vote buttons with counts',
  category: 'buttons',
  tags: ['list', 'numbers', 'compact'],
  description: 'Each row of a short list starts with a tall vote toggle that stacks an up chevron over its count, beside the item title and meta line. Use on a feedback board, idea list or ranked suggestions where people vote items up.',
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│ ┌─────┐  Request title that names the idea   │
│ │ ^ * │  24 comments | Planned               │
│ │ 128 │                                      │
│ └─────┘                                      │
├──────────────────────────────────────────────┤
│ ┌─────┐  Second request title                │
│ │  ^  │  9 comments | Under review           │
│ │  42 │                                      │
│ └─────┘                                      │
├──────────────────────────────────────────────┤
│ ┌─────┐  Third request title                 │
│ │  ^  │  3 comments | Open                   │
│ │  17 │                                      │
│ └─────┘                                      │
└──────────────────────────────────────────────┘`,
  brief: {
    layout: 'A 288px (w-72) role="list" card grows to 416px (sm:w-[26rem]), with a neutral-200 border, rounded-lg corners and 1px row dividers. Each row has 16px padding and centers a 48px by 56px (w-12 h-14) rounded-md vote button beside the text with a 16px gap. Inside the button a 16px chevron sits over the count.',
    hierarchy: 'Scan the counts down the left edge, then each title and its meta line. Titles are 14px semibold and under 8 words; the 12px neutral-500 meta line gives a comment count and a status under 3 words. Counts are 14px semibold tabular figures up to 4 digits. Each button is named by screen-reader-only text, such as Upvote second request title, 42 votes.',
    states: 'Each button is a toggle with aria-pressed, and the host flips that attribute: pressed buttons fill neutral-900 with white text and a neutral-900 border, unpressed ones are white with a neutral-300 border. Hover fills unpressed buttons neutral-50 and pressed ones neutral-700. Forced-colors mode paints pressed buttons Highlight with HighlightText. Every button shows the standard 2px neutral-900 focus outline offset 2px.',
    responsive: 'The root is 288px below 640px and 416px from 640px. The vote button keeps its size; titles wrap within the remaining width while the button stays centered on the row.',
    usage: 'Use where the vote count ranks items and people can add or remove one vote. Pick buttons-joined-group for a single follow or like action beside a count. Variations: add a down chevron under the count for up and down voting, sort rows by count, or link each title to its detail page.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
