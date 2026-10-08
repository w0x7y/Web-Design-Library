import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-simple',
  name: 'Simple navbar',
  category: 'navbar',
  tags: ['minimal', 'light'],
  description:
    'A quiet light header: logo, five links with the current page marked on the bottom rule, Log in and a dark call to action. On phones and tablets the links fold into a menu built on <details>, so it needs no JavaScript. Use it for docs sites, SaaS pages and blogs.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A full-width header with a bottom hairline. Inside, a 1280px row 64px tall: logo mark and wordmark, the link list 32px to their right, then Log in and the call-to-action button pushed to the end. Below 1024px the links and Log in are replaced by a 36px menu button: a <summary> inside a <details> element, whose panel is positioned absolutely under the header, full width, listing the same links and a Log in button.',
    style:
      'White background, zinc-950 text, zinc-200 hairline; inherits the page font. Wordmark 15px semibold; links 14px medium zinc-600 in 36px-tall hit areas with a 6px radius; the current link is zinc-950 with a 1px zinc-950 line laid over the header\'s bottom border beneath it. Call to action: zinc-950 fill, white 14px medium text, 8px radius, 36px tall, a 1px-offset 2px-blur shadow. Menu button: 36px square, zinc-200 border, 8px radius, a two-line icon that swaps to an X while open. Panel: white with a large soft shadow, 48px rows split by zinc-100 rules, the current page marked with a 6px dot, and an outlined full-width Log in button.',
    states:
      'Links fill with zinc-100 and turn zinc-950 on hover; Log in darkens to zinc-950; the call to action lightens to zinc-800; the menu button fills with zinc-50. Every control shows a 2px zinc-950 outline offset 2px on keyboard focus (4px around the logo). The menu opens and closes on click, Enter or Space because <summary> is natively interactive; the open state is styled from details[open].',
    responsive:
      'From 1024px the links and Log in sit inline and the menu button is hidden. Below 1024px (phones and tablets) only the logo, the call to action and the menu button remain in the bar. Side padding is 16px on phones, 24px from 640px and 32px from 1024px.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
