import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-password-requirements',
  name: 'Inputs — Password with strength and requirements',
  category: 'inputs',
  tags: ['stacked', 'list', 'form', 'icons', 'compact'],
  description: 'A new-password field with an attached Show action sits above a four-segment strength meter and a checklist of requirements in met and unmet states. Use when people create or change a password against stated rules.',
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ New password                                                 │
│ ┌─────────────────────────────────────────────────┬────────┐ │
│ │ **********                                      │ [Show] │ │
│ └─────────────────────────────────────────────────┴────────┘ │
│ #### #### #### ----                           Strength: Good │
│ Circle  At least 12 characters  Check  One uppercase letter  │
│ Check   One number              Check  One symbol            │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A 288px (w-72) root grows to 416px (sm:w-[26rem]) at 640px. A 14px medium label sits 6px above a 40px field wrapper with a 1px neutral-300 border and 6px radius; the input flexes and a Show button with a 16px eye icon is attached on the right behind a left divider. 12px below, a flexible four-column meter with 4px gaps and 6px full-radius segments sits 12px from a 12px Strength label. The requirements list starts 16px lower as a grid with 8px gaps; each row has a 16px status icon 8px before 14px text.',
    hierarchy: 'Read New password, the masked value, Show, the strength label, then the requirements. Met rows use a check in a circle and neutral-900 text; unmet rows use an empty neutral-400 circle and neutral-500 text, and every row starts with a screen-reader Met or Not met. The input is described by the strength label and the list. The sample value meets three of the four rules, so three segments are filled. Keep each requirement under 5 words and the strength label to 2 words.',
    states: 'Focus in the input outlines the whole wrapper by 2px neutral-900 offset 2px through has-[input:focus-visible]; the input uses focus-visible:outline-hidden, which keeps a transparent outline for forced-colors mode. Show fills neutral-50 on hover and has the standard focus outline. Filled segments are neutral-900 and empty ones neutral-200; in forced-colors mode filled segments paint CanvasText and empty ones keep a CanvasText border. Revealing the password, scoring strength and updating each rule belong to the host.',
    responsive: 'At 640px the root grows from 288px to 416px and the requirements switch from one column to two equal columns, so the four rules take two rows. The field, meter height and strength label keep their sizes; the segments stretch with the width.',
    usage: 'Use on sign-up, password change and reset forms. Pick inputs-field-anatomy for a sign-in password that needs only a label and a hint. Variations: drop the meter and keep the checklist, add a confirm-password field below, or replace Show with an icon-only toggle.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
