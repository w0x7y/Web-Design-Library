import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-grid-outages',
  name: 'Power grid outage register',
  category: 'data-table',
  tags: ['glass', 'dark'],
  description:
    'A warm glass outage register for Switchline with customer impact, feeder-level incidents and a native crew-update disclosure. Use it in a power distribution control room.',
  preview: { kind: 'section' },
  fonts: ['Archivo:wght@400;500;600;700'],
  brief: {
    layout:
      '1280px container with header, rounded translucent incident panel, impact metric and four-column outage table. Panel padding is 16px then 32px at 768px. Three feeders list area, affected customers and crew restoration estimates; a separate disclosure holds the leading incident note.',
    style:
      'Archivo on a dark diagonal stone-to-rust gradient from #1c1917 to #431407. Orange-50 text, stone-300 notes, stone-600 hairlines, orange-300 64px impact number. Glass panel has white 5% fill, white 20% border, 16px radius and 24px backdrop blur. Headline grows from 32px to 44px.',
    states:
      'Incident log link and native summary have 2px currentColor focus-visible outlines offset 2px and underline on hover. Native disclosure opens a crew note; numeric impact and written incident types avoid color-only meaning. No motion.',
    responsive:
      'Below 768px rows become two-column records with feeder spanning both columns and visible field labels. Panel uses 16px padding on mobile and 32px on desktop. Header and impact line wrap; section padding is 20px on mobile and 40px from 768px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
