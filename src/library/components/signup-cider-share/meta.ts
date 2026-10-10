import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-cider-share',
  name: 'Cider co-op membership',
  category: 'signup',
  tags: ['glass', 'gradient', 'light'],
  description:
    'A Pressfold cider-press co-op share application with native bottle-quantity choices, collection weekends and age confirmation on a translucent harvest sheet.',
  preview: { kind: 'section' },
  fonts: ['DM Sans:wght@400..700'],
  brief: {
    layout:
      'A 1152px sheet inside 24px side and 64px vertical section padding. Sheet padding 24px, ruled title row, annual share radios 32px below, three contact fields, then a consent and submit strip. 44px inputs, 16px radio-card padding and 32px form gaps.',
    style:
      'DM Sans, green-950 ink over an amber-100 through yellow-50 to lime-200 oklab diagonal gradient. Decorative apple silhouettes green-800 at 20%. Sheet white at 60%, 24px blur, 80% white border and 16px radius. Fields white at 60% with 6px corners; green submit. Heading 36px/1.1, 48px at 640px. No shadows.',
    states:
      'Controls use 2px green-950 keyboard focus outlines offset 2px, including forced-colors mode. Submit button brightens on hover-capable devices. Native fields retain browser validation. No animation. Share radios use native checked state, with a solid border and 5% ink fill. Age and collection confirmation is required. Decorative apple drawing is aria-hidden.',
    responsive:
      'Stacks on phones. At 640px heading becomes 48px, sheet padding 40px and share radios sit in two columns. At 768px title row uses 1.5:1 columns, contact fields share three equal columns, consent and submit share a row.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
