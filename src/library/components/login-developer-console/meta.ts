import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-developer-console',
  name: 'Developer console access',
  category: 'login',
  tags: ['dark', 'brutalist'],
  description:
    'A terminal-inspired sign-in with a service status rail. Use it for developer tools and infrastructure consoles.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1024px maximum-width two-column console: product and status copy on the left, a bordered credential form on the right. 40px gap; 24px form padding.',
    style:
      'Neutral-950 background, neutral-100 monospace text, neutral-700 hairlines and lime-300 highlights. Square corners; 36px headline and 12px status labels.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Use 24px outer padding on phones and 48px at 640px. Desktop columns become a single readable column below 768px; controls stay within the 320px viewport.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
