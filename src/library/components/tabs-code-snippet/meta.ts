import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-code-snippet',
  name: 'Tabs — Code snippet with copy button',
  category: 'tabs',
  tags: ['stacked', 'row', 'compact'],
  description: 'Package manager choices and a copy button head a dark monospace code block that shows the matching commands. Use it in docs and setup guides where one step has a variant per tool, language or platform.',
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│ [npm]  [pnpm]  [yarn]  [bun]                 [Copy]  │
│ ─────                                                │
├──────────────────────────────────────────────────────┤
│ $ npm install package-name                           │
│ $ npx package-name init                              │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A 288px (w-72) rounded-lg neutral-950 block grows to 448px (sm:w-[28rem]) at 640px. A neutral-900 header with a 1px neutral-800 bottom border and 8px side padding holds four 40px-high choices (px-3) on the left and a 32px icon-only copy button on the right. Each panel is a pre block with 16px padding, font-mono text-sm and a 24px line height, one command per line.',
    hierarchy: 'Read the tool choices, then the copy button at the end of the header, then the commands in the selected panel. Choice labels are one short word: a package manager, language or platform. Each panel holds one to four commands of up to 30 characters so they fit the 288px width. A neutral-400 prompt glyph starts each line; it is hidden from assistive technology and excluded from text selection. The choices are native radios in a labeled radiogroup whose aria-controls point at sections labeled by each choice. The copy button carries an accessible name.',
    states: 'The first choice is checked by default. A checked label shows white text and a 2px white underline that overlaps the header border; unchecked labels are neutral-300 and turn white on hover. Only the checked panel displays, and arrow keys move between choices. A focused choice draws a 2px white outline offset 2px around its label, and the copy button shows the same outline plus a white/10 fill on hover. The command block is a keyboard stop so a long line can scroll sideways, and it draws the same outline on focus. The copy button is a placeholder: wire it to the clipboard action of the host app for the visible panel, and announce success in a polite live region.',
    responsive: 'Below 640px the block is 288px wide and the choices keep their natural widths. At 640px it widens to 448px. Commands never wrap: a longer line scrolls sideways inside its own panel.',
    usage: 'Use it for install or setup commands that differ by package manager, language or operating system. For one command with no variants, use a plain code block with the same copy button; for open files a reader can close, use tabs-document-strip. Variations: language choices over a longer sample, file names as choices for a sample split across files, or operating system choices.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
