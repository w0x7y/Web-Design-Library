import type { ComponentMeta } from '../../types'

export default {
  slug: "dropdowns-account-menu",
  name: "Dropdowns — Account menu with profile header",
  category: "dropdowns",
  tags: ["layered", "icons", "compact"],
  description: "A right-aligned avatar disclosure opens a profile header, account links and a separate sign-out action. Use for compact signed-in account navigation.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│                            [AR Alex Rivera ^]        │
│                  ┌────────────────────────────┐      │
│                  │ Alex Rivera                │      │
│                  │ name@example.com           │      │
│                  ├────────────────────────────┤      │
│                  │ Icon [Profile]             │      │
│                  │ Icon [Account settings]    │      │
│                  │ Icon [Help center]         │      │
│                  ├────────────────────────────┤      │
│                  │ Icon [Sign out]            │      │
│                  └────────────────────────────┘      │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A relative 288px (w-72) by 288px (h-72) root grows to 320px (sm:w-80) wide at 640px. A right-aligned 44px ghost trigger has a standard 40px initials avatar, 8px gaps, a name and 16px chevron. The 256px (w-64) panel sits 8px below, aligned to the right, with rounded-md corners, 1px border, 4px padding and shadow-lg. Its profile header uses 12px horizontal and 8px vertical padding. Three 36px links and a 36px full-width sign-out button have 16px icons and 8px gaps.",
    hierarchy: "The avatar and name identify the account. Inside the panel read the 14px semibold name, 14px email, account destinations and Sign out. Names use up to 3 words, emails up to 28 characters and destination labels up to 3 words. Profile has aria-current=page and medium text; navigation uses a role=list list.",
    states: "The details is open by default, and its chevron rotates 180 degrees while open. The trigger hovers neutral-50 and has a 2px neutral-900 focus outline offset 2px. Links and Sign out hover neutral-100 and have a 2px inset outline. Summary activation toggles the panel. No disabled destinations are shown. The sign-out button is a host action slot.",
    responsive: "Below 640px the trigger shows the avatar and chevron, with the account name sr-only so it remains the accessible name. At 640px the name becomes visible and the root grows from 288px to 320px. The panel stays 256px wide and right aligned.",
    usage: "Use for signed-in account destinations and session actions. Choose dropdowns-action-menu for record commands or dropdowns-nav-flyout for public navigation. Variations: add a short account role to the header, substitute a different current destination, or omit the help link.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
