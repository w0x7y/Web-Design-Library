// Fonts: Manrope
export default function ProductCardCameraRental() {
  return (
    <article className="w-72 bg-white p-5 font-['Manrope',ui-sans-serif,system-ui,sans-serif] text-zinc-950 sm:w-[22rem]">
      <p className="text-[10px] font-semibold uppercase tracking-widest">
        Lightmeter Co. / Equipment hire
      </p>
      <div className="mt-4 grid grid-cols-[1fr_4rem] gap-4">
        <img
          className="h-36 w-full rounded-lg object-cover"
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80"
          alt="Black Canon DSLR camera with a lens attached, photographed on a dark surface"
          width="800"
          height="1000"
        />
        <div className="flex flex-col justify-between py-1 text-[10px] leading-4 text-zinc-600">
          <span>
            WEEKEND
            <br />
            READY
          </span>
          <span className="text-2xl leading-none font-medium text-zinc-950">
            02
          </span>
          <span>
            Body + lens
            <br />
            2-day hire
          </span>
        </div>
      </div>
      <h2 className="mt-4 text-xl leading-6 font-semibold tracking-tight">
        The weekend kit
      </h2>
      <p className="mt-1 text-xs leading-5 text-zinc-600">
        DSLR, 50mm lens &amp; a charged battery.
      </p>
      <div className="mt-4 flex items-center justify-between gap-3 border-t border-zinc-200 pt-3">
        <div>
          <p className="text-2xl leading-none font-medium">£38</p>
          <p className="mt-1 text-[10px] text-zinc-600">
            per day · collect Friday
          </p>
        </div>
        <a
          className="rounded-sm py-2 text-xs font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
          href="#weekend-kit"
          aria-label="Reserve the Lightmeter weekend camera kit"
        >
          Reserve kit →
        </a>
      </div>
    </article>
  );
}
