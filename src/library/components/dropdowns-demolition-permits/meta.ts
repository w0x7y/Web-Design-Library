import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-demolition-permits',
  name: 'Dropdowns — Demolition permits',
  category: 'dropdowns',
  tags: ['brutalist', 'light'],
  description:
    'A demolition permit-file dropdown for Breakline, with numbered document links, written review states and a site reference.',
  preview: { kind: 'element' },
  fonts: ['Archivo:wght@400;500;600;700'],
  brief: {
    layout:
      'A 288px rectangular card with a 2px black border. A black brand bar uses 16px horizontal and 12px vertical padding. A 16px-padded disclosure contains a 20px summary over a heavy rule, then a left-ruled list of three permit documents. Each document has a 32px number column, 12px gap, 12px title and 10px status. An orange site strip sits 16px below.',
    style:
      'Archivo, black on stone-100 with no radii or shadows. Brand bar is white on black. Document rows have 1px black bottom rules, 12px padding and bold 24px sequence numbers. Site strip is orange-300 with 12px semibold labels. The summary uses 20px bold tight-tracked type.',
    states:
      'Document links fill orange-200 on hover and point to host permit anchors. Status uses explicit words and dates. role=list preserves list semantics. Native disclosure begins open. All controls show a 2px current-colour focus-visible outline offset 2px, including in forced-colors mode. Native summary supports Enter and Space; the chevron rotates 180 degrees when open. No animations or transitions.',
    responsive:
      'Root width is 288px below 640px and 320px from 640px. The internal arrangement, type sizes and padding remain unchanged; all content fits the 384px-high element budget.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
