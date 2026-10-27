import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-notification-panel',
  name: 'Dropdowns — Notification panel with unread items',
  category: 'dropdowns',
  tags: ['layered', 'list', 'compact'],
  description: 'A bell button with an unread dot opens a panel with a mark-all action, three notifications marked read or unread, and a footer link to the full list. Use for in-app notifications behind a top-bar bell.',
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│                                          [Bell *]    │
│        ┌────────────────────────────────────────┐    │
│        │ Notifications       [Mark all as read] │    │
│        ├────────────────────────────────────────┤    │
│        │ AR  Name replied to your comment     * │    │
│        │     Item title | 5 min ago             │    │
│        ├────────────────────────────────────────┤    │
│        │ SL  Name assigned you a task         * │    │
│        │     Project name | 1 hour ago          │    │
│        ├────────────────────────────────────────┤    │
│        │ JK  Name shared a document             │    │
│        │     Folder name | Yesterday            │    │
│        ├────────────────────────────────────────┤    │
│        │        [View all notifications]        │    │
│        └────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A relative 288px (w-72) root reserves 384px (h-96); at 640px it grows to 384px wide (sm:w-96) and reserves 336px (sm:h-[21rem]). A right-aligned 44px (size-11) ghost bell button carries an 8px unread dot with a 2px white ring at its top right. The full-width panel sits 8px below it, with rounded-lg corners, a neutral-200 border and shadow-lg. A header row with 16px horizontal and 12px vertical padding holds the title and a text action. A divided list holds three linked rows with the same padding: a 32px initials avatar, a 12px gap, the text column and an 8px unread dot aligned to the first line. A neutral-50 footer with a top border centers one link.',
    hierarchy: 'Read the bell, then Notifications and Mark all as read, then each notification: the actor name in 14px semibold neutral-900 followed by the action in neutral-600, and a 12px neutral-500 line with the item name and a relative time in a time element. Actor names use up to 3 words, actions up to 5 words and item names up to 3 words. Unread rows add a dot and a hidden "Unread" prefix; the bell has a hidden label with the unread count. View all notifications ends the panel.',
    states: 'The details is open by default and summary activation toggles the panel. The bell hovers neutral-50 and shows a 2px neutral-900 outline offset 2px on keyboard focus. Notification rows hover neutral-50 and show a 2px inset outline so it stays inside the panel. Mark all as read and View all notifications are underlined text links that hover neutral-600 with offset outlines. Two rows start unread and one read; dots paint CanvasText in forced colors. Host script clears the dots, the bell dot and the hidden count when items are read.',
    responsive: 'Below 640px the root and panel are 288px wide, longer actions wrap to a second line and the root reserves 384px. From 640px the root is 384px wide, each action fits on one line and the reserve drops to 336px. Avatars, dots, the header and the footer keep their sizes.',
    usage: 'Use for a short feed of recent in-app events behind a top-bar bell. Choose dropdowns-account-menu for account destinations or dropdowns-action-menu for commands on one item. Variations: replace avatars with icon tiles for system events, add All and Unread links to the header, or show a one-line empty message when nothing is new.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
