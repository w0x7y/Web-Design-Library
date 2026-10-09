import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-brutalist-grid',
  name: 'Brutalist hero',
  category: 'hero',
  tags: ['brutalist', 'light'],
  description:
    'A raw-grid hero for a bare-metal cloud: 4px black rules, an oversized condensed Martian Mono headline, a spec sheet, a terminal snippet and a safety-orange call-to-action block. Use it for developer tools, infrastructure or anything that should look built rather than decorated.',
  preview: { kind: 'section' },
  fonts: ['Martian Mono:wdth,wght@75..112.5,100..800'],
  brief: {
    layout:
      'A stone-200 frame around one grid inside a 4px black border; the grid has a black background that shows through 4px gaps as the rules. On desktop it has 12 columns: a full-width status bar (logo and wordmark on the left, "11 regions up" with an orange square on the right); the headline cell (8 columns) beside a six-row spec sheet (4 columns) whose rows stretch to fill the cell; then three equal cells: the pitch with a docs link, a black terminal, and the orange call to action.',
    style:
      'Martian Mono throughout; no radius and no soft shadows. Headline: extrabold, uppercase, 75% width, -0.04em tracking, 0.9 line height, 112px from 1280px, capped at 11ch so it always breaks as "Bare metal, / billed by / the second." Cells are stone-200 with black text; spec labels are uppercase stone-600, values semibold and right-aligned, rows split by 2px black rules. Terminal: a black cell with 13px text at 87.5% width, a white command, stone-300 output and an orange-400 last line. Call to action: a whole orange-500 cell with a small uppercase note at the top and a 36px extrabold condensed label with a thick arrow at the bottom.',
    states:
      'The call-to-action cell inverts on hover (black fill, orange-500 text) and its arrow moves 4px right; on keyboard focus it shows a 4px outline in its text colour (black, or orange-500 while hovered, so it stays visible on the black fill) inset 8px. The docs link has a 2px underline, inverts to black with stone-200 text on hover, and shows a 3px black outline offset 2px on focus.',
    responsive:
      'From 640px to 1023px the grid has two columns: the bar and headline span both, then pitch beside call to action, then spec sheet beside terminal. Below 640px it is one column in the order bar, headline, pitch, call to action, spec sheet, terminal. The headline steps from 48px to 72px (640px), 96px (1024px) and 112px (1280px); the frame padding steps from 12 to 20 to 24px. From 1024px the cells\' side padding grows from 16px to 24px (all round for the pitch, terminal and call to action; the headline cell\'s top and bottom padding grows from 40 and 32px to 56 and 40px), the terminal text from 12px to 13px and the call-to-action label from 30px to 36px.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
