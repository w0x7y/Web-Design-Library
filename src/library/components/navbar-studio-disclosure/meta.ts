import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-studio-disclosure',
  name: 'Studio disclosure navigation',
  category: 'navbar',
  tags: ['minimal', 'light'],
  description:
    'A restrained studio header with a native services disclosure and prominent project enquiry link. Use it for small agencies and independent studios.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'Centered 1152px flex container with 24px padding and gap. A 24px wordmark sits beside wrapping Studio navigation with 20px gaps and 14px text. Selected work and About us have 12px top padding. Services summary has 12px vertical padding and a 14px SVG plus 12px from its label. Details reveals a services panel up to 256px wide in normal flow, with 16px padding, a description and three links 12px apart. Project pill is 44px tall with 20px horizontal padding.',
    style:
      'Default sans, white background, zinc-950 ink and zinc-200 header border. Wordmark is semibold with -0.025em tracking. Indigo-700 project pill has white medium text and 16px arrow. Summary has 6px corners; services panel has 8px corners, zinc-200 border and zinc-50 fill. Panel description is 12px uppercase zinc-600 with 0.05em tracking.',
    states:
      'Native details opens by mouse or keyboard; decorative SVG plus rotates 45deg while open. Brand and summary turn indigo-700 on hover; ordinary and service links underline; project pill fills indigo-800. Every control shows a 2px zinc-950 keyboard outline offset 2px, including forced colours. No transitions.',
    responsive:
      'Header stacks below 768px and becomes a top-aligned justified row at 768px. Navigation wraps at every width. Expanded services stay in normal document flow, increasing header height instead of overlapping content. Panel width is capped at 256px and fits narrow viewports.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
