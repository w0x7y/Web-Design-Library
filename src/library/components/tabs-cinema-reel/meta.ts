import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-cinema-reel',
  name: 'Tabs — Cinema programme',
  category: 'tabs',
  tags: ['editorial', 'dark', 'has-image'],
  description:
    'An Aisle Eleven cinema programme with auditorium photography and ticket-stub tabs for screening and access information. Use it for independent venue listings.',
  preview: { kind: 'element' },
  fonts: ['Newsreader:wght@400..700'],
  brief: {
    layout:
      'A square 1px-bordered card. A 96px-high auditorium photo sits above a masthead padded 12px vertically and 16px horizontally. The selected programme panel has 16px padding, a screening label, a 26px film title, director and duration, then subtitle details. Two 44px ticket-stub tabs sit along the bottom.',
    style:
      'Newsreader on neutral-950 with orange-100 main text and orange-200 labels. Neutral-300 descriptions, neutral-700 frame and masthead separator. Bottom tabs have neutral-500 top borders. Checked stub fills orange-100 with neutral-950 ink. Film titles have 28px line height; body is 14px. No radii or shadows.',
    states:
      'Native radios switch between screening and visit information using CSS. Unselected tabs hover neutral-800; checked stubs invert orange-100 and neutral-950. Focus is a 2px orange-200 outline with 2px offset. High contrast retains input focus and underlines selection. Photograph has descriptive alt text. No animation.',
    responsive:
      '288px wide below 640px; 352px from 640px. The arrangement and type sizes stay the same; the wider frame adds room for the content.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
