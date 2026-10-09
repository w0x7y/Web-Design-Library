import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-glass',
  name: 'Glass profile card',
  category: 'profile-card',
  tags: ['glass', 'gradient', 'has-image'],
  description:
    'A frosted-glass profile card on a deep emerald gradient lit by a low amber sun, with avatar, verified name, role, three stats and follow and message buttons. Use it for creator profiles, team pages or social previews.',
  preview: { kind: 'element' },
  fonts: ['Bricolage Grotesque:opsz,wght@12..96,400..700'],
  brief: {
    layout:
      'A rounded gradient panel holding one centred glass card. Card content stacks vertically and centred: circular avatar, name with a verified badge, role, a three-column stat row between two hairlines (value above label), then a full-width Follow button beside a round icon-only message button.',
    style:
      'Panel: emerald-950 to emerald-900 to teal-700 gradient from bottom left to top right, a soft lime glow top left and a crisp amber-to-orange orb behind the card top right, so the blur reads as glass. Card: 10% white fill, 24px backdrop blur, 20% white 1px border, 16px radius, deep green drop shadow. Bricolage Grotesque; white name and values, emerald-100 labels, amber-300 verified badge. Follow is solid white with emerald-950 text; message is a translucent white circle.',
    states:
      'Follow tints to emerald-50 on hover; the message button brightens its fill from 10% to 20% white. Both buttons show a 2px white outline offset by 2px on keyboard focus.',
    responsive:
      'The card is 288px wide on phones and 352px from 640px up, with slightly larger padding and orb on wider screens. Nothing else reflows.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
