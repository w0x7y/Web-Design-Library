import type { ComponentMeta } from '../../types'

export default {
  slug: "badges-provenance-header",
  name: "Badges — Document header with provenance",
  category: "badges",
  tags: ["split", "stacked", "compact"],
  description: "A document heading pairs with a compact version badge, followed by ownership metadata and a divided verification footer. Use to summarize one maintained document.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Document title                            [v2.4]     │
│ Brief description of the document scope.             │
│ Alex Rivera | Updated Oct 11                         │
├──────────────────────────────────────────────────────┤
│ [Check Reviewed]                          Public     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px bordered card grows to 384px at sm. The 16px-padded heading row places a flexible 16px title beside a small version pill. Description and ownership metadata follow by 8px and 12px. A neutral-50 footer has 12px vertical and 16px horizontal padding.",
    hierarchy: "Read title and version, scope description, owner and update date, then review status and visibility. Keep the title under 4 words, scope under 9 words, owner under 3 words and version under 6 characters. Reviewed has a check icon as a second cue.",
    states: "The header is informational and has no focusable controls. Version, review status and visibility are explicit text values; there are no hover, selected or disabled states.",
    responsive: "The card grows from 288px to 384px at 640px. The title can wrap while the version pill stays fixed. Ownership metadata wraps as a group and the footer keeps its justified alignment.",
    usage: "Use for document provenance where version and review state matter. Choose a credential card for an awarded qualification. Variations: use a draft version, replace visibility with an access label, or omit the owner when ownership is shared.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
