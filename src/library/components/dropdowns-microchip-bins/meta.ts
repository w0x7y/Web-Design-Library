import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-microchip-bins',
  name: 'Dropdowns — Semiconductor bin matrix',
  category: 'dropdowns',
  tags: ['glass', 'light'],
  description:
    'A semiconductor packing-bin dropdown for Dieledger, with a frosted six-bin radio matrix and lot traceability details.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px panel with 16px padding. A decorative 48x384px emerald strip sits behind the content, rotated 12 degrees and clipped by the root. A brand and tray strip precedes a 12px-padded frosted disclosure. The 14px summary is followed by lot information and a two-column, three-row bin-radio matrix with 8px gaps and 8px tile padding. A ruled handling note follows.',
    style:
      'Default system sans, emerald-950 text on emerald-100. Root radius 16px; decorative beam emerald-300 at 60%. Glass panel has 12px radius, white border, white at 70% fill and 16px backdrop blur. Bin tiles have 6px radius, white at 60% fill and emerald-800 borders at 40%; selected bin has emerald-100 fill and opaque border. Codes use 12px system monospace, quantities and lot labels 10px emerald-800, native radios 12px with emerald-800 accent.',
    states:
      'A2 begins selected. Native radio arrow keys switch bin highlights and checked marks. Each radio explicitly names both bin and die quantity. The handling note is tied to the bin group via aria-describedby. Decorative beam is aria-hidden and pointer-events none. No hover changes. All controls show a 2px current-colour focus-visible outline offset 2px, including in forced-colors mode. Native summary supports Enter and Space; the chevron rotates 180 degrees when open. No animations or transitions.',
    responsive:
      'Root width is 288px below 640px and 320px from 640px. The internal arrangement, type sizes and padding remain unchanged; all content fits the 384px-high element budget.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
