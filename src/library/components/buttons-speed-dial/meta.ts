import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-speed-dial',
  name: 'Buttons — Floating action button with speed dial',
  category: 'buttons',
  tags: ['layered', 'icons', 'stacked'],
  description: 'A round primary button floats in the corner of a screen and opens a short column of labeled round actions above it. Use on a mobile or content-heavy screen where a few creation actions must stay one tap away.',
  preview: { kind: 'element' },
  wireframe: `┌────────────────────────────────────────┐
│ Page content                           │
│ Scrolls beneath the floating button.   │
│                                        │
│                 [Invite member  Icon]  │
│                   [Upload file  Icon]  │
│                   [Create item  Icon]  │
│                               ┌────┐   │
│                               │ x  │   │
│                               └────┘   │
└────────────────────────────────────────┘`,
  brief: {
    layout: 'A 288px (w-72) by 320px (h-80) neutral-50 surface with a neutral-200 border and rounded-lg corners stands in for the screen and widens to 320px (sm:w-80). A details element sits absolute, 16px from the right and bottom. Its summary is a 56px (size-14) rounded-full neutral-900 button with shadow-lg and a 24px plus glyph. The open list sits 16px above it, right-aligned and inset 8px so its 40px icon circles center on the button, with 12px gaps. Each action pairs a white rounded-md label chip (px-2.5, py-1, 14px medium) with a white 40px rounded-full icon circle, 12px apart, both with a neutral-200 border and shadow-sm.',
    hierarchy: 'The floating button is the strongest element and is named Quick actions. Actions read from the button upward: Create item, Upload file, then Invite member, so the most common action is nearest and comes first in tab order. Labels are visible and name each button; the 20px icons are decorative. Keep three to five actions with labels under 3 words. The page copy at the top is a slot for the content the button floats over.',
    states: 'The details starts open; Enter or Space on the summary opens and closes it, and the plus glyph rotates 45 degrees into a close mark over 150ms, with no transition under reduced motion. The summary fills neutral-700 on hover; each action fills its icon circle neutral-100 on hover. The summary and every action draw the standard 2px neutral-900 focus outline offset 2px, the actions as a pill around chip and circle. Closing on an outside click or Escape needs host script.',
    responsive: 'The surface is 288px wide below 640px and 320px from 640px; its height stays 320px. The button and its actions keep their size and stay pinned to the bottom-right corner. In a page, position the details fixed at bottom-6 right-6 instead of inside a surface.',
    usage: 'Use for a few frequent creation actions on a screen with no room for a toolbar. Pick buttons-split-menu when the actions belong next to a visible main action, or buttons-command-tiles when the choices need descriptions. Variations: hide the labels and keep only the circles, use a single floating button with no list, or extend the button into a pill with a short label.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
