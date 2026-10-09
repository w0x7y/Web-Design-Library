import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-split-image',
  name: 'Split hero with image',
  category: 'hero',
  tags: ['minimal', 'light', 'has-image'],
  description:
    'A calm two-column hero: announcement link, headline, short pitch and two calls to action beside a captioned photo. Use it to open a product or company landing page.',
  preview: { kind: 'section' },
  fonts: ['Hanken Grotesk:wght@400..700'],
  brief: {
    layout:
      'Two columns inside a 1280px container: text on the left (pill-shaped announcement link, h1, one-paragraph pitch, primary and secondary buttons in a row), an 8:9 photo on the right with a one-line caption under it that splits into a place on the left and a figure on the right. Both columns are vertically centred.',
    style:
      'White background, zinc-950 text, zinc-600 body copy, zinc-200 hairlines. Hanken Grotesk throughout: medium-weight 72px headline with 1.05 line height, -0.03em tracking and balanced line breaks, 18px body. Fully rounded buttons 44px tall: solid zinc-950 primary, outlined secondary with a trailing arrow. Photo has a 16px radius; nothing else carries shadows or colour.',
    states:
      'Announcement link and secondary button darken their border and text on hover, and their arrows nudge 2px to the right. Primary button lightens to zinc-800. Every link shows a 2px zinc-950 outline offset by 2px on keyboard focus.',
    responsive:
      'Below 1024px the columns stack (text first, then photo), the photo switches to a 4:3 crop and vertical padding shrinks. The headline steps down from 72px to 60px (640px and up) and 44px on phones.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
