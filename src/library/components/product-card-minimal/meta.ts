import type { ComponentMeta } from '../../types'

export default {
  slug: 'product-card-minimal',
  name: 'Minimal product card',
  category: 'product-card',
  tags: ['minimal', 'light', 'has-image'],
  description:
    'A minimal product card for a sleep-tracking watch: a rounded 4:3 photo with a heart wishlist toggle, the name and price on one line, a short descriptor, named colour swatches and a small black Add button. The wishlist toggle and colour choices are a native checkbox and radio buttons, so they work without JavaScript. Use it in shop grids, product carousels or related-product rows.',
  preview: { kind: 'element' },
  fonts: ['Albert Sans:wght@400..700'],
  brief: {
    layout:
      'An <article> 288px wide (320px from 640px), with no frame of its own. Top: a 4:3 photo (object-fit cover, 16px radius). A 36px round wishlist toggle sits 12px in from the photo\'s top-right corner. The toggle is a <label> holding a visually hidden checkbox, visually hidden "Save to wishlist" text and an 18px heart. 16px below the photo is a row with the name (an h2 link) on the left and the price on the right, on a shared baseline with at least 16px between them. The descriptor sits under that row. 16px below the descriptor is a row with the colour fieldset (visually hidden legend "Colour") on the left and the Add button on the right, centred vertically with 12px between them. The fieldset holds three labels 14px apart. Each label holds a visually hidden radio, a 14px round swatch and the colour name, 6px apart. Add is a 36px-tall pill with 12px left padding, 16px right padding and a 16px plus icon 6px before the word.',
    style:
      'Albert Sans, neutral-950 text, designed to sit on white. Photo: neutral-100 placeholder fill. Wishlist button: a white circle with a 0 1px 2px rgb(0 0 0 / 5%) shadow; the heart is a 1.5px neutral-950 outline. Name: 16px/24px semibold. Price: 16px/24px medium. Descriptor: 14px neutral-500. Colour names: 13px neutral-500; the checked one is neutral-950. Swatches: Chalk is stone-100, Fog is zinc-400 and Ink is neutral-900, each with a 1px inset ring of black at 15%. The checked swatch gets a 1px neutral-950 outline offset 2px. Add: a neutral-950 pill with 14px medium white text. Its accessible name is "Add Lull Watch 2 to bag", which starts with the visible word.',
    states:
      'Checking the wishlist box fills the heart neutral-950. On hover (devices with hover only), the wishlist circle turns neutral-100, the name underlines with a 4px offset, colour names turn neutral-950 and Add turns neutral-700. Colours change over 150ms. Keyboard focus shows a 2px neutral-950 outline offset 2px on the name link and the Add button. The wishlist circle and each colour label get the same outline through :has(:focus-visible), because their inputs are visually hidden. Arrow keys move between colours, as in any radio group.',
    responsive:
      'The card is 288px wide below 640px and 320px from 640px. The photo keeps its 4:3 ratio, so it is 216px or 240px tall. Nothing else changes. In a product grid, remove the fixed width and let the grid column set it.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
