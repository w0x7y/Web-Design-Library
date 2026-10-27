import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-theme-previews',
  name: "Toggles — Theme choice with previews",
  category: 'toggles',
  tags: ["grid", "form", "compact"],
  description: "Three radio options pair a miniature light, dark or split screen with the theme name and a radio indicator. Use for an appearance setting where a small picture of each theme explains the choice faster than words.",
  preview: { kind: 'element' },
  wireframe: `┌───────────────────────────────────────────────────────┐
│ Theme                                                 │
│ System matches the setting on your device             │
│ ┌───────────────┐ ┌───────────────┐ ┌───────┬───────┐ │
│ │ ────          │ │ ────          │ │ ────  │ ────  │ │
│ │ Light screen  │ │ Dark screen   │ │ Light │ Dark  │ │
│ │ [Action]      │ │ [Action]      │ │       │       │ │
│ └───────────────┘ └───────────────┘ └───────┴───────┘ │
│ (o) Light         ( ) Dark          ( ) System        │
└───────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) fieldset widens to 448px (sm:w-[28rem]). A 14px semibold legend and a 14px neutral-500 hint (mt-1) sit above a three-column grid (mt-3) with 8px gaps, 16px from 640px. Each option is a label holding a 4:3 preview frame (rounded-lg, 1px neutral-300 border, overflow-hidden) and, 8px below it, a row with a 16px radio indicator, an 8px gap and the 14px medium theme name. Each preview is a miniature screen with 8px padding and 6px gaps: a half-width title bar, two content lines and a one-third-width button pinned to the bottom. Light draws a white screen, Dark a neutral-900 screen, and System splits the frame into a light half and a dark half.",
    hierarchy: "Read the Theme legend and hint, then Light, Dark and System from left to right. Theme names are one word. Previews are decorative and aria-hidden; each native radio takes its accessible name from the visible theme name, and the fieldset shares the hint through aria-describedby.",
    states: "Light starts checked. The checked frame turns neutral-900 with a 1px ring, and its indicator darkens and shows a 6px dot through opacity, so selection does not rely on fill. Hovering an unchecked option darkens its frame to neutral-400. Keyboard focus draws a 2px neutral-900 outline offset 2px around the whole option through has-[:focus-visible]; the visually hidden radio uses focus-visible:outline-hidden, and arrow keys move between themes. In forced-colors mode frames use ButtonText, the checked frame Highlight and the dot CanvasText; the drawn screens flatten, but the frame and dot still mark the choice.",
    responsive: "Below 640px the fieldset is 288px and each preview about 91px wide by 68px tall, with 8px gaps; from 640px it is 448px with 16px gaps and previews about 139px by 104px. The three columns, preview proportions and name rows stay the same.",
    usage: "Use for an appearance or color mode setting with two to four options. Pick toggles-icon-choice-grid when an icon says enough, or toggles-radio-cards when each choice needs a description and a figure. Variations: add a high-contrast theme as a fourth option that wraps to a second row on mobile, draw a sidebar inside each preview, or add a short Default note under one name.",
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
