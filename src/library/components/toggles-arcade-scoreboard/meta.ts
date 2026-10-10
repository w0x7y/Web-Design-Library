import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-arcade-scoreboard',
  name: 'Toggles — Arcade-bar scoreboard',
  category: 'toggles',
  tags: ['gradient', 'dark'],
  description:
    'A Pixelpour retro arcade-bar scoreboard with a large points total, leaderboard opt-in and player-session facts. Use it beside a cabinet score summary.',
  preview: { kind: 'element' },
  fonts: ['DM Mono:wght@400;500'],
  brief: {
    layout:
      'A 288px panel with 20px padding. A 10px cabinet eyebrow and 20px title precede a 36px score readout after 20px, marked by a 2px left rule and 16px inset. A bordered leaderboard-control row follows after 20px with 12px padding, a text block and a 44×24px switch separated by 12px. A two-column player-and-credits definition list follows after 16px with 16px gap.',
    style:
      'DM Mono with cyan-50 main text and cyan-200 supporting copy. Diagonal slate-950 to teal-900 gradient in oklab, 16px outer radius and 1px cyan-700 borders. The control row is slate-950 with 8px corners. Title is 20px medium at 28px leading; score is 36px at 40px leading with -0.025em tracking. Labels are 14px semibold; hint and facts are 12px at 16px leading. Checked switch uses cyan-300 with slate-950 thumb; unchecked track is slate-950 with cyan-200 border and thumb. No shadow.',
    states:
      'Post high score starts on. Its native checkbox has role=switch, a linked hint, a 44×24px track, 2px border and 16px thumb travelling 20px when checked. Hover lowers opacity to 80%. Focus-visible draws a 2px cyan-200 outline offset 2px. Forced colours retain ButtonText border and CanvasText thumb. No animation.',
    responsive:
      'Fixed width is 288px below 640px and 320px from 640px. Score, controls, two-column facts, type and spacing stay the same and fit within the 384px-high element frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
