import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-floating-pill',
  name: 'Navbar — Floating pill',
  category: 'navbar',
  tags: ['layered', 'row', 'centered'],
  description:
    'A narrow floating navigation pill sits above a quiet surface. Its mobile menu opens as a separate card with a two-column link grid.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│       ┌──────────────────────────────────────────────┐       │
│       │ Logo     Four page links       [Get started] │       │
│       └──────────────────────────────────────────────┘       │
│                                                              │
│                   Open space below the pill                  │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A neutral-50 section reserves 288px (min-h-72), with 16px outer padding. A max-w-4xl 896px white rounded-full bar is 56px tall, has 16px horizontal padding, a neutral-200 border and shadow-sm. The desktop links are centred with 24px gaps. A mobile absolute card begins 8px below the bar, spans its width and has a rounded-lg border, shadow-lg and 16px padding; its four links form two equal columns with 12px gaps above a full-width action.',
    hierarchy:
      'Logo leads, followed by four 14px links and one Get started action. Keep link labels to 1–2 words and the action to 2 words. The rounded-full silhouette and space below distinguish the bar from an ordinary header.',
    states:
      'Text links change from neutral-900 to neutral-600 on hover. The primary action uses the kit fill, 44px height and a pill radius. The mobile 40px round summary shows bars when closed and a cross when open. The details is initially open. Every enabled control shows a 2px keyboard-focus outline offset 2px. There are no disabled controls.',
    responsive:
      'Below 768px the four desktop links hide and the native mobile menu appears. At 768px the links return, the mobile menu hides and the same floating section height remains. The menu grid stays two columns at 320px.',
    usage:
      'Use above a sparse landing page where navigation should float clear of the content. Choose navbar-links-actions for a full-width site header. Variations: shorten the link set, use a Contact action, or place the pill over a media placeholder.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
