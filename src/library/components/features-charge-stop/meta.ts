import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-charge-stop',
  name: 'Roadside charging comforts',
  category: 'features',
  tags: ['corporate', 'dark'],
  description:
    'An EV-charging network section with practical hub benefits and an illustrated charging session. Use it to explain payment and facilities before drivers plan a stop.',
  preview: { kind: 'section' },
  fonts: ['IBM Plex Sans:wght@400..700'],
  brief: {
    layout:
      '1280px container, 24px horizontal and 64px vertical padding. Copy and a bordered session card form a 1.1:1 split from 1024px, with 40px between them. Two hub benefit notes have 2px left borders. The session card has a peach header, a three-column charge indicator, a facilities inset and a dashed pricing footer.',
    style:
      'IBM Plex Sans on slate-950. Slate-50 headings, slate-300 body, orange-300 accents and an orange-200 session card header. Title is 36px then 48px with 1.1 line height. Session card has 12px corners and slate-600 borders; the facilities inset has 8px corners.',
    states:
      'The hub link underlines on hover. Keyboard focus draws a 2px slate-50 outline offset 4px. The session card is a static illustration with real text, not a control. No motion.',
    responsive:
      'Single column below 1024px. Hub benefit notes form two columns at 640px. Charge percentages grow from 24px to 36px and padding from 24px to 32px at 640px. Container padding becomes 96px vertical and 32px horizontal at 1024px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
