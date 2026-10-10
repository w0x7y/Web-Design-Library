import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-museum-audio',
  name: 'Museum visitor transcript',
  category: 'testimonials',
  tags: ['editorial', 'dark', 'has-image'],
  description:
    'An architectural portrait with timecoded visitor remarks. Use it for a museum, exhibition or cultural programme.',
  preview: { kind: 'section' },
  fonts: ['Newsreader:wght@400..600'],
  brief: {
    layout:
      '1280px section with a title above a 4:5 architectural photo and two timecoded transcript excerpts. At 768px use 1fr / 1.2fr columns with 48px gap; 24px phone gutters and 64px vertical padding, 40px gutters at 640px and 96px padding at 1024px.',
    style:
      'Slate-950 ground, slate-100 Newsreader text and sky-200 sans-serif transcript labels. Heading 36px increasing to 48px at 640px. Quotes 30px, 36px at 640px, with 1.3 leading. Thin slate-700 excerpt rules, square photo without shadows.',
    states:
      'Links underline on hover on devices with hover. Every link has a 2px current-colour focus-visible outline offset 4px. No animation or automatic movement.',
    responsive:
      'Photo and excerpts stack below 768px; columns appear at 768px. Title and quote sizes grow at 640px. The photo keeps its 4:5 crop at every width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
