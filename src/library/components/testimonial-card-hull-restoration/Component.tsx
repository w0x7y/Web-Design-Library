// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function TestimonialCardHullRestoration() {
  return (
    <figure className="w-72 border-2 border-neutral-950 bg-neutral-950 font-['Archivo',ui-sans-serif,system-ui,sans-serif] text-white sm:w-[22rem]">
      <div className="flex items-center justify-between gap-2 bg-yellow-300 px-4 py-3 text-xs text-neutral-950">
        <span className="font-bold tracking-wider">OAK & KEEL</span>
        <span>REFIT / 26</span>
      </div>
      <div className="p-5">
        <p className="text-[10px] uppercase tracking-[0.14em] text-neutral-300">Boat owner report</p>
        <blockquote className="mt-4 text-[22px] leading-[30px] font-medium">
          <p>“The new planks follow her old lines. After a week afloat, the bilge is still dry.”</p>
        </blockquote>
      </div>
      <figcaption className="grid grid-cols-2 border-t border-neutral-700 px-5 py-4 text-xs">
        <p className="font-bold">Mira Fletcher<span className="mt-1 block font-normal text-neutral-300">Boat owner</span></p>
        <p className="border-l border-neutral-700 pl-3 text-neutral-300">M.V. Finch<br />1938 motor launch</p>
      </figcaption>
    </figure>
  )
}
