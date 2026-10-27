import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-tree-rows',
  name: 'Data table — Tree with nested group rows',
  category: 'data-table',
  tags: ['table', 'list', 'numbers'],
  description:
    'Collapsible group rows nest subgroups and line items, and each group shows the sum of its children and a child count. Use for budgets, account charts or folder sizes where totals roll up through more than one level.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Spending by group                                            │
│ Lede                                                         │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ Name                            Budget   Spent Remaining │ │
│ ├──────────────────────────────────────────────────────────┤ │
│ │ v Group label  2 subgroups     $20,500 $15,000    $5,500 │ │
│ │   v Subgroup label  3 items    $12,500  $9,300    $3,200 │ │
│ │       Line item label           $6,000  $4,250    $1,750 │ │
│ │       Second line item          $4,500  $3,900      $600 │ │
│ │       Third line item           $2,000  $1,150      $850 │ │
│ │   > Second subgroup  2 items    $8,000  $5,700    $2,300 │ │
│ │ > Second group  2 subgroups    $14,000  $9,800    $4,200 │ │
│ │ > Third group  2 items          $9,500  $8,100    $1,400 │ │
│ ├──────────────────────────────────────────────────────────┤ │
│ │ Total                          $44,000 $32,900   $11,100 │ │
│ └──────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 1152px max-w-6xl section with 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. The lede is a 672px max-w-2xl paragraph 16px below the heading, and a rounded-lg bordered tree starts 32px below it. A neutral-50 column strip, every row and a neutral-50 total row share one grid: a flexible Name column and an 80px Spent column below 640px, then Name plus three 96px columns for Budget, Spent and Remaining, with 16px column gaps, 16px side padding and 12px vertical padding. Neutral-200 hairlines separate rows. Each nested level indents by 24px (16px below 640px). From 640px a child chevron sits directly under the name of its parent. Line items have no chevron, and their names start where a chevron-led name at the same level would.',
    hierarchy:
      'The 30px heading, 36px from 640px, and a 20px lede say that groups open. Weight tracks depth: top-level groups use 14px semibold names and figures, subgroups medium, and line items regular names with neutral-600 figures. A 12px neutral-500 child count follows each group name. Group figures are the sums of their children, and the total row sums the top-level groups. Each figure carries a visually hidden Budget, Spent or Remaining label, so screen readers hear the column with the value. Slots: lede 16 words, group names 24 characters, line item names 32, counts 12, figures 7 characters.',
    states:
      'Each group row is a native details summary with a 16px neutral-500 chevron that turns 90 degrees when open. Each chevron turns only when its own row opens, so opening a group leaves the chevrons of its children unchanged. The first group and its first subgroup start open; the others start closed, with their rows hidden until opened. Summaries fill neutral-50 on hover with a 150ms color transition and show a 2px neutral-900 focus-visible outline offset 2px. Enter or Space toggles a group. Line items and the total row are static, with no selected or disabled states.',
    responsive:
      'Below 640px Budget and Remaining leave the column strip and every row, so Name and Spent remain; indentation drops to 16px per level, long names wrap, and counts move to a second line. From 640px all four columns show. The tree fits 320px without horizontal scrolling. Section padding and heading size increase at 640px.',
    usage:
      'Use when figures roll up through nested groups and readers need both the totals and the rows behind them. Pick data-table-grouped-sections for one flat level of groups that never collapse, or data-table-expandable-rows when a row opens into detail fields rather than child rows. Variations: a folder tree with file counts and sizes, an account chart with debit and credit columns, or a third level of nesting indented one more step.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
