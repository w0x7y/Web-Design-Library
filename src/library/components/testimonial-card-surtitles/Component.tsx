// Fonts: Instrument Serif (https://fonts.google.com/specimen/Instrument+Serif)
export default function TestimonialCardSurtitles() {
  return (
    <figure className="w-72 bg-neutral-900 p-6 text-amber-100 sm:w-[22rem]">
      <div className="flex items-center justify-between gap-3 text-[10px] text-amber-300">
        <span className="font-semibold tracking-[0.18em]">CUEGLASS</span>
        <span>From the wings</span>
      </div>
      <blockquote className="mt-7 font-['Instrument_Serif',ui-serif,Georgia,serif] text-[30px] leading-[34px]">
        <p>“The audience laughed on the right beat.<br /><em>In three languages.”</em></p>
      </blockquote>
      <figcaption className="mt-6 grid grid-cols-2 gap-4 border-t border-neutral-600 pt-4 text-xs text-neutral-300">
        <div>
          <p className="font-semibold text-amber-100">Adele Ren</p>
          <p className="mt-1">Stage manager</p>
        </div>
        <p className="text-right">The Glass Orchard<br />Autumn run, 2026</p>
      </figcaption>
    </figure>
  )
}
