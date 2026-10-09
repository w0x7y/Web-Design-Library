import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-developer-system',
  name: 'Developer system footer',
  category: 'footer',
  tags: ['dark', 'minimal'],
  description:
    'A developer product footer with an operational status banner and grouped technical links. Use it for infrastructure and API product websites.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px dark footer opens with a thin status row. Main content has a wordmark and short product statement beside three link groups: Build, Company and Connect. Bottom contains copyright and legal links.',
    style:
      'Zinc-950 background, white headings, zinc-400 body, emerald-300 operational dot and zinc-800 hairlines. Wordmark is 24px monospace; group labels are 12px uppercase monospace.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Main columns become four at 1024px, two at 640px and one on phones. Status row and legal line wrap. Section horizontal padding is 24px and main vertical padding is 40px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
