import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-security-assurance',
  name: 'Security assurance features',
  category: 'features',
  tags: ['corporate', 'light'],
  description:
    'A security overview with a trust banner and four explicit assurance rows. Use it for enterprise products that handle sensitive information.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px container has a 48px heading and short description, a pale blue assurance banner, then a two-column grid of four bordered rows. Each row includes an inline check icon, title and explanatory paragraph.',
    style:
      'White background, slate-950 type, blue-700 checks and blue-50 banner. Rows use slate-200 top borders and 24px vertical padding; banner has a 12px radius and no shadow.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Grid becomes two columns at 768px. Header and banner content stack on phones; headline reduces to 36px. Banner action stays a flexible width link.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
