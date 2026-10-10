import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-report-export',
  name: 'Dropdowns — Report export',
  category: 'dropdowns',
  tags: ['brutalist', 'light'],
  description:
    'A bold report export disclosure with three file-format actions and a native source-data opt-in.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide native details disclosure with 16px padding and a 2px border, initially open. A 44px summary has a label left and arrow right with 12px gaps and horizontal padding. A report identifier follows after 16px. Three full-width 44px format buttons begin after 12px, with extensions left and purpose plus a 12px icon right. A source-data checkbox row follows after 16px with a 16px checkbox and 10px gap. A generated-date line follows after 12px.',
    style:
      'Default sans font, black text on white and square corners throughout. The summary has a 2px black border and lime-300 fill, 14px black-weight uppercase text and an 18px system monospace arrow. Report and generated-date lines use 9px system monospace; report is uppercase and date uses stone-600. Format buttons have 8px horizontal padding, 12px text and bold monospace extensions. Format region has a 2px top rule, 1px separators and 2px final bottom rule, all black. Purpose labels use 8px icon gaps. Checkbox row has 10px text. No shadows.',
    states:
      'Native summary opens and closes with pointer, Enter or Space; its arrow rotates 180 degrees while open. Format actions fill lime-100 on hover. Native checkbox independently toggles source-data opt-in with black accent and retains a visible checked mark in forced colours. Every control has a 2px slate-900 focus outline offset 2px. Export buttons are static action affordances for the host to wire. No animation.',
    responsive:
      'The disclosure stays 288px wide at 320px, 390px, 768px and 1440px. All format rows stay in two columns within the fixed card; no breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
