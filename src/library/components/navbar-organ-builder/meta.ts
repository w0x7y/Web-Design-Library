import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-organ-builder',
  name: "Pipe-organ builder navigation",
  category: 'navbar',
  tags: ['brutalist', 'light'],
  description: "A pipe-organ builder header for Reed & Pipe, with a pipe emblem, service index and a solid site-survey panel. Use it for organ commissions and restoration workshops.",
  preview: { kind: 'section' },
  fonts: ['Space Mono:wght@400;700'],
  brief: {
    layout: "A 1280px maximum grid with 2px black outer side borders. Identity panel has 24px padding, a 40px pipe emblem separated from a 24px bold two-line name by 16px, then a 12px location label 16px below. Service index is a two-column 14px grid with 16px gaps in a 24px-padded panel. Survey panel has 24px padding, a 12px availability label and an 18px bold action 16px below.",
    style: "Space Mono on yellow-100 with black type and 2px black top/bottom rules. Emblem has three black pipes with orange-600 mouths. Brand has 1 line height. Black survey panel has yellow-100 text. Square corners, no shadows.",
    states: "Brand underlines on hover. Service links underline with 4px offset. Survey panel fills neutral-800. All links show a 2px currentColor keyboard-focus outline offset 2px; the survey panel uses black for contrast with the surrounding light canvas. Focus is visible in forced colours. Pipe emblem is decorative. No motion.",
    responsive: "Panels stack below 768px with 2px bottom dividers. At 768px use 1fr 1fr auto columns; identity and service dividers move to the right. Container caps at 1280px and every panel keeps 24px padding. Service labels wrap within two columns at 320px.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
