import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-shipping-selector',
  name: 'Dropdowns — Shipping selector',
  category: 'dropdowns',
  tags: ['editorial', 'light'],
  description:
    'A native delivery-options disclosure with labelled shipping radios, written arrival estimates and prices.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide native details disclosure with 20px padding, initially open. Its summary pairs a small eyebrow and 20px serif title with a 16px chevron, 12px apart. After 20px, a fieldset contains three delivery labels with 8px gaps. Each label has 12px padding, a 16px radio, flexible method/estimate text and a price, with 12px gaps. The delivery note follows after 16px.',
    style:
      'Default sans font on stone-50 with stone-900 text, a 1px stone-300 border and 12px outer radius. Eyebrow is 9px stone-600 uppercase with 0.1em tracking; heading is 20px system serif with 28px line height and a 4px top margin. Option rows have 1px stone-300 borders, white fill and 8px radii, becoming emerald-800 bordered and emerald-50 filled when checked. Method names and prices are 12px semibold with 16px line height; estimates are 10px stone-600 with a 4px top margin. Note is 10px stone-600 with 16px line height. No shadows.',
    states:
      'Standard starts selected. Native summary toggles with keyboard or pointer and rotates its chevron 180 degrees while open. Native radios support arrow keys, show emerald-800 accents and retain their checked indicators in forced colours. Every control has a 2px slate-900 focus outline offset 2px. aria-labelledby names each method and price; aria-describedby associates each delivery estimate and the fieldset packing note. No hover changes or animation.',
    responsive:
      'The disclosure stays 288px wide at 320px, 390px, 768px and 1440px. Keep the three methods stacked, and let estimates wrap within their flexible text column. No breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
