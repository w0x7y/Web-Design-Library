import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-large-links',
  name: 'Footer — Large numbered links',
  category: 'footer',
  tags: ['asymmetric', 'list', 'numbers'],
  description:
    'Identity and an audience figure sit beside three numbered destinations with descriptions. Use it for a short directory with prominent links.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Logo                   01   Destination title           ->   │
│ Short statement             One-sentence description         │
│                        ───────────────────────────────────   │
│ 1,284                  02   Resource destination         ->  │
│ members                     One-sentence description         │
│                        ───────────────────────────────────   │
│                        03   Contact destination          ->  │
│                             One-sentence description         │
│ ──────────────────────────────────────────────────────────   │
│ Copyright                                   Privacy Terms    │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A white footer has a top hairline and a 1152px max-w-6xl container with 24px side and 64px top padding, 96px from 640px. At 1024px a 1:2 grid (grid-cols-[1fr_2fr]) has 64px gaps. Identity contains Logo, a 16px statement and 48px figure 32px below. Three ordered list links have top hairlines and 24px vertical padding. At 640px each link has a 112px index column, flexible text and a 24px arrow; below that the 14px mono index sits above the 24px title. Legal row follows a 48px margin and hairline.',
    hierarchy:
      'Three 24px titles are the main navigation with 16px supporting descriptions. The 1,284 figure and members label anchor identity. Limit statement to 22 words, titles to 4 and descriptions to 18. The ol has role=list; visible numbers are aria-hidden to avoid duplicate positions.',
    states:
      'Each entire list entry is a link. Titles hover to neutral-600 and arrows translate 4px on group-hover with a 150ms transform transition. Legal links hover to neutral-600. Every enabled control has a 2px neutral-900 focus outline offset 2px. There are no disabled controls.',
    responsive:
      'Identity stacks above the list below 1024px with 48px gaps. Below 640px each index sits above its title and arrow occupies the right column. At 640px the 112px index column appears. Legal row stacks below 768px and is justified above.',
    usage:
      'Use when three final destinations and a community figure deserve emphasis. Choose footer-link-columns for a deeper directory. Variations: show years instead of member count, change destinations, or replace the figure label.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
