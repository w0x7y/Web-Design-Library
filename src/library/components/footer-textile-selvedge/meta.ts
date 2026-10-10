import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-textile-selvedge',
  name: 'Textile selvedge footer',
  category: 'footer',
  tags: ['brutalist', 'light'],
  description:
    'A textile mill footer with a striped fabric specimen, technical weave details and a sample-book invitation. Use it for material suppliers and trade manufacturers.',
  preview: { kind: 'section' },
  fonts: ['Space Grotesk:wght@400..700'],
  brief: {
    layout:
      '1280px centred container with 40px vertical and 24px side padding. A double-ruled masthead precedes a 32px-padded main grid with 32px gaps, a sampling invitation and an 80px striped specimen. A two-column specification list, wrapping mill navigation and ruled legal strip complete the footer.',
    style:
      'Space Grotesk on orange-50, neutral-950 text and 2px rules. The specimen has repeating 2px black/6px cream stripes, and cream 12px bold labels. Heading is 40px bold with 1.05 line height and -0.04em tracking; brand 24px bold. Square sample action is orange-300, 48px minimum height with 2px ink border, 20px side padding and 14px bold text. No radii or shadows.',
    states:
      'Text links underline on hover-capable devices. Sample action turns neutral-950 with orange-50 text on hover. Every link has a 2px currentColor keyboard outline offset 4px, including forced colors. No motion.',
    responsive:
      'Below 1024px main regions stack. From 640px heading grows to 56px. At 1024px main grid uses 1.4fr/1fr columns with a 64px gap and side padding grows to 32px. Masthead, resource navigation and legal strip wrap at all widths.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
