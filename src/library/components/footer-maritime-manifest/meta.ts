import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-maritime-manifest',
  name: 'Maritime manifest footer',
  tags: ['minimal', 'corporate', 'dark'],
  fonts: ['Barlow:wght@400;500;600'],
  description:
    'A short-sea freight footer with a cargo-desk contact, loading and discharge ports, and shipment resources. Use it for shipping agents and maritime logistics operators.',
  brief: {
    layout:
      '1280px centred container with 40px vertical and 24px side padding. Identity and cargo contact sit beside a manifest panel, separated by 40px. Manifest has a 20px-side/16px-vertical header, 20px-padded route and four shipment links. A bottom rule and wrapping 12px policy navigation sit 40px below.',
    style:
      'Barlow on blue-950, blue-50 main text, blue-200 metadata and cyan-200 ship mark and route arrow. Manifest and legal rules are 1px blue-300/40; header is blue-900/50. Brand and ports are 24px, medium ports and semibold brand; body and resources 14px. Contact has a 2px cyan-200 left rule, 16px inset and 20px medium tabular telephone. Square geometry with no shadows.',
    states:
      'Brand, telephone and policies underline on hover-capable devices. Shipment resources fill blue-900 on hover. Every link has a 2px currentColor outline offset 4px on keyboard focus, including forced colors. Voyage timing and ports are written in text; decorative SVGs are hidden from assistive technology. No motion.',
    responsive:
      'Below 640px ports stack with a downward arrow and resources form one column. At 640px route becomes 1fr/auto/1fr with horizontal arrow and resources become two columns. Below 1024px identity and manifest stack; at 1024px they use 288px/flexible columns with 64px gap, and outer side padding grows to 32px. Header and legal rows wrap at all widths.',
  },
  category: 'footer',
  preview: { kind: 'section' },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
