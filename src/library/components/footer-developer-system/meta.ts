import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-developer-system',
  name: 'Developer system footer',
  category: 'footer',
  tags: ['dark', 'minimal'],
  description:
    'A developer product footer with an operational status banner and grouped technical links. Use it for infrastructure and API product websites.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A centered 1152px container has 24px side padding. A wrapping status row has 20px vertical padding, 16px gap and bottom rule. The status message pairs an 8px dot with text at an 8px gap; status action has a 16px arrow. Main grid has 40px vertical padding and gaps, with a brand column and three labeled navigation groups. Brand description starts after 16px and signature after 24px. Each navigation list begins after 20px with 12px between rows. Legal row has a top rule, 20px vertical padding and 16px wrapping gap; legal links have 20px gaps.',
    style:
      'Zinc-950 canvas, white wordmark, zinc-400 description, status text, group labels and links. Emerald-300 slash, 8px round status dot and status action; 1px zinc-800 rules. Wordmark is 24px semibold monospace with 32px line height. Status, signature and group labels are 12px monospace; group labels are uppercase with 0.05em tracking. Description is 14px with 1.625 line height and 320px maximum width. Navigation is 14px; legal text is 12px. No shadows.',
    states:
      'Status action gains an underline on hover; wordmark turns emerald-300; navigation and legal links turn white. All links have 2px white focus outlines offset 2px, including in forced colors. Operational status is stated in text as well as shown with a decorative dot. No transitions or live animation.',
    responsive:
      'Main grid stacks below 640px, becomes two equal columns from 640px, and uses a 2fr brand column plus three 1fr link columns from 1024px. Status and legal rows wrap at all widths. Container side padding stays 24px and main vertical padding stays 40px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
