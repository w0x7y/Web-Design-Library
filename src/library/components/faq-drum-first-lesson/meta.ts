import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-drum-first-lesson',
  name: 'Drum school first-lesson checklist',
  category: 'faq',
  tags: ['brutalist', 'dark'],
  description:
    'A drum-school FAQ with oversized orange type and numbered outline panels. Use it to prepare new students for a first lesson.',
  preview: { kind: 'section' },
  fonts: ['Space Grotesk:wght@400;500;600;700'],
  brief: {
    layout:
      'A 1280px wrapper with 24px horizontal and 64px vertical padding. Introduction and four numbered disclosures sit in a grid with a 40px gap. Each disclosure has 20px horizontal padding and the question grid has 16px gaps. A note sits 32px below the introduction behind a 4px left rule and 20px left padding. Answers have a 65ch maximum width and 24px bottom padding.',
    style:
      'Space Grotesk on neutral-950 with orange-100 text and orange-400 heading, numbering and square 2px panel borders. No shadows. Bold 52px heading with 0.95 leading and -0.05em tracking. Uppercase eyebrow 12px semibold at 0.12em tracking. Introduction 16px with 1.7 leading; note 14px with 1.7 leading. Number labels 12px medium; questions 17px semibold with 1.5 leading and 8px top margins; answers 15px with 1.7 leading.',
    states:
      'Native details disclose each answer independently, with the first answer open. Summary hover underlines only on hover-capable devices. Every summary has a 2px foreground-colour focus-visible outline offset 4px, including in forced-colors mode. The aria-hidden 20px plus rotates 45 degrees when open. No transitions, animation or JavaScript.',
    responsive:
      'Below 1024px the introduction sits above the checklist. At 640px the heading becomes 80px. At 1024px use 0.9fr and 1.1fr columns with a 64px gap and outer padding of 40px horizontal and 96px vertical. Question text wraps within full-width panels at every viewport size.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
