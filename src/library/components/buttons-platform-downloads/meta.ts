import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-platform-downloads',
  name: 'Buttons — Two-line platform download buttons',
  category: 'buttons',
  tags: ['grid', 'icons', 'compact'],
  description: 'Two filled download links pair a device glyph with a small lead-in over a large platform name, above a version line and a link to other platforms. Use on a download or install page that offers the same app for more than one platform.',
  preview: { kind: 'element' },
  wireframe: `┌────────────────────────────────────────────────────────┐
│ ┌────────────────────────┐  ┌────────────────────────┐ │
│ │ Icon  Download for     │  │ Icon  Get it on        │ │
│ │       Desktop platform │  │       Mobile app store │ │
│ └────────────────────────┘  └────────────────────────┘ │
│ Version 2.4.0 | 84 MB                [Other platforms] │
└────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A 288px (w-72) root grows to 448px (sm:w-[28rem]). A role="list" grid with 12px gaps holds the two links, one column on mobile and two equal columns from 640px. Each link is 56px tall (h-14), rounded-md, with 16px side padding, a 24px leading glyph and a 12px gap before a two-line label. A footer row sits 16px below with the version on the left and a text link on the right.',
    hierarchy: 'The large platform name carries each button: 16px semibold with 20px leading, under a 12px neutral-300 lead-in such as Download for or Get it on. The device glyph is decorative, so the visible text is the accessible name. Keep lead-ins under 3 words and platform names under 3 words. The 12px footer gives version and file size in tabular figures, then Other platforms.',
    states: 'Download links fill neutral-700 on hover with a 150ms color transition. Other platforms is underlined and turns neutral-600 on hover. Every link shows the standard 2px neutral-900 focus outline offset 2px. There are no selected or disabled states; the host points each href at its file or store page.',
    responsive: 'Below 640px the 288px root stacks the two links full width. From 640px the root is 448px and the links sit side by side. The footer stays one row at both widths.',
    usage: 'Use where one app ships for several platforms and each needs its own download. Pick buttons-stacked-full-width for a single recommended action with alternatives. Variations: show the detected platform first and outline the other, add a third platform under the grid, or replace the version line with system requirements.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
