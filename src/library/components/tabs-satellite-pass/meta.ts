import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-satellite-pass',
  name: 'Tabs — Satellite pass bands',
  category: 'tabs',
  tags: ['gradient', 'dark'],
  description:
    'A Downbeam ground-station card with command and payload band tabs and a pass-elevation trace. Use it for satellite-link reservations.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Sans:wght@400..700'],
  brief: {
    layout:
      'A 20px-padded, 1px-bordered card with 12px corners. The split station masthead has a bottom rule and 12px bottom padding. The selected panel puts a 24px band title beside its frequency, then an 80px elevation diagram, window and peak labels, and reservation status. Two 40px band tabs sit at the bottom, 16px apart.',
    style:
      'IBM Plex Sans on a vertical zinc-950, amber-950 and stone-900 gradient in oklab. Amber-50 primary ink, amber-100 secondary copy and amber-200 frequencies. Frame and header rule are amber-700. The chart uses an amber grid, a warm-yellow trace and translucent area fill. Tabs have amber-600 bottom borders; active text and border are amber-200. No shadows.',
    states:
      'Native radios switch the named S-band and X-band reservations via CSS. Tabs become amber-200 on hover and selection; focus is a 2px amber-100 outline offset 2px. High contrast keeps radio focus and selection underlines. Pass window and peak are written in text so the diagram carries no exclusive information. No motion.',
    responsive:
      '288px wide below 640px; 352px from 640px. The arrangement and type sizes stay the same; the wider frame adds room for the content.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
