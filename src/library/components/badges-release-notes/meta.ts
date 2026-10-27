import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-release-notes',
  name: 'Badges — Release notes with change labels',
  category: 'badges',
  tags: ['asymmetric', 'list'],
  description: 'A changelog section lists releases with a version pill and date beside a title and change lines, each led by a fixed-width New, Improved or Fixed label. Use for release notes that readers scan by type of change.',
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│ Changelog                                                  │
│ Headline that names what changed                           │
│ Lede that explains how often releases ship                 │
├────────────────────────────────────────────────────────────┤
│ (v2.4.0) (Latest)   Release title                          │
│ Oct 21, 2026        (New)       Change line                │
│                     (Improved)  Change line                │
│                     (Fixed)     Change line                │
├────────────────────────────────────────────────────────────┤
│ (v2.3.1)            Release title                          │
│ Oct 8, 2026         (Fixed)     Change line                │
│                     (Fixed)     Change line                │
├────────────────────────────────────────────────────────────┤
│ (v2.3.0)            Release title                          │
│ Sep 24, 2026        (New)       Change line                │
│                     (Improved)  Change line                │
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A white section uses mx-auto max-w-3xl px-6 py-16 sm:py-24. The header stacks a 14px eyebrow, a text-3xl/sm:text-4xl semibold headline 8px below and a text-lg lede 16px below. 48px lower, an ordered list has a top border and neutral-200 dividers, and each release has 32px vertical padding. From 768px each release is a grid of a 160px meta column and a flexible column with 32px gaps. The meta column holds a mono version pill (with Latest beside it on the newest release) above a 14px date, 8px apart. The content column holds an 18px semibold title and, 16px below, change rows 12px apart: an 80px (w-20) centered label, a 12px gap and 14px neutral-600 text aligned on its first baseline.',
    hierarchy: 'Read the eyebrow, headline and lede, then each release newest first: version, date, title and changes. Labels differ in style as well as words: New is solid neutral-900, Improved has a neutral-300 outline, Fixed a dashed neutral-400 border, and Latest a neutral-100 fill. The fixed label width keeps change text in one column. Keep titles under 10 words, change lines under 20 words and labels to one word. Dates are time elements with machine-readable values.',
    states: 'The section is static: badges and change lines have no hover or focus states. Every label is a word, so the type of change never depends on fill alone, and borders keep each label shape in forced-colors mode.',
    responsive: 'Below 768px each release stacks: the version pill, Latest and date share one wrapping row with 12px gaps, and the title starts 16px below. From 768px the 160px meta column sits left of the title with the date under the version. At 640px the vertical padding grows from 64px to 96px and the headline from 30px to 36px.',
    usage: 'Use for changelogs, release notes and update histories. Pick badges-milestone-strip for a short progress sequence without per-item changes. Variations: add a Breaking or Security label, link each version to its full notes, or group change lines under one label heading instead of repeating the label.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
