import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-api-keys',
  name: 'Settings — API keys with one-time reveal',
  category: 'settings',
  tags: ['stacked', 'table', 'compact'],
  description:
    'A key list with masked values, scope badges, dates and named revoke actions, below a callout that shows a new secret once. Use for managing workspace API keys or access tokens.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ API keys                                        [Create key] │
│ Lede                                                         │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ Key icon  New key created                                │ │
│ │ Copy-once hint                                           │ │
│ │ Key name                                                 │ │
│ │ [key_7Hq2Lm9Xc4Rt8Vb1Nz6Wd3Ys5Pk0Ja7d3f     ] [Copy key] │ │
│ └──────────────────────────────────────────────────────────┘ │
│ Active keys                                           3 keys │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ Name        Key          Scope   Created  Last used      │ │
│ ├──────────────────────────────────────────────────────────┤ │
│ │ Deploy      key_...7d3f  Write   Today    Never [Revoke] │ │
│ ├──────────────────────────────────────────────────────────┤ │
│ │ Server      key_...4f2a  Write   Mar 14   2h ago [Revoke]│ │
│ ├──────────────────────────────────────────────────────────┤ │
│ │ Analytics   key_...9c1e  Read    Feb 2    1d ago [Revoke]│ │
│ └──────────────────────────────────────────────────────────┘ │
│ Revocation note  Authentication guide link                   │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 1024px max-w-5xl shell with 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. The header places the heading and lede beside a Create key action from 640px. A neutral-50 bordered rounded-lg p-6 callout follows after 40px, holding a read-only mono field and a Copy key action. The Active keys heading starts 48px below the callout. From 1024px a bordered rounded-lg box holds a neutral-50 column header row and divided rows on one grid, lg:grid-cols-[minmax(0,1fr)_10rem_8rem_7rem_7rem_6rem], with 24px gaps, 24px horizontal and 16px vertical row padding. The description list in each row spans the four middle columns as a subgrid.',
    hierarchy:
      'The 30px heading, 36px from 640px, and 18px lede lead to the primary Create key action. The callout reads icon and 16px title, then a 14px hint, the key name label and the full secret in 14px mono. The 18px Active keys heading carries a 14px count. Each key shows a 14px semibold name, the masked value in mono with only the last four characters readable, a scope badge, created and last-used dates in neutral-600, then Revoke. Slots: lede 14 words, key name 24 characters, hint 18 words, scope 3 words, note 12 words.',
    states:
      'Primary actions fill neutral-700 on hover; secondary actions fill neutral-50. Controls have 2px neutral-900 focus-visible outlines offset 2px. Buttons are 44px tall and the secret field is 40px, all with 6px rounded-md corners. Color transitions take 150ms. The secret field is read-only and tied to its hint with aria-describedby. Each Revoke names its key in its accessible label. Masked bullets are hidden from assistive technology, which hears "ending in" and the last four characters. The column header row is visual only; each row keeps its own labels. A never-used key reads Never. Creating, copying and revoking need application code.',
    responsive:
      'Below 640px the header stacks, the secret field sits above a full-width Copy key action, and each key is a bordered card with the name, four label and value rows split left and right, then a full-width Revoke. From 640px the name and Revoke share the first row of the card and values sit under their labels in two columns, four from 768px. From 1024px the cards join into one bordered table-like list, the labels become screen-reader only and the column header row appears. Everything fits 320px.',
    usage:
      'Use for API keys, personal access tokens or webhook secrets with a few entries. Pick settings-session-list for signed-in devices or data-table-toolbar-pagination for dozens of keys. Variations: add an expiry column, replace the scope badge with an environment badge, or open the Create key action as a form with name and scope fields.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
