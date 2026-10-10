// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function TogglesIceCreamCart() {
  return (
    <section
      aria-labelledby="toggles-ice-cream-cart-title"
      className="w-72 rounded-[1.75rem] border-2 border-rose-950 bg-rose-50 p-5 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-rose-950 sm:w-96"
    >
      <p className="text-[10px] font-semibold tracking-[0.12em] text-rose-800 uppercase">SCOOPSTEP / CART MENU</p>
      <h2 id="toggles-ice-cream-cart-title" className="mt-2 text-2xl leading-7 font-semibold">On the scoop.</h2>
      <p className="mt-2 text-xs text-rose-800">Show today’s small-batch flavors.</p>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="flex flex-col items-start rounded-2xl border border-rose-950 bg-orange-200 p-3">
          <span className="text-[28px] leading-8 font-bold">01</span>
          <label htmlFor="toggles-ice-cream-cart-cocoa" className="mt-2 block cursor-pointer text-sm font-semibold">Dark cocoa</label>
          <p id="toggles-ice-cream-cart-cocoa-hint" className="mt-1 text-xs leading-4 text-rose-800">12 tubs left</p>
          <div className="mt-4">
            <input
              id="toggles-ice-cream-cart-cocoa"
              name="toggles-ice-cream-cart-cocoa"
              type="checkbox"
              role="switch"
              defaultChecked
              aria-describedby="toggles-ice-cream-cart-cocoa-hint"
              className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-rose-800 bg-rose-50 after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-rose-800 after:content-[''] checked:border-rose-950 checked:bg-rose-950 checked:after:translate-x-5 checked:after:bg-rose-50 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-950 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText] forced-colors:checked:after:bg-[CanvasText]"
            />
          </div>
        </div>
        <div className="flex flex-col items-start rounded-2xl border border-rose-950 bg-lime-100 p-3">
          <span className="text-[28px] leading-8 font-bold">02</span>
          <label htmlFor="toggles-ice-cream-cart-pistachio" className="mt-2 block cursor-pointer text-sm font-semibold">Pistachio</label>
          <p id="toggles-ice-cream-cart-pistachio-hint" className="mt-1 text-xs leading-4 text-rose-800">6 tubs left</p>
          <div className="mt-4">
            <input
              id="toggles-ice-cream-cart-pistachio"
              name="toggles-ice-cream-cart-pistachio"
              type="checkbox"
              role="switch"
              aria-describedby="toggles-ice-cream-cart-pistachio-hint"
              className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-rose-800 bg-rose-50 after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-rose-800 after:content-[''] checked:border-rose-950 checked:bg-rose-950 checked:after:translate-x-5 checked:after:bg-rose-50 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-950 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText] forced-colors:checked:after:bg-[CanvasText]"
            />
          </div>
        </div>
      </div>
      <p className="mt-4 text-[11px] leading-4 text-rose-800">Off flavors stay hidden from the cart menu.</p>
    </section>
  )
}
