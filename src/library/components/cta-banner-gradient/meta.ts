import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-banner-gradient',
  name: 'Gradient CTA banner',
  category: 'cta',
  tags: ['gradient', 'playful'],
  description:
    'A playful call-to-action banner for a group-trip planner: a rounded amber-to-pink gradient slab with a pale sun, a chunky Bagel Fat One headline with "group chat" set in a tilted white pill, a dark pill button that tilts on hover, and four rotated sticker chips (ferry, dinner vote, villa split, packing list) scattered along a dotted route. Use it to close the landing page of a consumer or social app.',
  preview: { kind: 'section' },
  fonts: ['Bagel Fat One', 'Gabarito:wght@400..900'],
  brief: {
    layout:
      'Section with 16px side padding (24px from 640px) around a banner of max 1152px with overflow hidden, a 32px radius (40px from 640px) and 48px × 24px padding (64px × 48px from 640px, 64px all round from 1024px). A pale circle sits behind the top-right corner: 288px, offset −96px top and −128px right; 480px and −160px top from 640px; 544px, −192px top and −160px right from 1024px. Copy block: the h2, a paragraph 24px below (max 512px), a wrapping row 40px below with the primary button and a text link (24px column gap, 16px row gap), and a fine-print line 24px below. Stickers: a <ul aria-label="A trip planned in Tandem"> of four pill-shaped <li>s, 48px under the copy, as a wrapping flex row with 12px gaps. From 1024px the banner is a 12-column grid (32px gap, items centred): the copy spans 7 columns and the stickers 5, inside a 352px-tall relative box where each sticker is absolutely placed (ferry: top 8px, left 16px; vote: top 104px, right 0; villa: top 184px, left 0; packing: bottom 8px, right 24px) over a dotted SVG route (viewBox 400 × 352) that links them.',
    style:
      'orange-50 section and violet-950 text. Body text is Gabarito; the h2 is Bagel Fat One. Banner: a linear gradient to the bottom right in oklab, amber-300 → orange-300 → pink-400; the circle is yellow-200 at 60%. h2: weight 400, 0.98 line height, balanced. "group chat" is an inline-block white pill (0.28em side padding, 0.06em bottom padding, fully rounded) rotated −2deg. Paragraph: 18px, 1.625 line height. Primary button: 56px tall and fully rounded, violet-950 with white 18px semibold text (28px left and 10px right padding, 12px gap), a 36px yellow-300 circle holding a 20px violet-950 arrow, and a 0 14px 28px −12px rgb(46 16 101 / 0.7) shadow. Secondary: an 18px semibold text link with a 2px violet-950/40 underline offset 0.3em. Fine print: 15px medium. Stickers are fully rounded pills (6px padding, 16px on the right, 10px gap) with a 32px round badge holding an 18px icon drawn in 2px round strokes (ferry, ballot check, house, suitcase), a semibold label followed by a regular-weight detail, and a 0 10px 20px −8px rgb(76 5 25 / 0.4) shadow. Sticker colours: white with a yellow-300 badge; violet-950 with white text and a pink-300 badge; lime-200 with a white badge; white with a pink-300 badge. Route: a 3px round-capped dotted stroke (dasharray 0.5 11) in violet-950 at 45%.',
    states:
      'On hover the primary button rotates −2deg and scales to 105% over 300ms on a fast ease-out, cubic-bezier(0.22, 1, 0.36, 1), and its arrow moves 2px right. On hover the secondary link\'s underline turns solid violet-950 (150ms). Both links show a 2px violet-950 outline offset 4px on keyboard focus, and it stays visible while hovered. Hover rules apply only on devices that support hover.',
    responsive:
      'Below 1024px the banner stacks: the copy, then the sticker row wrapping under it with small rotations (−2, 2, −1 and 1deg). From 1024px the stickers scatter along the route with larger rotations (−6, 3, −2 and 6deg) and the dotted route appears. h2: 44px, 60px from 640px, 72px from 1024px. Paragraph: 18px, 20px from 640px. Sticker text: 15px, 16px from 640px. Section vertical padding: 64px, 96px from 640px.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
