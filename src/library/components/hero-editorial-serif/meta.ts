import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-editorial-serif',
  name: 'Editorial hero',
  category: 'hero',
  tags: ['editorial', 'light', 'has-image'],
  description:
    'A magazine-cover hero on warm paper: an Instrument Serif headline with an italic accent, a standfirst, a photo plate with caption and an "In this issue" contents strip. Use it for publications, journals, studios or any content-led brand.',
  preview: { kind: 'section' },
  fonts: ['Instrument Serif:ital@0;1'],
  brief: {
    layout:
      'A 1280px container. At the top, a folio line between two hairlines: italic masthead on the left, tagline in the middle, issue number on the right. Below it a 12-column grid: headline, standfirst and two calls to action in the left 7 columns; a portrait photo with a caption in the right 5 columns, spanning two rows; and an "In this issue" contents list (three entries, each a page number, title and author) aligned to the bottom of the left column.',
    style:
      'Paper background #f4efe6, stone-950 ink and a single accent, orange-800. Instrument Serif for the headline (96px, 0.95 line height, -0.02em tracking, the accent word in italic orange-800), the 24px stone-700 standfirst, the masthead, the 20px contents titles and the italic page numbers. Small text (folio, buttons, caption, authors) uses the page sans at 11 to 14px, with labels in uppercase tracked 0.12em. The primary button is a square-cornered stone-950 block, 48px tall, with paper-coloured text and an arrow; the secondary is a text link with a 30% opacity underline. The photo is a 4:5 crop with no radius, focused 66% across; the caption pairs an italic orange "Plate I" with stone-600 text.',
    states:
      'The primary button turns orange-800 on hover and its arrow slides 4px right. The subscribe link underline darkens to solid stone-950 on hover. Contents titles underline on hover. Every link shows a 2px stone-950 outline on keyboard focus, offset 2px on the button and 4px on text links and contents entries.',
    responsive:
      'Below 1024px everything stacks: headline, standfirst and buttons, then the photo (3:2 from 640px, 4:3 on phones), then the contents list. The headline is 96px in a 448px measure on desktop, so it breaks into three lines; 72px from 640px and 56px on phones, with balanced wrapping. The contents list is three columns from 640px and one column below. The folio hides its tagline below 640px.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
