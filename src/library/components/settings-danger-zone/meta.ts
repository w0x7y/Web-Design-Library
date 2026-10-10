import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-danger-zone',
  name: 'Settings — Danger zone',
  category: 'settings',
  tags: ['stacked', 'list', 'form'],
  description:
    'A separate workspace-action card with explicit consequences and an expandable deletion confirmation. Use to keep irreversible actions clearly labelled and away from everyday settings.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌────────────────────────────────────────────────────────┐
│ Workspace actions                                      │
│ Description                                            │
│ Danger zone                                            │
│ ────────────────────────────────────────────────────── │
│ Transfer ownership        [Transfer ownership]         │
│ Consequence description                                │
│ ────────────────────────────────────────────────────── │
│ Archive workspace         [Archive workspace]          │
│ Consequence description                                │
│ ────────────────────────────────────────────────────── │
│ Delete workspace          [Delete workspace]       v   │
│ Consequence description                                │
│   Warning icon: irreversible consequence               │
│   Type the workspace name to confirm                   │
│   [Workspace name                         ]            │
│   [Delete permanently]                                 │
└────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 768px max-w-3xl column with 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A bordered rounded-lg card starts 40px below the heading and lede. The title region and three divided rows each use 24px p-6. At 640px rows place description left and outlined action right. Delete uses a full-row details summary; its open panel has a top border, neutral-50 fill, 24px padding, a 20px warning icon, confirmation field and primary action.',
    hierarchy:
      'A 30px page heading, 36px at 640px, precedes an 18px lede and 18px Danger zone title. Three 16px titles identify Transfer ownership, Archive workspace and Delete workspace. Their consequences are 14px. The open panel reads warning first, then an explicit confirmation label and hint, then Delete permanently with a trash icon. Slots: lede 18 words, consequences 15, warning 25, action labels 2.',
    states:
      'Primary actions fill neutral-700 on hover; secondary actions fill neutral-50. Controls have 2px neutral-900 focus-visible outlines offset 2px. Buttons are 44px tall with 6px rounded-md corners; inputs and selects are 40px tall. Colour transitions take 150ms. Delete is closed by default. Native details opens the confirmation panel and its summary has the keyboard focus outline. Its outlined action span fills neutral-50 when the summary is hovered. Warning and trash icons carry destructive meaning with explicit wording, with no hue. The confirmation input is a static layout example; no script validates its value or deletes data. There are no disabled states.',
    responsive:
      'Below 640px each row stacks its text above a full-width action. Delete summary follows the same stacking. The open panel and confirmation field fit 320px, warning text wraps beside a fixed 20px icon, and the Delete permanently action is full-width. From 640px actions use their natural widths. Headline and section padding increase at 640px.',
    usage:
      'Use to separate ownership, archiving and irreversible deletion from ordinary preferences. Pick settings-stacked-cards for reversible account edits. Variations: require an account email as confirmation, replace archiving with access revocation, or add a download-data action before deletion.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
