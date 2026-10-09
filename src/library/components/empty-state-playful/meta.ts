import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-playful',
  name: 'Playful empty state',
  category: 'empty-state',
  tags: ['playful'],
  description:
    'A playful empty state for a board-game collection app: a cobalt card with a flat inline-SVG shelf of dice, a meeple and a dashed slot where the first game will go, a "Your shelf is empty" heading, one line of help and two ways to start. The dice tip over when the card is hovered. Use it for empty lists, first-run screens and cleared searches in friendly consumer apps.',
  preview: { kind: 'element' },
  fonts: ['Grandstander:wght@100..900'],
  brief: {
    layout:
      'A <section> labelled by its h2: 288px wide with 24px padding, centred text and its content stacked; from 640px it is 608px wide with 32px padding, a flex row (items centred, 28px gap) and left-aligned text. First an aria-hidden inline SVG (viewBox 0 0 200 150, overflow visible), 128px tall below 640px and 160px from 640px, centred until then: a shelf bar along the bottom, a big die standing on it with a small die balanced on top, a meeple beside them, a dashed slot with a plus where a game box will go, and three small sparkles. Then a text column: the h2 "Your shelf is empty" (16px below the illustration on phones, no gap beside it), a one-line help text 8px below, and the actions 20px below: a primary "Add a game" link with a 16px plus icon, and a secondary "Scan a barcode" text link, stacked and centred 12px apart on phones, in a row 20px apart from 640px (wrapping if the words run long).',
    style:
      'Grandstander throughout, antialiased, white on a blue-700 card (6.8:1) with a 28px radius. h2 24px bold, line height 1.25. Help text 15px blue-100 (5.6:1), wrapped with text-wrap pretty. Illustration, flat shapes without outlines: shelf blue-900 (8px tall, fully rounded); big die yellow-300 with five blue-950 pips, 12px corner radius, tilted −5°; small die red-400 with three white pips, tilted 14°; meeple pink-300, its corners rounded by a 3px stroke in the same colour; slot and plus a 2px blue-200 dashed stroke (6 5 dashes); sparkles yellow-300, white and pink-300. Primary link: a 44px yellow-300 pill with 20px side padding, 15px bold blue-950 text (11:1) and an 8px icon gap. Secondary link: 15px semibold white with a 2px yellow-300 underline offset 4px.',
    states:
      'Hover (devices with hover only): the primary link lightens to yellow-200 and rises 2px; the secondary link\'s underline turns white. While the card is hovered the big die turns −6° and the small die rises 8px and turns 12° about their own centres (transform-box fill-box) over 300ms ease-out; all movement is skipped under prefers-reduced-motion. Keyboard focus: a 2px yellow-300 outline offset 2px on both links (5.2:1 against the card). Both actions are plain links: point them at your add-game form and barcode scanner.',
    responsive:
      'Below 640px: 288px wide, stacked and centred, a 128px illustration, the two actions stacked; the card is 374px tall. From 640px: 608px wide, the 160px illustration on the left and the text and the two actions in a row on the right; the card is 224px tall.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
