import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-team-members',
  name: 'Settings — Team members with invite form',
  category: 'settings',
  tags: ['stacked', 'list', 'form'],
  description:
    'An invite form with email and role above a member list where each member except the owner has a role select and a named remove action, plus a pending invitation row. Use for managing who belongs to a workspace and what they can change.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Team members                              4 of 10 seats used │
│ Lede                                                         │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ Invite people                                            │ │
│ │ Email addresses                Role                      │ │
│ │ [name@example.com           ]  [Member v]  [Send invite] │ │
│ │ Hint                                                     │ │
│ └──────────────────────────────────────────────────────────┘ │
│ Members                                 3 members, 1 pending │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ AR  Alex Rivera (You) / email  Owner                     │ │
│ ├──────────────────────────────────────────────────────────┤ │
│ │ JL  Jordan Lee / email         [Admin  v]  [Remove]      │ │
│ ├──────────────────────────────────────────────────────────┤ │
│ │ ST  Sam Taylor / email         [Member v]  [Remove]      │ │
│ ├──────────────────────────────────────────────────────────┤ │
│ │ ..  Invited email  Pending     [Viewer v]  [Revoke]      │ │
│ │     Sent date, expiry  Resend                            │ │
│ └──────────────────────────────────────────────────────────┘ │
│ Role summary note                                            │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'An 896px max-w-4xl shell with 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. The header places the heading and lede beside a seat count from 640px. A neutral-50 bordered rounded-lg p-6 invite form follows after 40px. The Members heading starts 48px below the form, with its count on the same line, and one bordered rounded-lg list with divided rows starts 16px below it. From 640px the invite fields and every member row share sm:grid-cols-[minmax(0,1fr)_9rem_8rem] with 24px column gaps and 24px side padding, so the role selects and actions line up in columns. Rows use 16px vertical padding; identities pair a 40px avatar with name and email at a 12px gap.',
    hierarchy:
      'The 30px heading, 36px from 640px, and 18px lede lead to a 14px seat count. The 16px Invite people title precedes the email field, role select, Send invite and a 14px hint. The 18px Members heading carries a 14px count. Each row reads initials, 14px semibold name and 14px email, then role and action. The owner row shows the role as text with no action. The pending row swaps the initials for a dashed mail glyph, shows the invited email with a Pending badge, the sent and expiry dates and a Resend link. A 14px note summarizes the roles. Slots: lede 14 words, names 24 characters, emails 32, hint 14 words, note 18 words.',
    states:
      'Primary actions fill neutral-700 on hover; secondary actions fill neutral-50. Controls have 2px neutral-900 focus-visible outlines offset 2px. Buttons are 44px tall with 6px rounded-md corners; the invite email field, the invite role select and the row selects are 40px. Color transitions take 150ms. The email field accepts several comma-separated addresses and is tied to its hint with aria-describedby. Each row select has a visually hidden label naming the member, and each Remove, Revoke and Resend names its member or invitation. The owner role cannot be changed in place. Native selects show the current role; saving, sending and removing need application code. No disabled controls.',
    responsive:
      'Below 640px the header stacks, the invite email, role and full-width Send invite stack, and each member row puts the identity on its own line with the role select and a 112px action below it. From 640px the invite fields sit in three columns and the select and action in each row move under the Role and Send invite columns, still below the identity. From 768px each member is a single row. Emails break anywhere to fit 320px, and the Pending badge wraps under a long invited address.',
    usage:
      'Use for workspace or project membership with a handful of roles. Pick data-table-stacked-cards for a read-only directory, settings-master-detail when each member has many permissions, or data-table-toolbar-pagination for hundreds of members. Variations: add a last-active column, replace the role select with a team select, or move invitations into their own list below members.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
