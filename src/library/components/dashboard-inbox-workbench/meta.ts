import type { ComponentMeta } from '../../types'

export default {
  slug: "dashboard-inbox-workbench",
  name: "Dashboard — Request inbox with detail pane",
  category: "dashboard",
  tags: [
    "split",
    "list",
    "compact"
  ],
  description: "A request list and selected-message detail share a two-pane workbench, with summary counts above. Use when reviewing inbound work is the dashboard’s primary task.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Request inbox                                                 │
│Open 12     Assigned 8      Waiting 4                         │
│Request title    09:41   Request title               [Open]   │
│Alex Rivera             Alex Rivera | 09:41                   │
│Request preview         Message content and context           │
│Review title     09:25                                        │
│Jordan Lee              Owner                Due date         │
│Request preview         Alex Rivera          14 Oct 2026      │
│Update title     09:12                                        │
│Sam Taylor              [Review request] [Assign owner]       │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. A 320px/flexible lg grid uses 32px gaps. The navigation lists three p-4 request cards with 12px gaps. The p-6 detail article places header/status, 32px-separated message and metadata, then a top-bordered action footer.",
    hierarchy: "The h1 leads to compact summary counts, then request titles and the selected detail. aria-current identifies the highlighted request. Message up to 30 words, row titles 4, preview 10 and heading 5.",
    states: "The selected request uses an explicit border and aria-current, with keyboard-focus outlines on every request and action. Detail content is illustrative and static; request selection, assignment and persistence require host integration.",
    responsive: "Below 1024px the inbox list sits above the selected detail. Metadata becomes two columns at sm and one below it. Headers and action rows wrap at narrow widths.",
    usage: "Use for reviewing a short inbox of incoming work. Choose dashboard-activity-feed for a read-only event stream. Variations: add priority badges, show a request category, or replace detail actions with an approval pair."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
