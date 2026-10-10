import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-tea-importer',
  name: 'Tea importer arrivals navigation',
  category: 'navbar',
  tags: ['minimal', 'light'],
  description:
    'A tea-importer header for Leaf Passage, with a cup emblem, producer links and a seasonal arrival list. Use it for specialist tea merchants with garden and harvest information.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A 1280px maximum grid with 24px padding and gaps. A 24px cup SVG sits 8px beside a 24px medium wordmark, with a 12px two-line descriptor 12px below. The content column has wrapping 14px navigation with 24px horizontal and 12px vertical gaps. The arrival-list row sits 20px below with a 1px border, white fill, 12px padding and wrapping title/download groups 12px apart. A 12px provenance line follows its title after 4px; PDF details have 8px left margin.',
    style:
      'Default sans stack on green-50 with green-950 text. Green-200 bottom rule and brand divider, green-700 arrival-panel border, green-800 provenance and format text. Square corners, no shadows. The cup and rising steam use currentColor and a 1.5px stroke.',
    states:
      'Wordmark underlines on hover. Navigation and download links underline with 4px offset. Every link has a 2px currentColor keyboard-focus outline offset 2px, also visible in forced colours. The cup is decorative. No motion.',
    responsive:
      'Brand and content stack below 768px. At 768px use 240px 1fr columns, with a green-200 right divider and 24px right padding on the identity. Navigation and arrivals row wrap at every width, including 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
