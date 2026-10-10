// Fonts: Bricolage Grotesque
export default function ProductCardDogTravel() {
  return (
    <article className="w-72 rounded-3xl bg-rose-50 p-5 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-rose-950 sm:w-[21rem]">
      <p className="text-xs font-bold tracking-wide">puddlehound</p>
      <div className="mt-4 grid grid-cols-[6rem_1fr] items-center gap-4">
        <img
          className="size-24 rounded-full border-2 border-rose-950 object-cover"
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80"
          alt="A small pug looking up, ready to accompany its owner"
          width="800"
          height="1067"
        />
        <h2 className="text-[26px] leading-[1.05] font-bold tracking-tight">
          Their spot.
          <br />
          Anywhere.
        </h2>
      </div>
      <p className="mt-4 text-xs leading-5 text-rose-800">
        A wipe-clean travel mat. Folds small enough for the café bag.
      </p>
      <label
        className="mt-3 block text-[10px] font-semibold uppercase tracking-wide"
        htmlFor="product-card-dog-travel-size"
      >
        Fold-up mat size
      </label>
      <select
        className="mt-1 h-9 w-full cursor-pointer appearance-auto rounded-lg border border-rose-800 bg-white px-3 text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-950"
        id="product-card-dog-travel-size"
        name="mat-size"
      >
        <option value="small">Small · 60 × 45 cm</option>
        <option value="large">Large · 90 × 65 cm</option>
      </select>
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-2xl leading-none font-bold">£32</p>
        <a
          className="inline-flex h-10 items-center justify-center rounded-xl bg-rose-950 px-4 text-xs font-bold text-white hover:bg-rose-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-950"
          href="#puddlehound-mat"
          aria-label="Shop the Puddlehound fold-up travel mat"
        >
          Pack their mat →
        </a>
      </div>
    </article>
  );
}
