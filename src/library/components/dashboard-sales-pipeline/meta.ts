import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-sales-pipeline',
  name: 'Sales pipeline overview',
  category: 'dashboard',
  tags: ['minimal', 'light'],
  description:
    'A sales dashboard with stage values, priority opportunities and target progress. Use it for a compact CRM overview.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px CRM overview with 40px vertical and 24px horizontal padding. A wrapping header has 16px gaps, a 30px title and a month pill with 4px vertical and 12px horizontal padding. Four stage cards follow after 28px with 16px gaps, 20px padding and 8px internal gaps. Opportunity and target panels follow after 32px with 32px gaps. Three opportunity rows have 20px gaps and bottom padding, 12px wrapping name-to-value gaps and 8px name-to-description gaps. The target has a 2px left rule, 24px left padding and a 12px-high native meter.',
    style:
      'Default sans font on white with zinc-950 ink. Zinc-50 stage cards have 8px radii; the won stage uses emerald-50 with emerald-950 text. Title and stage amounts are 30px semibold with 36px line height and -0.025em tracking; amounts use tabular figures. Labels and hints use 12px text at 70% opacity. Zinc-500 opportunity metadata and target label, zinc-200 list rules, emerald-700 target rule and meter fill. The target amount is 24px semibold; the month pill uses stone-100 fill and stone-700 text. No shadow.',
    states:
      'The 14px medium forecast link has a 4px underline offset and a 2px current-color keyboard focus outline offset by 2px. The native meter has the accessible name Monthly sales target progress and displays 66% of target on a 12px-high rounded emerald-100 track with emerald-700 fill. The fill uses the system Highlight color in forced-colors mode. No hover change or animation.',
    responsive:
      'Stages stack below 640px, use two equal columns from 640px and four from 1024px. Opportunity list and target panel stack below 1024px, then split 1.5fr/1fr. Horizontal padding increases from 24px to 48px at 640px. Opportunity amounts wrap beside names with 12px gaps; all copy reflows at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
