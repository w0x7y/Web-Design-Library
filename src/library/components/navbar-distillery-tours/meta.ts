import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-distillery-tours',
  name: "Distillery tours navigation",
  category: 'navbar',
  tags: ['playful', 'light'],
  description: "A distillery header for Copper Fin, with a tilted maker stamp, soft capsule links and a weekend tour invitation. Use it for independent spirits makers with bottle shops and tasting rooms.",
  preview: { kind: 'section' },
  fonts: ['Fraunces:wght@400;600;700'],
  brief: {
    layout: "A 1280px maximum flex layout with 24px padding and 32px gaps. Maker stamp has 20px horizontal and 12px vertical padding, a 30px bold wordmark and a 12px sublabel 4px below. Navigation wraps 44px-minimum pill links with 14px semibold text, 12px side padding and 8px gaps. Tour notice has a 12px time label above an 18px semibold action, separated by 8px, behind a left rule with 16px left padding.",
    style: "Fraunces throughout on rose-100 with rose-950 text. White maker stamp rotates -3deg and has a 2px rose-950 border with 16px corners. Wordmark has -0.025em tracking. Capsule links have rose-50 fills, 1px rose-300 borders and fully rounded ends. Tour notice has a 2px rose-950 left rule. No shadows.",
    states: "Maker stamp and tour action underline on hover. Menu pills fill rose-200. All links have 2px currentColor keyboard-focus outlines offset 2px, including forced colours. No motion.",
    responsive: "Regions stack and align to start below 768px. At 768px switch to a wrapping horizontal flex row aligned centrally; the tour notice moves right with auto left margin. Capsule links wrap at every width. Padding stays 24px.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
