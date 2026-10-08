import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-editorial',
  name: 'Editorial blog card',
  category: 'blog-card',
  tags: ['editorial', 'has-image'],
  description:
    'An editorial card for a long read: a 2px black rule, a photo of mountains at dawn, a Literata serif headline, an italic standfirst, and a byline with a small author portrait, the date and the reading time. The whole card is one link. It stacks on phones and from 768px becomes a story slot with the photo on the left and the text on the right. Use it on a blog index, a magazine home page or a further-reading row.',
  preview: { kind: 'element' },
  fonts: ['Literata:ital,opsz,wght@0,7..72,400..700;1,7..72,400..700'],
  brief: {
    layout:
      'An <article> 288px wide (640px from 768px), with a 2px top rule and 16px of padding above its content (20px from 768px). Below 768px it stacks a 2:1 photo (object-fit cover), then the text 16px below. From 768px it is a grid with a 240px photo column and a flexible text column, 24px apart. The photo sits in a relatively positioned wrapper and is absolutely positioned to fill it, so it is as tall as the text. The text column is a flex column: the h2 holding the link, then the standfirst 8px below (12px from 768px), then the byline 16px below. From 768px the byline is pushed to the bottom with margin-top: auto and has 24px of top padding. The byline is a 32px round portrait with, 10px to its right, the author name on one line and "12 Sep 2026 · 14 min read" (the date in a <time>) under it. The headline link has an ::after with inset 0, so the whole card is the hit area.',
    style:
      'Literata throughout on white, with stone-950 text and a stone-950 rule. Headline: 20px with a 1.2 line height (32px with 1.1 from 768px), semibold, −0.015em tracking, balanced. Standfirst: 15px with a 1.5 line height, italic, stone-600 (16px with 1.55 from 768px). Byline: 13px with a 1.35 line height, stone-600, with the name semibold stone-950. The photo has square corners, as in print. The cover photo has descriptive alt text; the portrait has empty alt text because the name is printed beside it.',
    states:
      'On hover (devices with hover only), the headline gets a 1px underline offset 5px; the photo stays still. Keyboard focus shows a 2px stone-950 outline, offset 8px, around the whole card through :has(:focus-visible). The link itself uses focus-visible:outline-hidden, which removes its own outline but keeps a transparent 2px one for forced-colors mode.',
    responsive:
      'Below 768px: 288px wide and stacked, with the 2:1 photo on top, a 20px headline and a 15px standfirst. From 768px: 640px wide, with the photo in a 240px left column as tall as the text, a 32px headline, a 16px standfirst and the byline at the bottom of the text column.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
