import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-breakdown-rows',
  name: 'Stat cards — Total with breakdown rows',
  category: 'stat-card',
  tags: ["list","numbers","compact"],
  description: "A headline total and icon sit above three labelled share bars and an expandable counting note. Use it to show the composition of one metric without a full chart.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│ Metric label                      ┌──────┐   │
│ 1,284                             │ Icon │   │
│                                   └──────┘   │
│ First group                     642 | 50%    │
│ ┌────────────────────┬───────────────────┐   │
│ │                    │                   │   │
│ └────────────────────┴───────────────────┘   │
│ Second group                    385 | 30%    │
│ ┌───────────┬────────────────────────────┐   │
│ │           │                            │   │
│ └───────────┴────────────────────────────┘   │
│ Remaining group                 257 | 20%    │
│ ┌───────┬────────────────────────────────┐   │
│ │       │                                │   │
│ └───────┴────────────────────────────────┘   │
│ ──────────────────────────────────────────   │
│ How this is counted                    v     │
└──────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px w-72 card, 320px sm:w-80 from 640px, with 24px p-6 padding, an 8px radius and a 1px border. The header places a label and total beside a 40px icon tile. A three-row list starts 8px below with 8px gaps. Each row has a label and count/share line, then a 6px h-1.5 bar with a 4px top gap. Details follows with 12px top margin, a divider and 8px top padding; the revealed note has an 8px margin.",
    hierarchy: "The total is 36px semibold with tabular digits, below a 14px medium label by 4px. Each 12px row aligns its category left and count plus percentage right. Decorative share bars show 50%, 30% and 20%, with the values repeated in text. The summary is 14px medium; its note is 12px. Slots: label up to 3 words, total up to 6 characters, row names up to 3 words, note one short sentence up to 6 words.",
    states: "The native details is closed initially and opens with mouse or keyboard. Its 16px chevron rotates 180 degrees on open with a 150ms transform transition. The summary shows a 2px neutral-900 focus-visible outline offset 2px. The list and bars are static, with no selected or disabled states.",
    responsive: "Only the width changes at 640px. The icon remains beside the total, labels and counts stay in rows, and the bars fill the inner width at both sizes. The short note keeps the expanded card below 384px tall.",
    usage: "Use when one total has a short categorical breakdown and the counting method needs a note. Pick stat-card-bar-chart for changes over time or stat-card-joined-trio for separate peer metrics. Variations: use amounts instead of counts, show status categories, or replace the note with a short definition of the total.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta

