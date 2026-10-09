import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-command-search',
  name: 'Inputs — Command search',
  category: 'inputs',
  tags: ['dark', 'minimal'],
  description:
    'A dark search field with searchable scopes and a suggested command. Use it in a workspace command palette.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A fixed 288px zinc-950 panel with a 1px zinc-700 border, 16px radius and 16px padding. A 12px search label precedes a 44px field after 8px. Place a radio fieldset after 16px, with a 10px legend and three 30px scope labels 8px apart. A 10px Suggested caption follows after 20px and a full-width 44px command button after 8px.',
    style:
      'Default sans and zinc-100 text. The search field uses a zinc-900 fill, 1px zinc-500 border, 8px radius, 14px text with normal line-height and zinc-400 placeholder. A 16px zinc-400 magnifier is inset 12px left and 14px top. Scope labels have 1px zinc-700 borders, 6px radii, 12px text and 6px by 12px padding; checked labels use zinc-500 borders and zinc-700 fill. Section captions are zinc-500 uppercase with 0.1em tracking. The command uses zinc-900, an 8px radius, 12px horizontal padding, 14px text, a lime-300 plus and a 12px zinc-400 return arrow, with 8px gaps.',
    states:
      'Query and command show a 2px lime-300 focus outline offset 2px. Native radios are visually hidden and use focus-visible:outline-hidden; their labels draw the same visible outline on keyboard focus. Checked labels use dashed borders in forced-colours mode so selection remains visible without the fill. The command hovers to zinc-800 over 150ms; reduced motion disables that transition. Radio selection is native; the suggested button has no application handler.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
