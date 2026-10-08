import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-glass',
  name: 'Glass navbar',
  category: 'navbar',
  tags: ['glass', 'dark', 'gradient'],
  description:
    'A floating smoked-glass pill on a navy-to-cobalt gradient, with lime and cyan light streaks passing underneath so the blur shows. Logo, four links, Sign in and a lime call to action, plus a glass <details> menu on phones. Use it for dark product and launch pages.',
  preview: { kind: 'section' },
  fonts: ['Host Grotesk:wght@300..800'],
  brief: {
    layout:
      'A gradient band with the bar floating 24px from the top (20px on phones) and about 160px of open gradient below it. The bar is a pill up to 1024px wide and 56px tall: logo mark and wordmark on the left, four links beside them, Sign in and the call to action at the right end. Below 768px the links and Sign in move into a <details> menu whose glass panel opens 8px under the pill, with the links in a 2 × 2 grid above a full-width Sign in button.',
    style:
      'Band: a vertical gradient from zinc-950 through #0a1433 to #1b3a8f, a 384px blue-500 glow at 30% blurred 64px in the top left, and two crisp streaks running past both edges, tilted -6° (lime-300, 12px tall, over a soft 32px lime bloom) and -9° (cyan-300 at 80%, 6px tall), each fading to transparent at both ends. Pill: smoked glass, zinc-950 at 50% (dark enough that the links stay readable over bright content passing underneath), a 15% white hairline, a 1px inset top highlight at 12% white, a soft dark drop shadow and a 24px backdrop blur. Host Grotesk; the wordmark is 16px semibold with -0.01em tracking, links 14px at 75% white. Call to action: lime-300 pill, 40px tall, zinc-950 semibold text. Menu panel: zinc-950 at 60% with the same blur and a 24px radius.',
    states:
      'Links fill with 10% white and turn fully white on hover; Sign in turns white; the call to action lightens to lime-200; the menu button brightens from 10% to 20% white. Links, Sign in and the menu button show a 2px white outline on keyboard focus, the logo a 2px white outline offset 4px, and the call to action a lime-300 outline offset 2px.',
    responsive:
      'From 768px the links and Sign in sit inline and the menu button is hidden; below that the pill holds the logo, the call to action and a 40px round menu button. Side padding is 16px on phones and 24px from 640px. On phones the band is tall enough to contain the open menu.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
