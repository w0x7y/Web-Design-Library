import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-inline-labels',
  name: 'Badges — Inline beside titles and links',
  category: 'badges',
  tags: ['stacked', 'compact'],
  description: 'A card places small labels inline after a heading, a navigation link and an option name: Beta, New and a locked Pro label. Use for release-stage and plan labels that qualify the text right before them.',
  preview: { kind: 'element' },
  wireframe: `┌────────────────────────────────────────────────────┐
│ Feature name (Beta)                                │
│ One sentence that explains what the feature does.  │
├────────────────────────────────────────────────────┤
│ Overview    Reports (New)    Settings              │
│ ────────                                           │
├────────────────────────────────────────────────────┤
│ Option name (Lock Pro)                   [Upgrade] │
│ Short note on what the plan unlocks                │
└────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A 288px (w-72) card grows to 416px (sm:w-[26rem]) at 640px, with a 1px neutral-200 border and 8px radius. Three regions are divided by neutral-200 rules. The header has 16px padding: a 16px semibold heading wraps with an 8px gap to a 22px outline Beta badge, and a 14px description sits 4px below. The nav row has 16px side padding and a wrapping list of 44px-tall (h-11) links with 20px gaps; Reports carries an 18px solid New badge 6px after its label. The footer row has 16px padding, a 14px medium option name with an 8px gap to a neutral-100 Pro badge with a 12px lock, a 12px note, and a right-aligned Upgrade text link.',
    hierarchy: 'Read the heading and its Beta badge, the description, the current Overview link, Reports with New, Settings, then the option with its Pro badge and the Upgrade link. Each badge sits after the words it qualifies and centers on their line. Badge text is part of the accessible name, so the link reads "Reports New". Keep badges to one word and headings under 4 words.',
    states: 'The current Overview link has aria-current="page", medium weight and a 2px neutral-900 bottom border; the other links are neutral-600 and turn neutral-900 on hover. Upgrade is an underlined link that turns neutral-600 on hover. Every link has a 2px neutral-900 focus-visible outline offset 2px. Badges are static and keep 1px borders in forced-colors mode.',
    responsive: 'At 640px only the card width changes, from 288px to 416px. The heading, nav list and option name wrap, so a badge moves to the next line with its text instead of overflowing. The option text can shrink (min-w-0) while Upgrade keeps its width.',
    usage: 'Use for release-stage, novelty and plan labels next to headings, menu links and settings. Pick badges-count-indicators for numeric counts aligned at the end of navigation rows. Variations: add Beta to a page title, put New on a vertical sidebar link, or replace Pro with a plan name such as Team.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
