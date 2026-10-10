import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-command-workspace',
  name: 'Command workspace features',
  category: 'features',
  tags: ['dark', 'minimal'],
  description:
    'A keyboard-first productivity section with a command palette illustration and compact feature descriptions. Use it for desktop tools and focused workspaces.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A 1152px maximum-width section with 24px side and 80px vertical padding. A grid aligns its two regions centrally with a 48px gap. Copy has a 12px eyebrow, h2 20px below it, two feature descriptions 32px later with 24px between them, and a link 32px below. The static command palette has a 20px-padded faux search header, a 12px-padded body with three 16px-padded command rows 8px apart, and a 20px horizontal/16px vertical hint footer.',
    style:
      'Default sans on zinc-950 with white headings. Heading is 36px semibold with 1.25 line height and -0.025em tracking. Eyebrow and 12px keyboard labels use the default monospace stack; eyebrow has 0.1em tracking and violet-300 color. Feature body is 14px zinc-400, 1.625 line height, max-width 448px. Palette is zinc-900 with 1px zinc-700 borders and 16px radius. Commands are 14px zinc-300; selected row has 8px radius, violet-300 fill at 10% and violet-200 text. Keycaps have 4px radii, 8px horizontal/4px vertical padding and zinc-700 borders, violet-300 at 30% for the selected key.',
    states:
      'Only Explore the workspace is interactive: underline on hover-capable devices and a 2px white outline offset 2px on keyboard focus, including forced-colors mode. The palette is an illustration with no focusable commands or search control. No motion or transitions.',
    responsive:
      'Below 1024px the regions stack with a 48px gap. At 1024px they become equal columns with an 80px gap. The heading steps from 36px to 48px at 640px, retaining 1.25 line height. Command rows wrap labels and keycaps with 12px gaps rather than overflowing narrow phones. Section padding is unchanged.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
