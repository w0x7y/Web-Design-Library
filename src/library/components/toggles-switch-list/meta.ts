import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-switch-list",
  name: "Toggles — Settings list with switches",
  category: "toggles",
  tags: ["list","form","compact"],
  description: "A compact settings card lists four labelled switches with supporting hints and one managed setting. Use it when each preference takes effect independently.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│ Settings title                               │
│ Short settings guidance                      │
│ ──────────────────────────────────────────── │
│ Setting name                           [-o]  │
│ One-line hint                                │
│ ──────────────────────────────────────────── │
│ Preference label                       [o-]  │
│ Purpose of the preference                    │
│ ──────────────────────────────────────────── │
│ Option title                           [-o]  │
│ Short option description                     │
│ ──────────────────────────────────────────── │
│ Locked setting                         [o-]  │
│ Managed by an admin                          │
└──────────────────────────────────────────────┘`,
  brief: {
  "layout": "A white card is 288px (w-72) wide, widening to 416px (sm:w-[26rem]), with rounded-lg and a 1px neutral-200 border. A px-4 py-3 header has a 14px semibold title and 14px supporting line after 4px. Four flex rows use px-4 py-3, items-center, justify-between and a 16px gap; all but the first have a top hairline. Left columns pair 14px medium labels with 12px hints after 2px. Right controls are 44×24px tracks with 20px knobs, 1px neutral-300 borders and rounded-full.",
  "hierarchy": "Read the header, then each setting label and its one-line hint before its switch. Labels take up to three words, hints up to 28 characters. The fourth label leads with a 14px lock icon and the hint Managed by an admin. Each switch has a unique id and aria-describedby linking its hint; title labels and switch labels both toggle enabled controls.",
  "states": "First and third switches start checked. Tracks fill neutral-200 off and neutral-900 on; knobs translate 20px on check. Enabled hover fills neutral-300 off and neutral-700 on. Keyboard focus outlines the track through peer-focus-visible, 2px neutral-900 offset 2px. The managed switch is native disabled; its text and track are 50% opaque and its label has a not-allowed cursor. Knob transitions last 150ms and respect reduced motion. Forced-colors mode uses ButtonText track borders and CanvasText knobs.",
  "responsive": "Below 640px the card is 288px wide; from 640px it is 416px. Rows retain their spacing and switch dimensions; short hints remain one line at mobile width. Card height is 322px at both widths.",
  "usage": "Use for independent binary preferences with short explanations. Pick toggles-checkbox-nested when sub-options should be revealed by a parent. Variations: group switches under a second header, show all settings enabled, or add an explicit reason for each disabled control. No structural deviation from the inventory."
},
  addedAt: '2026-10-10',
} satisfies ComponentMeta

