import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-release-notes',
  name: 'Blog cards — Release notes with grouped changes',
  category: 'blog-card',
  tags: ['stacked', 'list', 'compact'],
  description: 'A version badge and date above a release headline, short bulleted changes grouped under labels such as New and Fixed, and a link to the full notes. Use it for a changelog, product updates page or release feed.',
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ (v2.4.0)  Oct 20, 2026                                       │
│ Release headline that names the main change                  │
│ ──────────────────────────────────────────────────────────── │
│ New                                                          │
│ - Summary of the first new feature                           │
│ - Summary of another new feature                             │
│ Fixed                                                        │
│ - Summary of a resolved issue                                │
│                                                              │
│ [Read the full notes ->]                                     │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A bordered white article, 288px wide (w-72) and 352px from 640px (sm:w-[22rem]), with 20px padding (p-5) and an 8px radius (rounded-lg). The header row pairs a pill version badge and the date with a 12px gap; the headline sits 12px below. A changes block starts 16px below with a 1px neutral-200 top rule and 16px top padding, and stacks its groups 16px apart (space-y-4). Each group has a 12px label and, 8px below, a list whose items are 6px apart (space-y-1.5); each item is a flex row with an 8px gap and a 6px round bullet. The full-notes link sits 20px below the changes.',
    hierarchy: 'Read the version and date, then the 18px semibold headline, then the group labels and their 14px neutral-600 items, then the link. Slots: version as v2.4.0, date as Oct 20, 2026 in a time element, headline up to 8 words, two or three groups (New, Improved, Fixed) with one to three items each, each item up to 6 words on one line. Bullets and the arrow are decorative.',
    states: 'The full-notes link is an underlined text link that turns neutral-600 on hover and shows a 2px neutral-900 keyboard outline offset 2px. Its aria-label names the version (Read the full notes for version 2.4.0). The badge, groups and items are static.',
    responsive: 'The card is 288px wide below 640px and 352px from 640px. Everything stays in one column; the headline wraps to two lines on mobile, and long items wrap beside their bullet.',
    usage: 'Use for a changelog page, a product updates feed or a release summary in an email or dashboard. Pick blog-card-date-column for news posts without itemized changes, or blog-card-table-of-contents when the list links to sections of one article. Variations: add an Improved or Deprecated group, mark a breaking change with a second badge beside the version, or link each item to its own documentation page.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
