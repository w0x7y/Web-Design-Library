import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-dive-log',
  name: "Scuba expedition logbook",
  category: 'login',
  tags: ["glass","gradient","dark"],
  description: "A Belowdeck diver login in a translucent panel over a deep emerald-to-slate gradient, paired with depth and duration notes. Use it for scuba logbooks and expedition records.",
  preview: { kind: 'section' },
  fonts: ["Space Grotesk:wght@400..700"],
  brief: {
    layout: "A 1152px container with 48px vertical and 24px side padding. A wrapping brand masthead sits above a 40px-gap grid. Login glass panel has 24px padding, 30px heading, 28px top form margin and 20px control gaps. Beside it, a depth-note column has a left ruler line and two ruled metrics. Inputs/buttons are 48px tall.",
    style: "Space Grotesk and cyan-50 ink on a bottom-right oklab gradient with emerald-950, cyan-950 and slate-950 stops. Glass has white 10% fill, white 30% border, 16px radius and 24px backdrop blur. Body copy is cyan-100. Cyan-950 fields have 1px cyan-300 borders and 8px corners; submit is cyan-100 with cyan-950 text. Depth heading is 44px with 1.1 leading, metrics 36px tabular.",
    states: "Submit becomes white on hover. Inputs and recovery link show 2px current-color outlines offset 4px, retained in forced colors; submit uses cyan-300 for contrast on the glass panel. Required email/password use native autocomplete; email is described by the logbook hint. No movement or animated blur.",
    responsive: "From 640px section padding becomes 64px vertical/40px horizontal, glass padding 32px, ruler inset 40px and depth heading 60px. At 1024px login/depth notes become 1:1.2 columns with 80px gap. On narrow screens login comes first and depth notes remain visible below it.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
