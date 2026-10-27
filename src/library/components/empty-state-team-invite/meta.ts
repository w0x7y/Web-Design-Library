import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-team-invite',
  name: 'Empty state — Empty team with inline invite',
  category: 'empty-state',
  tags: ['centered', 'form'],
  description: 'A centered no-members message above an inline invite form with email, role and send action, plus a shareable invite link. Use when a workspace or team has no other members and inviting them is the next step.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│                        ( )  ( )  ( )                         │
│                       No teammates yet                       │
│                    Invitation explanation                    │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ Email addresses              Role                      │  │
│  │ [name@example.com          ] [Member v] [Send invite]  │  │
│  │ Hint for several addresses                             │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │ Invite link note                    [Copy invite link] │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'White section with a 768px max-w-3xl container, 24px px-6 side gutters and 64px py-16 vertical padding, 96px sm:py-24 from 640px. A centered header shows three 40px dashed rounded-full slots with 8px gaps (person, plus, person glyphs), the headline 24px below them and a 576px max-w-xl lede 16px below that. A rounded-lg card with a neutral-200 border follows after 40px. Its form has 24px padding: a flexible email field, a 144px w-36 role select and the send button sit in one row aligned to the bottom with 16px gaps, with the hint 12px below. A bordered footer with 24px by 16px padding pairs the invite link note with a secondary Copy invite link button.',
    hierarchy: 'Read the empty avatar slots, the 30px headline (36px from 640px), the lede, then the email field, role and Send invite, which is the only primary action. The link footer is the secondary route. Labels are 14px medium above 40px fields; the button is 44px. Slots: headline up to 5 words, lede 22, hint 14, link note 18, role options 1 word each. Keep three to five roles in the select.',
    states: 'The input, select and both buttons show a 2px neutral-900 focus-visible outline offset 2px. Send invite hovers to neutral-700 and Copy invite link to a neutral-50 fill with the default 150ms transition. The email input is required and accepts several comma-separated addresses; the hint is tied to it with aria-describedby. After a copy, change the button label to Link copied for a few seconds; after sending, list the pending invitations in place of the empty message.',
    responsive: 'Below 640px the email field, role select and Send invite stack full width with 16px gaps, and the link note stacks above a full-width Copy invite link button. From 640px the form becomes one row with the select fixed at 144px and the button at its natural width, the footer becomes a row with the note left and the button right, the headline grows to 36px and vertical padding to 96px.',
    usage: 'Use for a team, workspace or project page that has only its owner. Pick empty-state-permission when the person lacks access, and empty-state-starting-paths when content rather than people is missing. Variations: drop the role select when every invitee gets the same role, replace the link footer with a domain sign-up setting, or add an Import from directory secondary action.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
