import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-remote-directory',
  name: 'Distributed team directory',
  category: 'team',
  tags: ['dark', 'minimal'],
  description:
    'A dark directory for a distributed product team with initials, responsibilities and local time zones. Use it on company pages or project workspaces.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'Full-width section with a centered 1024px container, 24px side and 64px vertical padding. Header stacks title and introduction with a 24px gap; introduction is limited to 384px. Four-person list follows after 48px, using 1px grid gaps and an outer border. Tiles have 24px padding, a row of 48px initials and UTC offset, name after 20px, role and city after 4px, contact link after 20px. A dated timezone note follows after 20px.',
    style:
      'Zinc-950 background and tiles, zinc-700 dividing rules, zinc-100 names and zinc-400 supporting text. Default sans heading is 30px medium with 36px line height and -0.025em tracking, names 20px medium with 28px line height, roles 14px with 20px line height. Introduction is 14px with 28px line height. Eyebrow is 12px uppercase lime-300 monospace at 0.16em tracking. Zinc-800 circular badges use 18px initials; UTC offsets use 12px zinc-400 monospace. Contact links are 12px lime-300 with 16px line height, 4px corners and a 14px decorative arrow after an 8px gap. Footnote is 11px zinc-400 monospace.',
    states:
      'Named email links become white on hover and show 2px lime-300 focus outlines with 2px offset. Timezones are labeled as October 2026 rather than presented as a live clock. No animation is used.',
    responsive:
      'Below 640px the directory is one column, heading 30px, side padding 24px and vertical padding 64px. From 640px use two equal columns, 48px heading with line height 1, 32px side padding and 80px vertical padding. Header remains stacked until 768px, then becomes a row aligned to the bottom with a 24px gap. All copy wraps.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
