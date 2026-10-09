import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-typography-menu',
  name: 'Dropdowns — Typography menu',
  category: 'dropdowns',
  tags: ['minimal', 'light'],
  description:
    'A native text-style disclosure with font-family radios, typographic samples and a native type-size selector.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide native details disclosure with 16px padding, initially open. The 36px flex summary holds a 36px Aa tile, 14px title and 16px chevron with 12px gaps. A family fieldset starts 16px later with a top divider and 12px top padding. A 9px eyebrow has 8px bottom margin. Three radio labels each have 10px vertical and 8px horizontal padding, a 14px radio, a 28px-wide sample and name/description text, with 12px gaps. A size row starts after 12px with a divider and 12px top padding, a label left and 96px-wide, 36px-tall native select right.',
    style:
      'Default sans font on white with slate-900 text, a 1px slate-200 border and 12px outer radius. Summary and Aa tile have 6px radii; tile uses slate-100 and 20px system serif. Title is 14px semibold. Family labels have 8px radii and blue-50 fill when checked; radios use blue-700 accent. Samples are 20px with 28px line height, in system sans, serif and monospace. Family names are 12px medium with 16px line height, descriptions are 9px slate-600 for contrast on selected blue-50, and the uppercase eyebrow is 9px slate-500 with 0.1em tracking. Size label is 12px medium; select uses 12px text, 8px horizontal padding, a slate-300 border, white fill and 6px radius. No shadows.',
    states:
      'Native summary toggles and rotates the chevron 180 degrees while open. Modern sans starts checked and the select starts at 16px, with 14, 16, 18 and 20px options. Native radios and select retain keyboard interactions; only the choice highlight changes, with samples staying in their own families. aria-labelledby names each family and aria-describedby associates its hint. Each control has a 2px slate-900 focus outline offset 2px. Native checked marks remain visible in forced colours. No hover changes or animation.',
    responsive:
      'The disclosure stays 288px wide at 320px, 390px, 768px and 1440px. Family rows remain stacked and the size label/select remain side by side. There are no breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
