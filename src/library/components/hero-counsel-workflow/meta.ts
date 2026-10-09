import type { ComponentMeta } from '../../types'

export default {
  slug: "hero-counsel-workflow",
  name: "Legal operations workflow",
  category: "hero",
  tags: [
    "corporate",
    "dark"
  ],
  description: "A legal-operations hero with an open contract workflow and a concise handoff promise. Use it for business software that coordinates review and approval.",
  preview: {
    kind: "section"
  },
  fonts: [
    "IBM Plex Sans:wght@400..600"
  ],
  brief: {
    layout: "A 1280px container padded 24px by 64px. Masthead above a 48px-gap introduction in 2:1 columns from 1024px. The main copy has a 40px heading, paragraph and paired links. A border-left note sits to the right. Four workflow stages form an ordered list below, each with a numbered label, owner and status, separated by top rules.",
    style: "IBM Plex Sans on slate-900, white headings, slate-300 body and teal-300 accents. Headline is 40px at 1.1 leading and 600 weight, increasing to 64px at 640px. Teal-300 CTA has slate-950 text and a 4px radius; secondary action is underlined. Workflow uses slate-600 rules and teal-300 status words, never colour alone.",
    states: "Primary link fills teal-200 and secondary link becomes teal-300 on hover. Both have 2px teal-300 focus outlines offset 4px. Workflow is semantic ol with role=list. No animation.",
    responsive: "Introduction and stages stack at 320px. At 640px headline becomes 64px and workflow uses two columns. At 1024px introduction becomes 2:1 and workflow uses four columns; note stays beside the copy. All action rows wrap."
  },
  addedAt: "2026-10-10"
} satisfies ComponentMeta
