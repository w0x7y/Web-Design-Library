import type { ComponentMeta } from '../../types'

export default {
  slug: "badges-tag-groups",
  name: "Badges — Labelled tag groups",
  category: "badges",
  tags: ["stacked", "compact"],
  description: "An item ID and title lead three labelled metadata groups for priority, labels and owners. Use for compact item classification.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────┐
│ ITEM-1042                        │
│ Item title                       │
│ Priority                         │
│ (Dot High)                       │
│ Labels                           │
│ [Category] [Type] [Stage] (+2)   │
│ Owners                           │
│ (AR Alex Rivera) (JL Jordan Lee) │
└──────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) stack grows to 320px (sm:w-80) at 640px. A 12px mono ID sits above a 14px semibold title. Three groups follow with 16px gaps. Each 12px medium group heading sits 6px above a role=list wrapping row with 6px gaps. Labels use 6px radii; overflow and priority use full radii. Owner chips combine 20px neutral-200 initials circles and 12px names with 6px gaps.",
    hierarchy: "Read the ID and title, then Priority, Labels and Owners. High has a dot and an explicit priority word. Three role-named labels precede a +2 overflow badge with an accessible Two more labels name. Owner initials are decorative next to full names. Title up to 4 words, labels up to 2, names up to 3.",
    states: "Static text and glyphs, with no hover, focus, open, selected or disabled behaviour. Meaning is carried by labels and shapes as well as neutral fill.",
    responsive: "At 640px only the width grows from 288px to 320px. Tags and owners wrap with 6px gaps; labels may form a second row for longer content. Groups remain a single column.",
    usage: "Use for one item with several classes of metadata. Pick badges-status-list to compare statuses of several items. Variations: replace Priority with Severity, add a due-date group, or use one owner and more labels.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
