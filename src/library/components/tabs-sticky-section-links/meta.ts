import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-sticky-section-links',
  name: 'Tabs — Sticky links to page sections',
  category: 'tabs',
  tags: ['stacked', 'row', 'spacious'],
  description: 'A full-width band of pill links sticks to the top of the viewport and jumps to the stacked sections below, with the current one marked. Use it on long product, documentation or profile pages that readers scan by section.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Eyebrow for the page                                         │
│ Page heading that names the subject                          │
│ Short introduction                                           │
├──────────────────────────────────────────────────────────────┤
│ [Overview]  [Features]  [Specifications]  [Support]          │
├──────────────────────────────────────────────────────────────┤
│ Overview             Opening paragraph                       │
│                      Second paragraph                        │
│ ──────────────────────────────────────────────────────────── │
│ Features             Feature name        Feature name        │
│                      One sentence        One sentence        │
│                      Feature name        Feature name        │
│                      One sentence        One sentence        │
│ ──────────────────────────────────────────────────────────── │
│ Specifications       Label                           Value   │
│                      Label                           Value   │
│ ──────────────────────────────────────────────────────────── │
│ Support              Where to get help                       │
│                      [Contact support]                       │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A white section. The intro (eyebrow, section headline, max-w-2xl lede) sits in a max-w-6xl container with 24px side padding and 64px top padding (96px from 640px). 40px below, a full-width band with 1px neutral-200 top and bottom borders sticks to the top of the viewport (sticky top-0). Its max-w-6xl row holds 36px-high pill links with 8px gaps and 12px vertical padding. Below it, four sections are separated by 1px neutral-200 rules, each with 48px vertical padding and a 64px scroll margin so a jump lands below the band. From 1024px each section is a three-column grid: the heading takes one column and the content two, with a 64px gap.',
    hierarchy: 'Read the page heading and lede, then the band, then each section heading followed by its content. Link labels are one or two words and repeat the section headings in page order; use three to six of them. The sample sections show different content types: two short paragraphs, a two-column list of four features with a one-sentence description each, label and value rows, and a paragraph with a secondary action. The band is a nav labeled "Sections on this page" with a role="list" list; each link targets a section id, and each section is labeled by its heading.',
    states: 'The link for the section in view carries aria-current="true" and shows a neutral-900 fill with white text; the first link is current by default. The host app should move aria-current to the section in view as the reader scrolls; the sample marks Overview. Other links are neutral-600 and gain a neutral-100 fill and neutral-900 text on hover. Every link and the action draw a 2px neutral-900 outline offset 2px on keyboard focus. In forced-colors mode the current link also gains a border, since fills are removed.',
    responsive: 'Below 640px the links scroll sideways inside the band, which bleeds to the edges of the screen, while the page itself never scrolls sideways. The feature list is one column until 640px, then two. Below 1024px each section stacks its heading above the content with 16px between them; from 1024px the heading moves into its own left column.',
    usage: 'Use it for long single pages with four to six distinct sections: product details, documentation, profiles or policies. For views that replace one another in place, use tabs-underline-panels or tabs-icon-split-panels; for a short list of jump links above content that is always visible, use faq-question-index. Variations: add a primary action at the right end of the band, use an underline in place of pill fills, or start with the band hidden until the intro scrolls out of view.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
