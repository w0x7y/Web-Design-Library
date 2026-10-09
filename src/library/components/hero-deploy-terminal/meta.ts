import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-deploy-terminal',
  name: 'Terminal deployment hero',
  category: 'hero',
  tags: ['dark', 'minimal'],
  description:
    'A developer platform hero with a deployment log and production status. Use it for infrastructure tools and technical product launches.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A centered 1152px grid with 80px vertical and 24px horizontal padding and 48px gap. Headline, 448px-wide description and wrapping 48px actions sit beside a terminal. Its toolbar has 20px horizontal and 16px vertical padding, a branch label and Live badge. Log has a command, three checkmarked lines and a success message, with 16px spacing. Three facts follow in a bordered grid with 24px gaps and 20px padding.',
    style:
      'Default sans on zinc-950 with white text; monospace identifies branch, command, log and code facts. Heading is 48px semibold with 1.05 line-height and -0.025em tracking. Body is 18px zinc-400 with 1.625 line-height. Emerald-300 primary action has 8px corners and zinc-950 text. Terminal is zinc-900 with zinc-700 borders and 16px corners. Live badge has emerald-300 ink and 10% fill; success has a 2px emerald border.',
    states:
      'Primary link fills emerald-200 on hover and docs link turns white. Both show a 2px white keyboard focus outline offset 2px, including forced colours. Log is a static example. No transitions.',
    responsive:
      'Below 640px heading is 48px, log padding is 20px and facts use two columns. At 640px heading becomes 60px, log padding 32px and facts use three columns. At 1024px the terminal moves into a second equal column with 64px gap. Log lines wrap and terminal can shrink without overflow.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
