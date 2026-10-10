import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-newsletter-inverse',
  name: 'Inverse newsletter footer',
  category: 'footer',
  tags: ['dark', 'editorial'],
  description:
    'A publication footer centered on a newsletter invitation with a native email form. Use it for independent journals and content businesses.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A centered 1152px container has 24px side, 64px top and 24px bottom padding. The newsletter grid has 32px gaps and a bottom rule with 48px bottom padding. A label precedes the serif h2 by 16px. Native GET signup form has a visible email label 12px above the input/button group, 12px gaps between controls and a hint 12px below. Publication identity and navigation follow with 40px vertical padding and a 32px gap. The wordmark description starts after 12px. Navigation wraps with 24px horizontal and 16px vertical gaps. Legal row has a top rule, 20px top padding and 16px wrapping gap; legal links are 20px apart.',
    style:
      'Emerald-950 canvas, white serif heading and wordmark, emerald-200 labels, description, navigation and legal text, and 1px emerald-800 dividers. Eyebrow is 12px uppercase lime-200 with 0.1em tracking. Title is 36px system serif with 1.25 line height, rising to 48px at 640px and 60px at 1024px. Wordmark is 30px serif with 36px line height. Email input has 16px text, normal line height, a transparent background, 1px emerald-600 border for visible control contrast, 8px radius, 16px side padding and 48px height. Subscribe button is 48px tall with 8px radius, lime-200 fill, emerald-950 14px semibold text and 24px side padding. Hint is 12px with 1.625 line height. Other body text is 14px and legal text 12px.',
    states:
      'Native required email validation applies on submission. The visible label names the input and aria-describedby connects its frequency and unsubscribe hint. Keyboard focus on every link, email field and submit button shows a 2px white outline offset 2px, including in forced colors. Subscribe fill becomes lime-100 on hover, wordmark turns lime-200, and navigation and legal links turn white. No transitions.',
    responsive:
      'Newsletter heading and form stack below 1024px and become two equal columns aligned at the bottom from 1024px. Form controls stack below 640px with flex-none on the input to retain its 48px height. From 640px the controls become a horizontal row with a flexible input and min-width zero. Publication identity and navigation stack below 768px and become a space-between row from 768px. Navigation and legal row wrap. Container side padding stays 24px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
