import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-share-popover',
  name: 'Dropdowns — Share popover with access list',
  category: 'dropdowns',
  tags: ['layered', 'form', 'list', 'compact'],
  description: 'A Share button opens a popover with an email invite row, a list of people with access and their roles, and a link-access footer with a copy action. Use to share a document or record with named people and by link.',
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│                                   [Icon Share ^]     │
│ ┌──────────────────────────────────────────────┐     │
│ │ Share this item                              │     │
│ │ [Add people by email              ] [Invite] │     │
│ │ People with access                           │     │
│ │ AR  Alex Rivera                        Owner │     │
│ │     alex@example.com                         │     │
│ │ SL  Sam Lee                       [Editor v] │     │
│ │     sam@example.com                          │     │
│ ├──────────────────────────────────────────────┤     │
│ │ Icon Anyone with link can view   [Copy link] │     │
│ └──────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A relative 288px (w-72) by 376px (h-[23.5rem]) root grows to 384px (sm:w-96) wide at 640px. A right-aligned 44px outlined Share summary has a 16px share icon, the label and a 16px chevron with 8px gaps. The full-width panel sits 8px below it, with rounded-lg corners, a neutral-200 border, 16px padding and shadow-lg. A 14px semibold title leads an invite row 12px below: a flexible 40px email input and a 44px primary Invite button with an 8px gap. A 12px heading leads two people rows 16px below, each a 40px initials avatar, a 12px gap, a name and email column and a right-aligned role. A footer with a top border and 16px spacing holds a 16px globe icon, the link-access sentence and a 44px secondary Copy link button.',
    hierarchy: 'Read Share, the panel title and the invite row, then People with access, each person and their role, and the link-access footer. Names use up to 3 words in 14px medium text over a 12px neutral-500 email; the owner shows a plain Owner label and other people a native role select. The title uses up to 4 words and the link-access sentence up to 6. The input has a hidden label; each role select is named for its person.',
    states: 'The details is open by default and its chevron rotates 180 degrees while open. Share and Copy link hover neutral-50, Invite hovers neutral-700, and every control, including the input and role select, shows a 2px neutral-900 outline offset 2px on keyboard focus. The role select starts on Editor, offers Viewer, and opens the platform option list. Host script sends invites, applies role changes and confirms the copied link; no disabled states are shown.',
    responsive: 'The root and panel grow from 288px to 384px at 640px. Below 640px the email field narrows, names and emails truncate beside the role and the link-access sentence wraps to two lines next to Copy link. Row heights, the avatar size and the 376px reserve stay the same.',
    usage: 'Use to share one item with named people and by link from a toolbar. Choose dropdowns-account-menu for account destinations or dropdowns-workspace-switcher to change the active workspace. Variations: add a general access select in the footer, list a third person, or replace the invite row with a read-only link field and Copy button.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
