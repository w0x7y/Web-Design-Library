import { metaBySlug } from '../../src/library/registry'

// Three real components, stacked back to front. Positions are shares of the showcase box, so the
// stack keeps its shape at every width; each card is 16:10 like the grid's thumbnails. A slug that
// leaves the library fails the build (the home page is pre-rendered) rather than dropping a card. Each
// component also renders in the grid below, so it must not define element ids (showcase.test.ts checks):
// a second copy of an id would break the first's references (url(#…), aria-*) when the hero hides.
// `label` places the name tag on a corner of the card that the cards in front leave visible.
export const SHOWCASE = [
  { slug: 'hero-editorial-serif', place: 'top-0 left-0 w-[68%]', delay: '[animation-delay:80ms]', label: 'bottom-2.5 left-2.5' },
  { slug: 'testimonials-quote-large', place: 'top-[22%] right-0 z-10 w-[62%]', delay: '[animation-delay:180ms]', label: 'top-2.5 right-2.5' },
  { slug: 'cta-banner-gradient', place: 'bottom-0 left-[8%] z-20 w-[56%]', delay: '[animation-delay:280ms]', label: 'bottom-2.5 left-2.5' },
].map((card) => {
  const meta = metaBySlug(card.slug)
  if (!meta) throw new Error(`Hero showcase: no component "${card.slug}" in the library`)
  return { ...card, meta }
})
