// Fonts: Fraunces
export default function ProductCardChocolateFlight() {
  return (
    <article className="w-72 border border-amber-900 bg-amber-50 p-5 font-['Fraunces',ui-serif,Georgia,serif] text-amber-950 sm:w-[21rem]">
      <div className="flex justify-between gap-3 text-[10px] uppercase tracking-widest">
        <span>Nib Bureau</span>
        <span>Flight 03</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2" aria-hidden="true">
        <div className="flex h-20 items-end bg-amber-950 p-3 text-sm text-amber-50">
          72%
        </div>
        <div className="flex h-20 items-end bg-amber-900 p-3 text-sm text-amber-50">
          80%
        </div>
        <div className="flex h-20 items-end bg-amber-800 p-3 text-sm text-amber-50">
          85%
        </div>
      </div>
      <h2 className="mt-4 text-[26px] leading-tight">
        Three places.
        <br />
        One cacao flight.
      </h2>
      <p className="mt-2 text-xs leading-5 text-amber-900">
        Ecuador 72%, Peru 80%, Ghana 85%. Taste how origin changes the finish.
      </p>
      <p className="mt-2 text-[10px] uppercase tracking-wide text-amber-900">
        3 × 40g bars · Single-origin cacao
      </p>
      <div className="mt-4 flex items-center justify-between gap-4 border-t border-amber-900 pt-3">
        <p className="text-xl">£18</p>
        <a
          className="rounded-sm py-1 text-xs underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-950"
          href="#nib-bureau-flight"
          aria-label="Order Nib Bureau origin chocolate flight"
        >
          Order the flight ↗
        </a>
      </div>
    </article>
  );
}
