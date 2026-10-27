import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-icon-split-panels',
  name: 'Tabs — Icon tabs over split panels',
  category: 'tabs',
  tags: ['centered', 'split', 'icons', 'media', 'spacious'],
  description: 'A centered intro sits above a row of four tabs, each an icon over a short label, that switch a panel of copy, checks and a link beside an image. Use it on product or landing pages to present several capabilities without stacking them all.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│                 Eyebrow for the capabilities                 │
│        Heading that names what the product helps do          │
│           Short introduction that frames the choices         │
│                                                              │
│      Icon          Icon          Icon          Icon          │
│   [Planning]     [Sharing]   [Automation]   [Reports]        │
│   ──────────────────────────────────────────────────         │
│                                                              │
│ Panel headline                 ┌───────────────────────────┐ │
│ Two-sentence description       │                           │ │
│ Check  Supporting point        │                           │ │
│ Check  Supporting point        │           Image           │ │
│ Check  Supporting point        │                           │ │
│ [Explore planning]             │                           │ │
│                                └───────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A white section with a max-w-6xl container, 24px side padding and 64px vertical padding (96px from 640px). A max-w-2xl centered intro stacks the eyebrow, headline and lede. 48px below, the tab row is centered inside its own sideways-scrolling container: four tabs, 96px wide (w-24) and 144px from 640px (sm:w-36), sit edge to edge on a 2px neutral-200 track, each a 24px icon above a text-sm label with 8px between them. The selected panel starts 48px below and is a two-column grid from 1024px (lg:grid-cols-2, 64px gap) with copy on the left and a 4:3 rounded-lg image placeholder on the right.',
    hierarchy: 'Read the eyebrow, headline and lede, then the selected tab, then the panel headline, description, three checked points and the text link, with the image as support. The headline stays under about 10 words and the lede under 30. Tab labels are one word under 12 characters with an icon that matches the topic. Each panel has a text-2xl headline up to 8 words, a description up to 30 words, three points up to 6 words each and a link that names the topic ("Explore planning"). Tabs are native radios in a labeled radiogroup; aria-controls points at each section, which is labeled by its tab. Image placeholders describe the screenshot they stand for.',
    states: 'The first tab is selected by default. The selected tab has neutral-900 text and icon with a neutral-900 segment of the track under it; the others are neutral-500 and turn neutral-900 with a neutral-400 track segment on hover. Only the selected panel displays, and arrow keys move between tabs. A focused tab draws a 2px neutral-900 outline offset 2px around the label, inside 4px of padding so the scrolling row does not clip it. Text links lighten to neutral-600 on hover and use the same outline.',
    responsive: 'Below 640px the tab row bleeds to both screen edges (-mx-6) and the four 96px tabs overflow it, so the last tab is cut off at the edge and the row scrolls sideways while the page stays put. From 640px the row returns inside the container, the 144px tabs fit and the row sits centered. The panel stacks copy above the image until 1024px, then splits into two equal columns with the copy vertically centered against the image.',
    usage: 'Use it to present three to five capabilities, use cases or audiences on a marketing or product page when each needs its own image. Choose features-alternating-rows when readers should see every capability without clicking, or tabs-underline-panels for compact record views. Variations: swap the image for a video placeholder, put the image on the left, or drop the checks for a single paragraph and a primary action.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
