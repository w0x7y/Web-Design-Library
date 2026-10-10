import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-snowmaking-console',
  name: "Snowmaking operator window",
  category: 'login',
  tags: ["glass","dark","has-image"],
  description: "A Frostline operator login in a smoked-glass window over a snowy mountain photograph, with a practical pre-shift reminder. Use it for ski-resort snowmaking operations.",
  preview: { kind: 'section' },
  fonts: ["Familjen Grotesk:wght@400..700"],
  brief: {
    layout: "A 1152px contained mountain scene inside a slate section padded 32px vertically/24px horizontally. Scene content has 24px padding, a wrapping ruled brand header, and 32px top margin before a grid of shift context and login. Glass panel has 24px padding, a 24px title, 24px form top margin, 20px gaps and 48px controls. Access-help note sits 32px below the grid.",
    style: "Familjen Grotesk; slate-950 page, a snowy full-cover photograph and slate-950 70% scrim. Scene has 16px radius. White headline is 36px medium with 1.1 leading and -0.025em tracking. Glass panel has slate-950 80% fill, white 30% border, 12px radius and 16px backdrop blur. Body hints are sky-100. Opaque slate-950 fields have 1px sky-300 borders and 8px radii; submit is sky-100/slate-950. No shadows.",
    states: "Submit becomes white on hover; it uses a 2px sky-300 focus outline offset 4px. Fields and recovery link have 2px current-color focus outlines offset 4px, retained in forced colors. Email references its resort-account hint, both required fields use autocomplete. Mountain image has descriptive alt; no animation.",
    responsive: "From 640px section padding is 48px vertical/40px horizontal, scene padding 40px, heading 48px and glass padding 32px. From 1024px shift context/form become 1.1:1 columns with 56px gap. On mobile both stack and the scene grows naturally around the content without clipping the form.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
