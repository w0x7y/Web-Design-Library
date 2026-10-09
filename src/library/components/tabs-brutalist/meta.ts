import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-brutalist',
  name: 'Tabs — Brutalist',
  category: 'tabs',
  tags: ['brutalist'],
  description:
    'Three brutalist tab styles for an art school\'s degree show, drawn in their selected states: folder tabs that open into a bordered panel, a black-ruled filter grid with counts whose current cell is inverted, and a view switch of hard-shadowed blocks where the current one is pressed in. Each is a <nav> of links marked with aria-current, so it is static and works without JavaScript. Use them for section, filter or view navigation on loud editorial and portfolio sites.',
  preview: { kind: 'element' },
  fonts: ['Epilogue:wght@100..900'],
  brief: {
    layout:
      'A flex column 288px wide (544px from 640px) with 24px gaps (28px from 640px), holding three variants. 1) Folder tabs: a <nav aria-label="Degree show"> with a flex <ul role="list"> of three links (Works, Artists, Events), each 44px tall with 12px side padding (16px from 640px) and a 3px border. Each tab after the first overlaps the one before by 3px (margin-left −3px), and every tab overlaps the panel below by 3px (margin-bottom −3px). The panel has a 3px border and 16px padding (20px from 640px): "128 works", then a one-line note 8px below. 2) Filter grid: a <nav aria-label="Filter by discipline"> with a <ul role="list"> grid of two columns (four from 640px) inside a 3px black border, with 3px gaps over a black background so the gaps draw the rules. Each cell is a 48px link with 12px side padding, the label on the left and its count on the right. 3) View switch: a <nav aria-label="View"> with a flex row of three links 10px apart (12px from 640px), each 40px tall with 12px side padding (16px from 640px), a 16px icon and the label 8px apart.',
    style:
      'Epilogue throughout, antialiased: black on white, with stone-200 and one blue-800 accent. Every tab label is 13px extrabold uppercase with 0.025em tracking. Folder tabs: stone-200 fill. The current tab (aria-current="page") is white, has no bottom border and 3px of bottom padding so it opens into the white panel, sits above it (z-index 10) and has a 5px blue-800 bar along its top, drawn as an inset box-shadow. Panel title 28px black weight, line height 1, −0.025em tracking; note 14px. Filter cells: white, with medium-weight tabular counts; the current cell (aria-current="true") is black with white text. View blocks: white with a 3px black border and a 4px 4px 0 black shadow; the current block (aria-current="true") is blue-800 with white text, shifted 4px right and 4px down with no shadow, so it reads as pressed in. The icons are aria-hidden fills: four squares (Grid), three bars (List) and a floor plan (Plan).',
    states:
      'Static: the selected state is drawn, not managed. The current item is set with aria-current and every selected-state style follows that attribute, so moving aria-current moves the styling. The links navigate (tabs as navigation), which is why they need no tablist semantics. To switch panels in place instead, convert a set to the WAI-ARIA tabs pattern: role="tablist", role="tab" with aria-selected and aria-controls, role="tabpanel", a roving tabindex and arrow-key handling. Hover (devices with hover only): stone-200 folder tabs turn white, and filter cells and view blocks turn stone-200; current items keep their colours. Keyboard focus: a 3px blue-800 outline offset 2px, with the focused item raised above its neighbours (z-index 20 for folder tabs, 10 for filter cells) so the whole ring shows. There are no transitions; changes are instant.',
    responsive:
      'Below 640px: 288px wide with 24px between variants, 12px side padding on folder tabs and view blocks, 16px panel padding, and the filter grid in two rows of two. From 640px: 544px wide with 28px between variants, 16px side padding on folder tabs and view blocks, 20px panel padding and the filter grid in one row of four.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
