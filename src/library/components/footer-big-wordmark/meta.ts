import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-big-wordmark',
  name: 'Wordmark footer',
  category: 'footer',
  tags: ['brutalist', 'dark'],
  description:
    'A brutalist dark footer for a nightclub. A mailing-list sign-up, a Club link list and a Visit block with address and opening hours sit in a grid of 2px white rules, above a legal and social bar. Below them the club name is a giant condensed wordmark that spans the full width and sits on the bottom edge. Use it for venues, labels, studios and events.',
  preview: { kind: 'section' },
  fonts: ['Big Shoulders:opsz,wght@10..72,100..900'],
  brief: {
    layout:
      '<footer> with overflow hidden and no max width. Top grid: one column on phones; two from 640px, where the sign-up cell spans both and Club and Visit sit side by side; four from 1024px (sign-up spans 2, then Club, then Visit). Cells have 40px × 16px padding (24px sides from 640px, 48px × 32px from 1024px) and are separated by 2px rules: below 1024px Club and Visit have a top rule, Visit also gets a left rule from 640px, and from 1024px both have a left rule and no top rule. Sign-up cell: the h2 (max 448px), then a form 32px below (max 512px) with a visible "Email address" label and, 8px under it, a flex row of the input (56px tall, filling the row, no right border) and the Sign up button (56px tall). Club: a <nav aria-labelledby> with an h2 label and a <ul> 16px below, items 4px apart. Visit: an h2 label, an <address> 16px below, a <dl> of opening hours 24px below as a two-column grid (auto and 1fr, 16px × 4px gaps), and a note 24px below. Bar: 2px rules top and bottom and 20px vertical padding, with the copyright and a <nav aria-label="Legal and social"> list (24px × 8px gaps, wrapping) stacked 16px apart. Wordmark: a container (container-type: inline-size) with the same side padding as the cells, holding an aria-hidden <p> "Sublevel".',
    style:
      'neutral-950 background, neutral-100 text, Big Shoulders throughout, everything uppercase except the hours and the note. Rules, input and button borders: 2px neutral-100. h2: 40px extrabold, 0.92 line height. Form label and cell headings: 14px bold with 0.08em tracking; the headings are neutral-400. Input: 20px semibold, 16px side padding, neutral-400 placeholder. Button: lime-300 with 20px weight-900 neutral-950 text, 0.04em tracking and 24px side padding. Club links: 30px bold, 1.25 line height. Address: 24px bold, 1.25 line height. Hours: 18px medium with the days in bold. Note: 18px medium neutral-400, 1.375 line height. Bar: 14px bold, 0.08em tracking. Wordmark: weight 900, −0.02em tracking, a font size of 29.4cqw so the eight letters fill the container\'s width, a 0.81 line height so the baseline sits on the footer\'s bottom edge, and 3cqw top padding. Its glyph box rises over the bar, so it has pointer-events none (and user-select none) to keep the bar links clickable.',
    states:
      'Club and bar links invert on hover to a lime-300 fill with neutral-950 text (4px side padding offset by a −4px margin). On keyboard focus they show a 2px lime-300 outline offset 2px, which stays visible on the lime fill because of the dark gap. The email input hides its outline with outline-hidden (a transparent 2px outline remains for forced-colors mode) and instead inverts while focused: a neutral-100 fill, neutral-950 text and a neutral-600 placeholder. The button turns white on hover (150ms). On focus it shows an inset 2px neutral-950 outline (offset −6px), so the ring never crosses the input\'s border. Hover rules apply only on devices that support hover.',
    responsive:
      'Grid: 1 column, 2 from 640px, 4 from 1024px, with the rules moving as described in the layout. h2: 40px, 48px from 640px. Side padding of the cells, bar and wordmark: 16px, 24px from 640px, 32px from 1024px. Cells get 48px vertical padding from 1024px. Bar: stacked below 768px, a single space-between row from 768px. The wordmark scales with its container, from about 105px type at 390px to 405px at 1440px.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
