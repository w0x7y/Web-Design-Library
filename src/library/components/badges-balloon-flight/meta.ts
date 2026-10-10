import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-balloon-flight',
  name: 'Badges — Balloon flight window',
  category: 'badges',
  tags: ['glass', 'gradient', 'light'],
  description:
    'Aerostat Days balloon-flight badges show a launch window and crew checks over a warm sunrise gradient. Use them in balloon-tour booking summaries.',
  preview: { kind: 'element' },
  fonts: ['Bricolage Grotesque:wght@400..700'],
  brief: {
    layout:
      'A 288px card with 20px padding and 24px radius. A 12px operator label precedes a split row with a 64×88px balloon drawing and a two-line 24px launch-time badge. A native Wind window disclosure and two checked crew labels follow at 16px intervals.',
    style:
      'Bricolage Grotesque on an amber-50 to orange-100 to rose-200 gradient interpolated in oklab. Orange-950 ink and 1px orange-800 border. The 12px wind plate has a white background at 60%, white 1px border, 8px radius and 8px backdrop blur. Crew labels use orange-950 1px rounded-full borders. No shadow.',
    states:
      'The native Wind window summary opens a 12px ground-wind reading. Hover fills the plate white at 80%; keyboard focus shows a 2px orange-950 outline offset 2px. Decorative balloon and check marks are aria-hidden. No animation.',
    responsive:
      'Below 640px the element is 288px wide. At 640px it becomes 352px wide. Internal badge sizes remain unchanged; wrapping rows use their available width. No other breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
